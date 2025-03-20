import { composeStories } from '@storybook/react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, test, vi } from 'vitest';

import {
  Dummy1,
  Dummy1NotDispVal,
  Dummy2,
  Dummy2NotDispVal,
} from '../../data/SearchListMockData';

import * as stories from './SearchListBody.stories';

import { Rank } from '@/features/Search/common/components/Rank/Rank';
import { positionName } from '@/features/Search/common/functions/positionFunction';
import { GetEnchantDetailsQuery } from '@/repositories/generated/graphql';
import { EnchantData } from '@/repositories/search/_types';

vi.mock('../../../common/components/Rank/Rank');
describe('SearchListBody', () => {
  const {
    EnchantNameAsc,
    EnchantNameDesc,
    NotValEnchantNameAsc,
    SameSortValue,
    DispRowPerPage1,
    DispRowPerPage2,
  } = composeStories(stories);

  const rowCheck = (
    row: HTMLElement,
    data: GetEnchantDetailsQuery['details']['enchants'][number],
    isDispVal: boolean,
  ) => {
    // エンチャント名
    expect(row.children[1]).toHaveTextContent(data.name);
    // 位置
    expect(row.children[2]).toHaveTextContent(data.positionName);
    // ランク
    expect(row.children[3]).toHaveTextContent(data.rank);
    clickRank(row.children[3] as HTMLElement);
    // 対象
    expect(row.children[4]).toHaveTextContent(data.target);
    if (isDispVal) {
      // 値
      expect(row.children[5]).toHaveTextContent(data.value?.toString() || '');
      // 効果
      expect(row.children[6]).toHaveTextContent(
        data.effect.map(e => e?.name).join(''),
      );
      // 入手先
      expect(row.children[7]).toHaveTextContent(
        data.route.map(r => r).join(''),
      );
    } else {
      // 効果
      expect(row.children[5]).toHaveTextContent(
        data.effect.map(e => e?.name).join(','),
      );
      // 入手先
      expect(row.children[6]).toHaveTextContent(
        data.route.map(r => r).join(''),
      );
    }
  };

  const clickRank = async (button: HTMLElement) => {
    expect(Rank).toHaveBeenCalledTimes(0);
    userEvent.click(button);

    await waitFor(() => {
      // モーダルが開くこと
      expect(Rank).toHaveBeenCalledTimes(1);
    });
  };

  test('エンチャント名の昇順の表示確認', () => {
    render(<EnchantNameAsc />);

    const rows = screen.getAllByTestId('enchantRow');

    // 1列目の確認
    rowCheck(rows[0], Dummy1, true);
    // 2列目の確認
    rowCheck(rows[1], Dummy2, true);
  });

  test('エンチャント名の降順の表示確認', () => {
    render(<EnchantNameDesc />);

    const rows = screen.getAllByTestId('enchantRow');

    // 1列目の確認
    rowCheck(rows[0], Dummy2, true);
    // 2列目の確認
    rowCheck(rows[1], Dummy1, true);
  });

  test('エンチャント名の昇順の表示確認(値なし)', () => {
    render(<NotValEnchantNameAsc />);

    const rows = screen.getAllByTestId('enchantRow');

    // 1列目の確認
    rowCheck(rows[0], Dummy1NotDispVal, false);
    // 2列目の確認
    rowCheck(rows[1], Dummy2NotDispVal, false);
  });

  test('同じソート値の表示確認', () => {
    render(<SameSortValue />);

    const rows = screen.getAllByTestId('enchantRow');

    // 1列目の確認
    rowCheck(rows[0], Dummy1, true);
    // 2列目の確認
    rowCheck(rows[1], Dummy2, true);
  });

  test('表示件数1の表示確認', () => {
    render(<DispRowPerPage1 />);

    const rows = screen.getAllByTestId('enchantRow');

    // 表示件数は1件
    expect(rows.length).toBe(1);
    // 1列目の確認
    rowCheck(rows[0], Dummy1, true);
  });

  test('表示件数2の表示確認', () => {
    render(<DispRowPerPage2 />);

    const rows = screen.getAllByTestId('enchantRow');

    // 表示件数は1件
    expect(rows.length).toBe(1);
    // 1列目の確認
    rowCheck(rows[0], Dummy2, true);
  });
});

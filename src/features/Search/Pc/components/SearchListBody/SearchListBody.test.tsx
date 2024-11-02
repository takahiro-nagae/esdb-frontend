import { composeStories } from '@storybook/react';
import * as stories from './SearchListBody.stories';
import { render, screen, waitFor } from '@testing-library/react';

import userEvent from '@testing-library/user-event';
import { EnchantData } from '@/repositories/search/_types';
import { positionName } from '@/features/Search/common/functions/positionFunction';
import {
  Dummy1,
  Dummy1NotDispVal,
  Dummy2,
  Dummy2NotDispVal,
} from '../../data/SearchListMockData';
import { Rank } from '@/features/Search/common/components/Rank/Rank';
import { describe, expect, test, vi } from 'vitest';

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
    data: EnchantData,
    isDispVal: boolean,
  ) => {
    // エンチャント名
    expect(row.children[0]).toHaveTextContent(data.enchant_name);
    // 位置
    expect(row.children[1]).toHaveTextContent(positionName(data.position_id));
    // ランク
    expect(row.children[2]).toHaveTextContent(data.rank);
    clickRank(row.children[2] as HTMLElement);
    // 対象
    expect(row.children[3]).toHaveTextContent(data.target_name);
    if (isDispVal) {
      // 値
      expect(row.children[4]).toHaveTextContent(
        data.disp_val?.toString() || '',
      );
      // 効果
      expect(row.children[5]).toHaveTextContent(data.effect_name);
      // 入手先
      expect(row.children[6]).toHaveTextContent(data.route_name || '');
    } else {
      // 効果
      expect(row.children[4]).toHaveTextContent(data.effect_name);
      // 入手先
      expect(row.children[5]).toHaveTextContent(data.route_name || '');
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

    const rows = screen.getAllByRole('row');

    // 1列目の確認
    rowCheck(rows[0], Dummy1, true);
    // 2列目の確認
    rowCheck(rows[1], Dummy2, true);
  });

  test('エンチャント名の降順の表示確認', () => {
    render(<EnchantNameDesc />);

    const rows = screen.getAllByRole('row');

    // 1列目の確認
    rowCheck(rows[0], Dummy2, true);
    // 2列目の確認
    rowCheck(rows[1], Dummy1, true);
  });

  test('エンチャント名の昇順の表示確認(値なし)', () => {
    render(<NotValEnchantNameAsc />);

    const rows = screen.getAllByRole('row');

    // 1列目の確認
    rowCheck(rows[0], Dummy1NotDispVal, false);
    // 2列目の確認
    rowCheck(rows[1], Dummy2NotDispVal, false);
  });

  test('同じソート値の表示確認', () => {
    render(<SameSortValue />);

    const rows = screen.getAllByRole('row');

    // 1列目の確認
    rowCheck(rows[0], Dummy1, true);
    // 2列目の確認
    rowCheck(rows[1], Dummy2, true);
  });

  test('表示件数1の表示確認', () => {
    render(<DispRowPerPage1 />);

    const rows = screen.getAllByRole('row');

    // 表示件数は1件
    expect(rows.length).toBe(1);
    // 1列目の確認
    rowCheck(rows[0], Dummy1, true);
  });

  test('表示件数2の表示確認', () => {
    render(<DispRowPerPage2 />);

    const rows = screen.getAllByRole('row');

    // 表示件数は1件
    expect(rows.length).toBe(1);
    // 1列目の確認
    rowCheck(rows[0], Dummy2, true);
  });
});

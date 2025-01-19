import { composeStories } from '@storybook/react';
import { render, waitFor, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, test, vi } from 'vitest';

import * as stories from './Row.stories';

import {
  Dummy1,
  Dummy1NotDispVal,
} from '@/features/Search/Pc/data/SearchListMockData';
import { Rank } from '@/features/Search/common/components/Rank/Rank';
import { positionName } from '@/features/Search/common/functions/positionFunction';
import { EnchantData } from '@/repositories/search/_types';

vi.mock('../../../../../common/components/Rank/Rank');
describe('SearchList Row', () => {
  const { IsDispVal, IsNotDispVal } = composeStories(stories);

  const rowCheck = (
    row: HTMLElement,
    data: EnchantData,
    isDispVal: boolean,
  ) => {
    // エンチャント名
    expect(row.children[1]).toHaveTextContent(data.enchant_name);
    // 位置
    expect(row.children[2]).toHaveTextContent(positionName(data.position_id));
    // ランク
    expect(row.children[3]).toHaveTextContent(data.rank);
    clickRank(row.children[3] as HTMLElement);
    // 対象
    expect(row.children[4]).toHaveTextContent(data.target_name);
    if (isDispVal) {
      // 値
      expect(row.children[5]).toHaveTextContent(
        data.disp_val?.toString() || '',
      );
      // 効果
      expect(row.children[6]).toHaveTextContent(data.effect_name);
      // 入手先
      expect(row.children[7]).toHaveTextContent(data.route_name || '');
    } else {
      // 効果
      expect(row.children[5]).toHaveTextContent(data.effect_name);
      // 入手先
      expect(row.children[6]).toHaveTextContent(data.route_name || '');
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

  test('値がある場合の表示確認', () => {
    render(<IsDispVal />);

    const row = screen.getByTestId('enchantRow');

    // 値の確認
    rowCheck(row, Dummy1, true);
  });

  test('値がない場合の表示確認', () => {
    render(<IsNotDispVal />);

    const row = screen.getByTestId('enchantRow');

    // 値の確認
    rowCheck(row, Dummy1NotDispVal, false);
  });
});

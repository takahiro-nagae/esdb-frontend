import { composeStories } from '@storybook/react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, test, vi } from 'vitest';

import { Detail } from '../../../../../../common/components/Detail/Detail';
import * as stories from '../stories/DetailTable.stories';
import { OPEN_ROUTE_NAME } from '../stories/mockRouteName';

import { ENCHANT_DATA_MOCK } from '@/repositories/search/__mocks__/fetchSearchEnchantData';

vi.mock('../../../../../../common/components/Detail/Detail');
describe('DetailTable', () => {
  const { NotOpen, Open } = composeStories(stories);

  test('アコーディオンが閉じているときは何も表示しない', () => {
    render(<NotOpen />);

    expect(screen.queryByRole('table')).toBeNull();
  });

  test('詳細が表示されている時の内容確認', async () => {
    render(<Open />);

    // 対象の確認
    expect(
      screen.getByText('対象：' + ENCHANT_DATA_MOCK.target_name),
    ).toBeInTheDocument();

    const rows = screen.getAllByRole('row');

    // 効果の確認
    expect(rows[0].children[0]).toHaveTextContent('効果');
    expect(rows[0].children[1]).toHaveTextContent(
      ENCHANT_DATA_MOCK.effect_name.replaceAll('@', ''),
    );

    // 入手先の確認
    expect(rows[1].children[0]).toHaveTextContent('入手先');
    const omtCount = 3;
    const routeNames = OPEN_ROUTE_NAME.split('@');
    let dispRouteNames = '';
    routeNames.forEach((routeName, i) => {
      if (i < omtCount) {
        dispRouteNames += routeName;
      }
    });
    dispRouteNames += '»2件省略しました';

    expect(rows[1].children[1]).toHaveTextContent(
      dispRouteNames.replaceAll('<br>', '').replaceAll('　', ' '),
    );

    const button = screen.getByRole('button');
    userEvent.click(button);

    await waitFor(() => {
      // モーダルが開くこと
      expect(Detail).toHaveBeenCalledTimes(1);
    });
  });
});

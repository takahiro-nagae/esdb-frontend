import { composeStories } from '@storybook/react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, test, vi } from 'vitest';

import { Rank } from '../../Rank';
import * as stories from '../stories/RankModal.stories';

vi.mock('../../Rank');
describe('RankModal', () => {
  const { RankF } = composeStories(stories);

  test('表示文言とモーダル表示確認', async () => {
    render(<RankF />);

    const rankButton = screen.getByRole('button');

    // ランクが想定通り表示されていること
    expect(rankButton.textContent).toBe('F');

    // モーダルが開いていないこと
    expect(Rank).toHaveBeenCalledTimes(0);

    userEvent.click(rankButton);

    await waitFor(() => {
      // モーダルが開くこと
      expect(Rank).toHaveBeenCalledTimes(1);
    });
  });
});

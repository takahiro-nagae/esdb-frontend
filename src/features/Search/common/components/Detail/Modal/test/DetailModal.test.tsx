import { describe, expect, test, vi } from 'vitest';
import { composeStories } from '@storybook/react';
import * as stories from '../stories/DetailModal.stories';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Detail } from '../../Detail';

vi.mock('../../Detail');
describe('DetailModal', () => {
  const { NotOmt, MinustOmt, WithOmt } = composeStories(stories);

  test('省略件数が0件', () => {
    render(<NotOmt />);

    // 省略件数が0件の場合、省略件数の表示がないこと
    expect(screen.queryByText('»0件省略しました')).toBeNull();
  });

  test('省略件数が-1件', () => {
    render(<MinustOmt />);

    // 省略件数が-1件の場合、省略件数の表示がないこと
    expect(screen.queryByText('»-1件省略しました')).toBeNull();
  });

  test('省略件数がある場合', async () => {
    render(<WithOmt />);

    // モーダルが開いていないこと
    expect(Detail).toHaveBeenCalledTimes(0);

    // 省略件数ある場合、省略ありが表示されること
    expect(screen.queryByText('»2件省略しました')).toBeTruthy();

    const button = screen.getByRole('button');
    userEvent.click(button);

    await waitFor(() => {
      // モーダルが開くこと
      expect(Detail).toHaveBeenCalledTimes(1);
    });
  });
});

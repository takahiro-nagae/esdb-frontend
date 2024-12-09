import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { expect, test } from 'vitest';

import * as stories from '../stories/ModalContainer.stories';

test('コンテナの挙動確認', async () => {
  const { Default } = composeStories(stories);
  render(<Default />);
  // モーダルが表示されていないこと
  expect(screen.queryByRole('presentation')).toBeNull();

  // ボタンをクリック
  const openBtn = screen.getByRole('button');
  await userEvent.click(openBtn);

  // モーダルが表示されていること
  const modal = screen.getByRole('presentation');
  expect(modal).toBeInTheDocument();
});

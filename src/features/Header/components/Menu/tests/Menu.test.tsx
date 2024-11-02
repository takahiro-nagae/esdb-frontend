import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { AppMenuData } from '../MenuData';
import * as stories from '../stories/AppMenu.stories';
import { composeStories } from '@storybook/react';
import { expect, test } from 'vitest';

test('メニューのクリック確認', async () => {
  const { Default } = composeStories(stories);
  render(<Default />);

  const iconBtn = screen.getAllByRole('button')[0];
  await userEvent.click(iconBtn);

  const menuList = screen.getAllByRole('menuitem');

  for (let i = 0; i < menuList.length; i++) {
    expect(menuList[i].textContent).toBe(AppMenuData[i].text);
  }
});

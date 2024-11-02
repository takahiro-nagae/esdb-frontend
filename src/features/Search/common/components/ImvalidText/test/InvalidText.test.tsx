import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import * as stories from '../stories/InvalidText.stories';

describe('InvalidText', () => {
  const expectMessage = '貼付不可';

  it('貼付可能', () => {
    const { NotInvalid } = composeStories(stories);
    render(<NotInvalid />);

    // 貼付不可メッセージが表示されないこと
    expect(screen.queryByText(expectMessage)).toBeNull();
  });

  it('貼付不可', () => {
    const { Invalid } = composeStories(stories);
    render(<Invalid />);

    // 貼付不可メッセージが表示されること
    expect(screen.getByText(expectMessage)).toBeTruthy;
  });
});

import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import * as stories from '../stories/ImpText.stories';

describe('ImpText', () => {
  const expectMessage = '未実装';

  it('エンチャントが実装されていない', () => {
    const { NotImped } = composeStories(stories);
    render(<NotImped />);

    // 未実装のメッセージが表示されていること
    expect(screen.getByText(expectMessage)).toBeTruthy();
  });

  it('エンチャントが実装されている', () => {
    const { Imped } = composeStories(stories);
    render(<Imped />);

    // 未実装のメッセージが表示されていないこと
    expect(screen.queryByText(expectMessage)).toBeNull();
  });
});

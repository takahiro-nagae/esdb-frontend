import { render, screen } from '@testing-library/react';

import * as stories from '../stories/ImpText.stories';
import { composeStories } from '@storybook/react';

describe('ImpText', () => {
  const expectMessage = '未実装';

  test('エンチャントが実装されていない', () => {
    const { NotImped } = composeStories(stories);
    render(<NotImped />);

    // 未実装のメッセージが表示されていること
    expect(screen.getByText(expectMessage)).toBeTruthy();
  });

  test('エンチャントが実装されている', () => {
    const { Imped } = composeStories(stories);
    render(<Imped />);

    // 未実装のメッセージが表示されていないこと
    expect(screen.queryByText(expectMessage)).toBeNull();
  });
});

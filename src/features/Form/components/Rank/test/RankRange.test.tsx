import { composeStories } from '@storybook/react';
import * as stories from '../stories/RankRange.stories';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

describe('RankRange Component', () => {
  const { Default } = composeStories(stories);

  it('コンポーネントの確認', async () => {
    render(<Default />);

    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(3);

    const [button1, button2, button3] = buttons;
    expect(button1).toHaveTextContent('一致');
    expect(button2).toHaveTextContent('以上');
    expect(button3).toHaveTextContent('以下');
  });
});

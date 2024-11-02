import { composeStories } from '@storybook/react';
import * as stories from './Position.stories';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

describe('EffectDropDown Component', () => {
  const { Default } = composeStories(stories);

  it('コンポーネントの確認', () => {
    render(<Default />);

    expect(screen.getByText('位置')).toBeInTheDocument();
    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(3);

    const [button1, button2, button3] = buttons;
    expect(button1).toHaveTextContent('指定なし');
    expect(button2).toHaveTextContent('接頭');
    expect(button3).toHaveTextContent('接尾');
  });
});

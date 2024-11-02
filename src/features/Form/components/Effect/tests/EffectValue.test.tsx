import { composeStories } from '@storybook/react';
import * as stories from '../stories/EffectValue.stories';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';

describe('EffectValue Component', () => {
  const { Default } = composeStories(stories);

  it('コンポーネントの確認', () => {
    render(<Default />);

    expect(screen.getByLabelText('値')).toBeInTheDocument();
    expect(screen.getByText('効果の値')).toBeInTheDocument();
  });

  it('入力は数値のみ可能であるか確認', async () => {
    render(<Default />);

    const input: HTMLInputElement = screen.getByLabelText('値');
    await userEvent.type(input, '1１@＃Qdあイｳ江🌍');
    expect(input.value).toBe('1');
  });
});

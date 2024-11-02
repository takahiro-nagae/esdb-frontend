import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';

import * as stories from './EnchantName.stories';

describe('EnchantName Component', () => {
  const { Default } = composeStories(stories);

  it('コンポーネントの確認', () => {
    render(<Default />);
    expect(screen.getByLabelText('エンチャント名')).toBeInTheDocument();
    expect(
      screen.getByText('エンチャント名を入力してください'),
    ).toBeInTheDocument();
  });

  it('なんでも入力できるか確認', async () => {
    render(<Default />);

    const input: HTMLInputElement = screen.getByLabelText('エンチャント名');
    await userEvent.type(input, '1１@＃Qdあイｳ江🌍');
    expect(input.value).toBe('1１@＃Qdあイｳ江🌍');
  });
});

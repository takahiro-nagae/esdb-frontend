import { render, screen } from '@testing-library/react';
import * as stories from './EncantName.stories';
import { composeStories } from '@storybook/react';
import userEvent from '@testing-library/user-event';

describe('EnchantName Component', () => {
  const { Default } = composeStories(stories);

  it('コンポーネントの確認', () => {
    render(<Default />);
    expect(screen.getByLabelText('エンチャント名')).toBeInTheDocument();
    expect(
      screen.getByText('エンチャント名を入力してください'),
    ).toBeInTheDocument();
  });

  test('なんでも入力できるか確認', async () => {
    render(<Default />);

    const input: HTMLInputElement = screen.getByLabelText('エンチャント名');
    await userEvent.type(input, '1１@＃Qdあイｳ江🌍');
    expect(input.value).toBe('1１@＃Qdあイｳ江🌍');
  });
});

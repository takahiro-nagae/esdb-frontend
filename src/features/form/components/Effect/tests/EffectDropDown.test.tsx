import { composeStories } from '@storybook/react';
import * as stories from '../stories/EffectDropDown.stories';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('EffectDropDown Component', () => {
  const { Default } = composeStories(stories);

  it('コンポーネントの確認', () => {
    render(<Default />);

    expect(screen.getByLabelText('効果')).toBeInTheDocument();
    expect(screen.getByText('効果を指定してください')).toBeInTheDocument();
  });

  it('効果が取得できた場合', async () => {
    render(<Default />);

    await userEvent.click(screen.getByRole('button'));

    const listbox = screen.getByRole('listbox');
    const options = within(listbox).getAllByRole('option');
    expect(options).toHaveLength(2);
    const [option1, option2] = options;
    expect(option1).toHaveTextContent('指定なし');
    expect(option2).toHaveTextContent('test');
  });

  it('効果が取得できない場合', async () => {
    const { None } = composeStories(stories);

    render(<None />);

    await userEvent.click(screen.getByRole('button'));

    const listbox = screen.getByRole('listbox');
    const options = within(listbox).getAllByRole('option');
    expect(options).toHaveLength(1);
    const [option1] = options;
    expect(option1).toHaveTextContent('指定無し');
  });
});

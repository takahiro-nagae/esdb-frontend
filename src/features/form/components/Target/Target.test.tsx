import { composeStories } from '@storybook/react';
import * as stories from './Target.stories';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('RankDropDown Component', () => {
  const { Default } = composeStories(stories);

  it('コンポーネントの確認', async () => {
    render(<Default />);

    await userEvent.click(screen.getByRole('button'));

    const listbox = screen.getByRole('listbox');
    const options = within(listbox).getAllByRole('option');
    expect(options).toHaveLength(2);
    const [option1, option2] = options;
    expect(option1).toHaveTextContent('指定なし');
    expect(option2).toHaveTextContent('test');
  });

  it('ランクが取得できない場合', async () => {
    const { None } = composeStories(stories);

    render(<None />);

    await userEvent.click(screen.getByRole('button'));

    const listbox = screen.getByRole('listbox');
    const options = within(listbox).getAllByRole('option');
    expect(options).toHaveLength(1);
    const [option1] = options;
    expect(option1).toHaveTextContent('指定なし');
  });
});

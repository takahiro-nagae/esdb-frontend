import { composeStories } from '@storybook/react';
import * as stories from '../stories/EffectRange.stories';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('EffectValue Component', () => {
  const { Default } = composeStories(stories);

  it('コンポーネントの確認', () => {
    render(<Default />);

    expect(screen.getByText('以上 or 以下')).toBeInTheDocument();
  });

  it('値の確認', async () => {
    render(<Default />);

    await userEvent.click(screen.getByRole('button'));

    const listbox = screen.getByRole('listbox');
    const options = within(listbox).getAllByRole('option');
    expect(options).toHaveLength(3);
    const [option1, option2, option3] = options;
    expect(option1).toHaveTextContent('指定なし');
    expect(option2).toHaveTextContent('以上');
    expect(option3).toHaveTextContent('以下');
  });
});

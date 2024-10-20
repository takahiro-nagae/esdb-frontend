import { render, screen } from '@testing-library/react';
import * as stories from '../stories/SearchFilter.stories';
import { composeStories } from '@storybook/react';
import * as useSearchFilter from '../hooks/useSearchFilter';
import userEvent from '@testing-library/user-event';

const { Init } = composeStories(stories);

describe('SearchFilter', () => {
  const hooks = jest
    .spyOn(useSearchFilter, 'useSearchFilter')
    .mockImplementationOnce(jest.fn());
  const user = userEvent.setup({ delay: null });

  beforeEach(() => {
    jest.useFakeTimers();
    hooks.mockClear();
  });
  afterEach(() => {
    jest.useRealTimers();
    hooks.mockClear();
  });

  test('init', () => {
    render(<Init />);
    // placeholderの確認
    expect(screen.getByPlaceholderText('絞り込む')).toBeTruthy();
    // 初期値は空白
    expect(getFilter()).toHaveValue('');
    // フォーカスは当たっていない
    expect(getFilter()).not.toHaveFocus();
  });

  test('input', async () => {
    render(<Init />);
    // 初回のhocksの呼び出し
    expect(hooks).toHaveBeenCalledTimes(1);

    // 値を入力
    const filter = getFilter();
    await user.type(filter, 'test');
    expect(filter).toHaveValue('test');

    // 値変更時のhocksの呼び出し(初期表示1回 + 文字数分呼び出される)
    expect(hooks).toHaveBeenCalledTimes(5);
  });
});

const getFilter = () => screen.getByTestId('searchFilter') as HTMLInputElement;

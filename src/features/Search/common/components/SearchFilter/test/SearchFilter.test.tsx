import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, test } from 'vitest';

import * as stories from '../stories/SearchFilter.stories';

const { Init } = composeStories(stories);

describe('SearchFilter', () => {
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

    // 値を入力
    const filter = getFilter();
    await userEvent.type(filter, 'test');
    expect(filter).toHaveValue('test');
  });
});

const getFilter = () => screen.getByTestId('searchFilter') as HTMLInputElement;

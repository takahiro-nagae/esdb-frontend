import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import * as stories from '../stories/SearchListContainer.stories';

describe('SearchListContainer', () => {
  it('表示内容の確認', () => {
    const { Default } = composeStories(stories);

    render(<Default />);

    // 絞り込みフィルターが表示されていること
    expect(screen.getByTestId('searchFilter')).toBeInTheDocument();

    // テーブルが表示されていること
    expect(screen.getByRole('table')).toBeInTheDocument();

    // ヘッダー + データが2件表示されていること
    const rows = screen.getAllByRole('row');
    expect(rows.length).toBe(3);

    // ページネーションが表示されていること
    expect(screen.getByTestId('pagination')).toBeInTheDocument();
  });
});

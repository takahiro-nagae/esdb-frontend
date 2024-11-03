import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';

import { SearchFormContainer } from '@/features/Form/SearchFormContainer';

describe('Form Integration Tests', () => {
  it('フォームが表示される', async () => {
    render(
      <BrowserRouter>
        <SearchFormContainer />
      </BrowserRouter>,
    );
    // 検索条件というh3タグが表示される
    expect(screen.getByText('検索条件')).toBeInTheDocument();

    // 各要素の挙動は単体テストで確認しているため省略

    // 検索ボタンをクリックすると検索結果が表示される
    await userEvent.click(screen.getByRole('button', { name: '検索' }));
    expect(window.location.pathname).toBe('/detail');
    expect(window.location.search).toBe(
      '?enchantName=&effect=&effectVal=&range=0&position=0&rank=&rankRange=1&target=',
    );
  });
});

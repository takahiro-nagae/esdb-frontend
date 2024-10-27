import { FreeSearch } from '@/features/Header/components/SearchBar/FreeSearch';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';

describe('FreeSearch Integration Tests', () => {
  it('ヘッダーの自由検索の挙動確認', async () => {
    render(
      <BrowserRouter>
        <FreeSearch />
      </BrowserRouter>,
    );

    // 入力欄に文字を入力する
    const input = screen.getByRole('textbox');
    await userEvent.type(input, 'test');

    // 検索ボタンをクリックすると検索結果が表示される
    await userEvent.click(screen.getByRole('button'));
    expect(window.location.pathname).toBe('/search');
    expect(window.location.search).toBe('?search=test');
  });
});

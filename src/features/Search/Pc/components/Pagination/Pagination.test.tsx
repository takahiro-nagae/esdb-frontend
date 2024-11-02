import { render, screen, waitFor } from '@testing-library/react';
import * as stories from './Pagination.stories';
import { composeStories } from '@storybook/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';

describe('Pagination', () => {
  const { Default, Page1, PerPage60Page1 } = composeStories(stories);

  it('Defaultの表示内容確認', async () => {
    render(<Default />);

    // 件数の表示が正しいこと
    expect(screen.getByText('1–30 of 100')).toBeInTheDocument();

    const perPageCombobox = screen.getByRole('combobox');
    // ページに表示する件数の確認
    expect(perPageCombobox).toHaveTextContent('30');
    userEvent.click(perPageCombobox);

    await waitFor(() => {
      const comboList = screen.getByRole('listbox');
      // コンボボックスのリストが正しいこと
      expect(comboList.children[0]).toHaveTextContent('30');
      expect(comboList.children[1]).toHaveTextContent('60');
      expect(comboList.children[2]).toHaveTextContent('100');
    });
  });

  it('ページ送りした場合の表示内容確認', async () => {
    render(<Page1 />);

    // 件数の表示が正しいこと
    expect(screen.getByText('31–60 of 100')).toBeInTheDocument();

    const perPageCombobox = screen.getByRole('combobox');
    // ページに表示する件数の確認
    expect(perPageCombobox).toHaveTextContent('30');
    userEvent.click(perPageCombobox);

    await waitFor(() => {
      const comboList = screen.getByRole('listbox');
      // コンボボックスのリストが正しいこと
      expect(comboList.children[0]).toHaveTextContent('30');
      expect(comboList.children[1]).toHaveTextContent('60');
      expect(comboList.children[2]).toHaveTextContent('100');
    });
  });

  it('ページに表示する件数を60にした場合の表示内容確認', async () => {
    render(<PerPage60Page1 />);

    // 件数の表示が正しいこと
    expect(screen.getByText('61–100 of 100')).toBeInTheDocument();

    const perPageCombobox = screen.getByRole('combobox');
    // ページに表示する件数の確認
    expect(perPageCombobox).toHaveTextContent('60');
    userEvent.click(perPageCombobox);

    await waitFor(() => {
      const comboList = screen.getByRole('listbox');
      // コンボボックスのリストが正しいこと
      expect(comboList.children[0]).toHaveTextContent('30');
      expect(comboList.children[1]).toHaveTextContent('60');
      expect(comboList.children[2]).toHaveTextContent('100');
    });
  });
});

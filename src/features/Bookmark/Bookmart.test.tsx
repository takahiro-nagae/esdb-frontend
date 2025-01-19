import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Dummy1, Dummy2 } from '../Search/Pc/data/SearchListMockData';
import { positionName } from '../Search/common/functions/positionFunction';

import * as stories from './Bookmark.stories';

import { EnchantData } from '@/repositories/search/_types';

const { Default, Empty } = composeStories(stories);

describe('Bookmark Component', () => {
  const rowCheck = (row: HTMLElement, data: EnchantData) => {
    // エンチャント名
    expect(row.children[1]).toHaveTextContent(data.enchant_name);
    // 位置
    expect(row.children[2]).toHaveTextContent(positionName(data.position_id));
    // ランク
    expect(row.children[3]).toHaveTextContent(data.rank);
    // 対象
    expect(row.children[4]).toHaveTextContent(data.target_name);

    // 効果
    expect(row.children[5]).toHaveTextContent(data.effect_name);
    // 入手先
    expect(row.children[6]).toHaveTextContent(data.route_name || '');
  };

  it('renders the Bookmark component', () => {
    render(<Default />);
    // 絞り込みフィルターが表示されていること
    expect(screen.getByTestId('searchFilter')).toBeInTheDocument();
    // テーブルが表示されていること
    expect(screen.getByRole('table')).toBeInTheDocument();
    // データが2件表示されていること
    const rows = screen.getAllByTestId('enchantRow');
    expect(rows.length).toBe(2);
    // ページネーションが表示されていること
    expect(screen.getByTestId('pagination')).toBeInTheDocument();

    // 意図した件数が表示されていること
    expect(screen.getByText('2')).toBeInTheDocument();
    expect(screen.getByText('件ブックマークしています')).toBeInTheDocument();

    // データが正しく表示されていること
    rowCheck(rows[0], Dummy1);
    rowCheck(rows[1], Dummy2);
  });

  it('displays the correct number of enchants', () => {
    render(<Empty />);
    expect(screen.getByText('ブックマークは0件です')).toBeInTheDocument();
  });
});

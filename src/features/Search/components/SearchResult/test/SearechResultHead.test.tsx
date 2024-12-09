import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import * as stories from '../stories/SearchResultHead.stories';

describe('SearchResultHead', () => {
  const {
    ResultNone,
    ResultEqualsDisplay,
    ResultNotEqualsDisplay,
    DisplayEffect,
  } = composeStories(stories);

  it('取得した結果が0件の場合', () => {
    render(<ResultNone />);

    // 0件の表示がされていること
    expect(screen.getByText('検索結果は0件です')).toBeInTheDocument();
  });

  it('取得した結果が表示件数と同じ場合', () => {
    render(<ResultEqualsDisplay />);

    // 意図した件数が表示されていること
    expect(screen.getByText('5')).toBeInTheDocument();
    expect(screen.getByText('件ヒットしました')).toBeInTheDocument();

    // 値が表示されていないこと
    expect(screen.queryByText('値：最大ダメージ')).toBeNull();
  });

  it('取得した結果が表示件数と異なる場合', () => {
    render(<ResultNotEqualsDisplay />);

    // 意図した件数が表示されていること
    expect(screen.getByText('3')).toBeInTheDocument();
    expect(screen.getByText('件ヒットしました')).toBeInTheDocument();

    // 値が表示されていないこと
    expect(screen.queryByText('値：最大ダメージ')).toBeNull();
  });

  it('値が表示される場合', () => {
    render(<DisplayEffect />);

    // 意図した件数が表示されていること
    expect(screen.getByText('5')).toBeInTheDocument();
    expect(screen.getByText('件ヒットしました')).toBeInTheDocument();

    // 値が表示されていること
    expect(screen.getByText('値：最大ダメージ')).toBeInTheDocument();
  });
});

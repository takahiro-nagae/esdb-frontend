import { composeStories } from '@storybook/react';
import * as stories from '../stories/SearchResultHead.stories';
import { render,screen } from '@testing-library/react';

describe('SearchResultHead', () => {
    const { ResulutNone, ResulutEqualsDisplay, ResulutNotEqualsDisplay, DisplayEffect } = composeStories(stories);

    test('取得した結果が0件の場合', () => {
        render(<ResulutNone />);

        // 0件の表示がされていること
        expect(screen.getByText('検索結果は0件です')).toBeInTheDocument();
    });

    test('取得した結果が表示件数と同じ場合', () => {
        render(<ResulutEqualsDisplay />);

        // 意図した件数が表示されていること
        expect(screen.getByText('5')).toBeInTheDocument();
        expect(screen.getByText('件ヒットしました')).toBeInTheDocument();

        // 値が表示されていないこと
        expect(screen.queryByText('値：最大ダメージ')).toBeNull();
    });

    test('取得した結果が表示件数と異なる場合', () => {
        render(<ResulutNotEqualsDisplay />);

        // 意図した件数が表示されていること
        expect(screen.getByText('3')).toBeInTheDocument();
        expect(screen.getByText('件ヒットしました')).toBeInTheDocument();

        // 値が表示されていないこと
        expect(screen.queryByText('値：最大ダメージ')).toBeNull();
    });

    test('値が表示される場合', () => {
        render(<DisplayEffect />);

        // 意図した件数が表示されていること
        expect(screen.getByText('5')).toBeInTheDocument();
        expect(screen.getByText('件ヒットしました')).toBeInTheDocument();

        // 値が表示されていること
        expect(screen.getByText('値：最大ダメージ')).toBeInTheDocument();
    });

});
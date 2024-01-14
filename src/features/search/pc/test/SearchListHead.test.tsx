import { composeStories } from "@storybook/react";
import * as searchListHeadFunction from "../function/searchListHeadFunction";
import * as stories from "../stories/SearchListHead.stories";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe('SearchListHead', () => {
    const func = jest.spyOn(searchListHeadFunction, 'createSortHandler').mockImplementationOnce(jest.fn());

    const { Default, EnchantNameAsc, EnchantNameDesc, DescVal } = composeStories(stories);

    afterEach(() => {
        jest.useRealTimers();
        func.mockClear();
    });

    test('値なしの初期表示', async () => {
        render(<Default />);

        const buttons = screen.getAllByRole('button');
        const labels = screen.getAllByRole('label');

        // ボタンのテキスト確認
        expect(buttons[0]).toHaveTextContent('エンチャント名');
        expect(buttons[1]).toHaveTextContent('位置');
        expect(buttons[2]).toHaveTextContent('ランク');
        expect(buttons[3]).toHaveTextContent('対象');

        // テキストの確認
        expect(labels[0]).toHaveTextContent('効果');
        expect(labels[1]).toHaveTextContent('入手先');

        // ソートハンドラーの呼び出し確認
        expect(func).toHaveBeenCalledTimes(0);
        userEvent.click(buttons[0]);
        await waitFor(() => {
            expect(func).toHaveBeenCalledTimes(1);
        });
    });

    test('エンチャント名昇順', async () => {
        render(<EnchantNameAsc />);

        const buttons = screen.getAllByRole('button');
        const labels = screen.getAllByRole('label');

        // ボタンのテキスト確認
        expect(buttons[0]).toHaveTextContent('エンチャント名');
        expect(buttons[1]).toHaveTextContent('位置');
        expect(buttons[2]).toHaveTextContent('ランク');
        expect(buttons[3]).toHaveTextContent('対象');

        // エンチャント名の昇順にソートされていることの確認
        expect(screen.getByText('エンチャント名').children[0]).toHaveTextContent('sorted ascending');
        expect(screen.getByText('位置').children[0]).not.toHaveTextContent('sorted ascending');

        // テキストの確認
        expect(labels[0]).toHaveTextContent('効果');
        expect(labels[1]).toHaveTextContent('入手先');

        // ソートハンドラーの呼び出し確認
        expect(func).toHaveBeenCalledTimes(0);
        userEvent.click(buttons[0]);
        await waitFor(() => {
            expect(func).toHaveBeenCalledTimes(1);
        });
    });

    test('エンチャント名降順', async () => {
        render(<EnchantNameDesc />);

        const buttons = screen.getAllByRole('button');
        const labels = screen.getAllByRole('label');

        // ボタンのテキスト確認
        expect(buttons[0]).toHaveTextContent('エンチャント名');
        expect(buttons[1]).toHaveTextContent('位置');
        expect(buttons[2]).toHaveTextContent('ランク');
        expect(buttons[3]).toHaveTextContent('対象');

        // エンチャント名の降順にソートされていることの確認
        expect(screen.getByText('エンチャント名').children[0]).toHaveTextContent('sorted descending');
        expect(screen.getByText('位置').children[0]).not.toHaveTextContent('sorted descending');

        // テキストの確認
        expect(labels[0]).toHaveTextContent('効果');
        expect(labels[1]).toHaveTextContent('入手先');

        // ソートハンドラーの呼び出し確認
        expect(func).toHaveBeenCalledTimes(0);
        userEvent.click(buttons[0]);
        await waitFor(() => {
            expect(func).toHaveBeenCalledTimes(1);
        });
    });

    test('効果が表示された時の表示確認', async () => {
        render(<DescVal />);

        const buttons = screen.getAllByRole('button');
        const labels = screen.getAllByRole('label');

        // ボタンのテキスト確認
        expect(buttons[0]).toHaveTextContent('エンチャント名');
        expect(buttons[1]).toHaveTextContent('位置');
        expect(buttons[2]).toHaveTextContent('ランク');
        expect(buttons[3]).toHaveTextContent('対象');
        expect(buttons[4]).toHaveTextContent('値');

        // テキストの確認
        expect(labels[0]).toHaveTextContent('効果');
        expect(labels[1]).toHaveTextContent('入手先');

        // 値の昇順にソートされていることの確認
        expect(screen.getByText('値').children[0]).toHaveTextContent('sorted ascending');
        expect(screen.getByText('エンチャント名').children[0]).not.toHaveTextContent('sorted ascending');

        // ソートハンドラーの呼び出し確認
        expect(func).toHaveBeenCalledTimes(0);
        userEvent.click(buttons[4]);
        await waitFor(() => {
            expect(func).toHaveBeenCalledTimes(1);
        });
    });
});
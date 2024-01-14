import * as stories from '../stories/Loading.stories';
import { composeStories } from "@storybook/react";
import { render, screen } from "@testing-library/react";

describe('Loading', () => {
    const testId = 'loading';

    test('ローディング完了時の確認', () => {
        const { LoadingComplete } = composeStories(stories);
        render(<LoadingComplete />);

        // ローディング完了時は何も表示されない
        expect(screen.queryByTestId(testId)).toBeNull();
    });

    test('ローディング中', () => {
        const { LoadingNow } = composeStories(stories);
        render(<LoadingNow />);

        // ローディング中はローディングが表示される
        expect(screen.getByTestId(testId)).toBeTruthy();
    });
});

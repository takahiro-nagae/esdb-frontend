import { composeStories } from "@storybook/react";
import * as stories from "../stories/ScrollTopButton.stories";
import { render,screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { animateScroll } from "react-scroll/modules";

jest.mock('react-scroll/modules');
describe('ScrollTopButton', () => {

    const { Default } = composeStories(stories);
    test('スクロールがトップに戻る', async () => {
        render(<Default />);

        // アイコンが意図したものであること
        expect(screen.getByTestId('KeyboardDoubleArrowUpIcon')).toBeInTheDocument();

        // animateScrollが呼ばれていないこと
        expect(animateScroll.scrollToTop).toHaveBeenCalledTimes(0);
        // ボタンをクリック
        const button = screen.getByRole('button');
        userEvent.click(button);

        // スクロールがトップに戻ること
        await waitFor(() => {
            expect(animateScroll.scrollToTop).toHaveBeenCalledTimes(1);
        });

    });
});
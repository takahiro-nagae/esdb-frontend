import { composeStories } from "@storybook/react";
import * as stories from '../stories/SpSearchContainer.stories';
import { render, screen } from "@testing-library/react";

describe('SpSearchContainer', () => {
    const { Default } = composeStories(stories);
    test('表示内容の確認', () => {
        render(<Default />);

        // 5件のカードが表示されていることを確認
        expect(screen.getAllByTestId('enchantName').length).toBe(5);

        // トップに戻るボタンが表示されていることを確認
        expect(screen.getByTestId('KeyboardDoubleArrowUpIcon')).toBeInTheDocument();
    });
});
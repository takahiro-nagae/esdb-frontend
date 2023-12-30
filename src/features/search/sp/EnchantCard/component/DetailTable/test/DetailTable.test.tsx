import { composeStories } from "@storybook/react";
import * as stories from '../stories/DetailTable.stories';
import { render, screen, waitFor } from "@testing-library/react";
import { BeginnerData } from "../../../../data/EnchantCardMockData";
import userEvent from "@testing-library/user-event";
import { Detail } from "../../../../../common/component/Detail/Detail";

jest.mock('../../../../../common/component/Detail/Detail');
describe('DetailTable', () => {
    const { NotOpen, Open } = composeStories(stories);

    test('アコーディオンが閉じているときは何も表示しない', () => {
        render(<NotOpen />);

        expect(screen.queryByRole('table')).toBeNull();
    });

    test('詳細が表示されている時の内容確認', async () => {
        render(<Open />);

        // 対象の確認
        expect(screen.getByText('対象：' + BeginnerData.target_name)).toBeInTheDocument();

        const rows = screen.getAllByRole('row');

        // 効果の確認
        expect(rows[0].children[0]).toHaveTextContent('効果');
        expect(rows[0].children[1]).toHaveTextContent(BeginnerData.effect_name.replaceAll('@', ''));

        // 入手先の確認
        expect(rows[1].children[0]).toHaveTextContent('入手先');
        const omtCount = 3;
        const routeNames = BeginnerData.route_name.split('@');
        let dispRouteNames = '';
        routeNames.forEach((routeName, i) => {
            if (i < omtCount) {
                dispRouteNames += routeName;
            }
        });
        dispRouteNames += '»2件省略しました';

        expect(rows[1].children[1]).toHaveTextContent(dispRouteNames.replaceAll('<br>', '').replaceAll('　', ' '));

        const button = screen.getByRole('button');
        userEvent.click(button);

        await waitFor(() => {
            // モーダルが開くこと
            expect(Detail).toHaveBeenCalledTimes(1);
        });
    });
});
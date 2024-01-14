import { Meta, StoryObj } from "@storybook/react";
import { SearchListRow } from "../SearchListRow";
import { Dummy1, Dummy1NotDispVal } from "../data/SearchListMockData";

export default {
    title: 'search/pc/SearchListRow',
    component: SearchListRow,
    decorators: [
        (Story) => {
            return (
                <table>
                    <Story />
                </table>
            );
        }
    ],
} as Meta<typeof SearchListRow>;

export const IsDispVal: StoryObj<typeof SearchListRow> = {
    args: {
        enchant: Dummy1
    }
};

export const IsNotDispVal: StoryObj<typeof SearchListRow> = {
    args: {
        enchant: Dummy1NotDispVal
    }
};
import { Meta, StoryObj } from "@storybook/react";
import { Rank } from "../Rank";


export default {
    title: 'search/common/component/Rank',
    component: Rank,
} as Meta<typeof Rank>;

export const Rank3: StoryObj<typeof Rank> = {
    args: {
        rank: '3',
    }
};
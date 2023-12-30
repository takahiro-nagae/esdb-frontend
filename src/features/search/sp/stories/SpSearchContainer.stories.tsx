import { Meta, StoryObj } from "@storybook/react";
import { SpSearchContainer } from "../SpSearchContainer";
import { BeginnerData } from "../data/EnchantCardMockData";

export default {
    title: 'search/sp/SpSearchContainer',
    component: SpSearchContainer,
} as Meta<typeof SpSearchContainer>;

export const Default: StoryObj<typeof SpSearchContainer> = {
    args: {
        rowData: [
            BeginnerData,
            BeginnerData,
            BeginnerData,
            BeginnerData,
            BeginnerData,
        ]
    }
};
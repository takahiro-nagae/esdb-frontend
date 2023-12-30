import { Meta, StoryObj } from "@storybook/react";
import { EnchantCard } from "../EnchantCard";
import { BeginnerData, ScarecrowDataAll } from "../../data/EnchantCardMockData";

export default {
    title: 'search/sp/EnchantCard',
    component: EnchantCard,
} as Meta<typeof EnchantCard>;

export const Normal: StoryObj<typeof EnchantCard> = {
    args: {
        enchant: BeginnerData,
    }
};

export const AllView: StoryObj<typeof EnchantCard> = {
    args: {
        enchant: ScarecrowDataAll,
    }
};
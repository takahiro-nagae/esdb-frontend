import { Meta } from "@storybook/react";
import { DetailTable } from "../DetailTable";
import { BeginnerData } from "../../../../data/EnchantCardMockData";

export default {
    title: 'search/sp/component/DetailTable',
    component: DetailTable,
} as Meta<typeof DetailTable>;

export const NotOpen = {
    args: {
        enchant: BeginnerData,
        isOpen: false,
    }
};

export const Open = {
    args: {
        enchant: BeginnerData,
        isOpen: true,
    }
};
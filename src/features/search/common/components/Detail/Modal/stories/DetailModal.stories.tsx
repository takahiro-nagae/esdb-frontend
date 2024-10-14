import { Meta, StoryObj } from "@storybook/react";
import { DetailModal } from "../DetailModal";
import { BeginnerData, FlamingoData } from "../../mock/DetailMockData";

export default {
    title: 'search/common/component/Detail/Modal/DetailModal',
    component: DetailModal,
} as Meta<typeof DetailModal>;

export const NotOmt: StoryObj<typeof DetailModal> = {
    args: {
        enchant: FlamingoData,
        count: 0
    }
};

export const MinustOmt: StoryObj<typeof DetailModal> = {
    args: {
        enchant: FlamingoData,
        count: -1
    }
};

export const WithOmt: StoryObj<typeof DetailModal> = {
    args: {
        enchant: BeginnerData,
        count: 2
    }
};
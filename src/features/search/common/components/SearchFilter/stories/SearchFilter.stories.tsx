import { Meta, StoryObj } from "@storybook/react";
import { SearchFilter } from "../SearchFilter";

export default {
    title: 'search/common/component/SearchFilter',
    component: SearchFilter,
} as Meta<typeof SearchFilter>;

export const Init: StoryObj<typeof SearchFilter> = {
    args: {
        xs: 12,
    }
};
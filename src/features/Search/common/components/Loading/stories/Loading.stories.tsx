import { Meta, StoryObj } from "@storybook/react";

import { Loading } from "../Loading";

export default {
    title: 'search/common/component/Loading',
    component: Loading,
} as Meta<typeof Loading>;

export const LoadingNow: StoryObj<typeof Loading> = {
    args: {
        isLoading: false
    }
};

export const LoadingComplete: StoryObj<typeof Loading> = {
    args: {
        isLoading: true
    }
};
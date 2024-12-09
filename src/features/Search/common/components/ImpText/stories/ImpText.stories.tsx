import { Meta, StoryObj } from "@storybook/react";

import { ImpText } from "../ImpText";

export default {
    title: 'search/common/component/ImpText',
    component: ImpText,
} as Meta<typeof ImpText>;

export const NotImped: StoryObj<typeof ImpText> = {
    args: {
        impFlg: '0',
    }
};

export const Imped: StoryObj<typeof ImpText> = {
    args: {
        impFlg: '1',
    }
};
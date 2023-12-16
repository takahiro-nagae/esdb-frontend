import { Meta, StoryObj } from "@storybook/react";
import { InvalidText } from "../InvalidText";

export default {
    title: 'search/common/component/InvalidText',
    component: InvalidText,
} as Meta<typeof InvalidText>;

export const NotInvalid: StoryObj<typeof InvalidText> = {
    args: {
        invalidTargetFlg: '0',
    }
};

export const Invalid: StoryObj<typeof InvalidText> = {
    args: {
        invalidTargetFlg: '1',
    }
};
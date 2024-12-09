import { Meta } from "@storybook/react";

import { AccordionButton } from "../AccordionButton";

export default {
    title: 'search/sp/component/AccordionButton',
    component: AccordionButton,
} as Meta<typeof AccordionButton>;

export const NotOpen = {
    args: {
        open: false,
    }
};

export const Open = {
    args: {
        open: true,
    }
};
import { Meta, StoryObj } from "@storybook/react";

import { SearchResultHead } from "../SearechResultHead";

export default {
    title: 'search/component/SearchResult/SearchResultHead',
    component: SearchResultHead,
} as Meta<typeof SearchResultHead>;

export const ResulutNone: StoryObj<typeof SearchResultHead> = {
    args: {
        dispCount: 0,
        count: 0,
        effectName: ''
    }
};

export const ResulutEqualsDisplay: StoryObj<typeof SearchResultHead> = {
    args: {
        dispCount: 5,
        count: 5,
        effectName: ''
    }
};

export const ResulutNotEqualsDisplay: StoryObj<typeof SearchResultHead> = {
    args: {
        dispCount: 5,
        count: 3,
        effectName: ''
    }
};

export const DisplayEffect: StoryObj<typeof SearchResultHead> = {
    args: {
        dispCount: 5,
        count: 5,
        effectName: '最大ダメージ'
    }
};
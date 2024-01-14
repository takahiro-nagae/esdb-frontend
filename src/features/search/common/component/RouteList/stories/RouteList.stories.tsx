import { Meta, StoryObj } from "@storybook/react";
import { RouteList } from "../RouteList";
import { omtCount, routeNameFor3, routeNameFor4 } from "./RouteListStoryData";

export default {
    title: 'search/common/component/RouteList',
    component: RouteList,
} as Meta<typeof RouteList>;

export const NoItems: StoryObj<typeof RouteList> = {
    args: {
        routeNames: [],
        omtCount: 0,
    }
};

export const NotOmtItems: StoryObj<typeof RouteList> = {
    args: {
        routeNames: routeNameFor3,
        omtCount: omtCount,
    }
};

export const OmtItems: StoryObj<typeof RouteList> = {
    args: {
        routeNames: routeNameFor4,
        omtCount: omtCount,
    }
};
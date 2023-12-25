import { Meta, StoryObj } from "@storybook/react";
import { EffectList } from "../EffectList";
import { allItemsData, decreaseItemData, designatedItemData, increaseItemData, otherItemData } from "./EffectListStoryData";

export default {
    title: 'search/common/component/EffectList',
    component: EffectList,
} as Meta<typeof EffectList>;

export const NoItems: StoryObj<typeof EffectList> = {
    args: {
        effectKbn: '',
        effectName: ''
    }
};

export const IncreaseItem: StoryObj<typeof EffectList> = {
    args: {
        effectKbn: increaseItemData.effectKbn,
        effectName: increaseItemData.effectName
    }
};

export const DecreaseItem: StoryObj<typeof EffectList> = {
    args: {
        effectKbn: decreaseItemData.effectKbn,
        effectName: decreaseItemData.effectName
    }
};

export const DesignatedItem: StoryObj<typeof EffectList> = {
    args: {
        effectKbn: designatedItemData.effectKbn,
        effectName: designatedItemData.effectName
    }
};

export const OthersItem: StoryObj<typeof EffectList> = {
    args: {
        effectKbn: otherItemData.effectKbn,
        effectName: otherItemData.effectName
    }
};

export const AllItems: StoryObj<typeof EffectList> = {
    args: {
        effectKbn: allItemsData.effectKbn,
        effectName: allItemsData.effectName
    }
};
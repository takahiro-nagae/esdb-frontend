import { Meta, StoryObj } from '@storybook/react';

import { EffectList } from '../EffectList';

import {
  allItemsData,
  decreaseItemData,
  designatedItemData,
  increaseItemData,
  otherItemData,
} from './EffectListStoryData';

export default {
  title: 'search/common/component/EffectList',
  component: EffectList,
} as Meta<typeof EffectList>;

export const NoItems: StoryObj<typeof EffectList> = {
  args: {
    effects: [],
  },
};

export const IncreaseItem: StoryObj<typeof EffectList> = {
  args: {
    effects: [
      {
        type: increaseItemData.type,
        name: increaseItemData.name,
      },
    ],
  },
};

export const DecreaseItem: StoryObj<typeof EffectList> = {
  args: {
    effects: [
      {
        type: decreaseItemData.type,
        name: decreaseItemData.name,
      },
    ],
  },
};

export const DesignatedItem: StoryObj<typeof EffectList> = {
  args: {
    effects: [
      {
        type: designatedItemData.type,
        name: designatedItemData.name,
      },
    ],
  },
};

export const OthersItem: StoryObj<typeof EffectList> = {
  args: {
    effects: [
      {
        type: otherItemData.type,
        name: otherItemData.name,
      },
    ],
  },
};

export const AllItems: StoryObj<typeof EffectList> = {
  args: {
    effects: allItemsData.effects,
  },
};

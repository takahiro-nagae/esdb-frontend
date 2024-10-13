import { Meta, StoryObj } from '@storybook/react';

import { RankDropDown } from '../RankDropDown';
import { RANK_MOCK } from '@/repositories/form/__mocks__/fetchInitData';

export default {
  title: 'form/Rank/RankDropDown',
  component: RankDropDown,
  decorators: [
    Story => {
      return <Story />;
    },
  ],
} as Meta<typeof RankDropDown>;

export const Default: StoryObj<typeof RankDropDown> = {
  args: {
    rankList: RANK_MOCK,
    register: undefined,
  },
};

export const None: StoryObj<typeof RankDropDown> = {
  args: {
    rankList: [],
    register: undefined,
  },
};

import { Meta, StoryFn } from '@storybook/react';

import { Rank } from '../Rank';

import { useRankStore } from '@/features/Form/store/useRankStore';
import { RANK_MOCK } from '@/repositories/form/__mocks__/result';

export default {
  title: 'form/Rank/Rank',
  component: Rank,
  decorators: [
    Story => {
      const { setRanks } = useRankStore();
      setRanks(RANK_MOCK);
      return <Story />;
    },
  ],
} as Meta<typeof Rank>;

const Template: StoryFn<typeof Rank> = () => {
  return <Rank />;
};

export const Default = Template.bind({});

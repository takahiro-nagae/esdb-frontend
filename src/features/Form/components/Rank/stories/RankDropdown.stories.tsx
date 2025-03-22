import { Meta, StoryFn } from '@storybook/react';
import { useEffect } from 'react';

import { RankDropdown } from '../RankDropdown';

import { useRankStore } from '@/features/Form/store/useRankStore';
import { RANK_MOCK } from '@/repositories/form/__mocks__/result';

export default {
  title: 'form/Rank/RankDropdown',
  component: RankDropdown,
  decorators: [
    (Story, context) => {
      const { setRanks } = useRankStore();
      useEffect(() => {
        if (context.name === 'Default') {
          setRanks(RANK_MOCK);
        } else {
          setRanks([]);
        }
      }, [context.name, setRanks]);
      return <Story />;
    },
  ],
} as Meta<typeof RankDropdown>;

const Template: StoryFn<typeof RankDropdown> = args => {
  return <RankDropdown {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  rankList: RANK_MOCK,
};
export const None = Template.bind({});
None.args = {
  rankList: [],
};

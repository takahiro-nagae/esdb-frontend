import { Meta, StoryFn } from '@storybook/react';

import { RankDropdown } from '../RankDropdown';
import { RANK_MOCK } from '@/repositories/form/__mocks__/fetchInitData';
import { useState } from 'react';

export default {
  title: 'form/Rank/RankDropdown',
  component: RankDropdown,
  decorators: [
    Story => {
      return <Story />;
    },
  ],
} as Meta<typeof RankDropdown>;

const Template: StoryFn<typeof RankDropdown> = args => {
  const [selectedRank, setSelectedRank] = useState('');
  return (
    <RankDropdown
      {...args}
      selectedRank={selectedRank}
      setSelectedRank={setSelectedRank}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  rankList: RANK_MOCK,
};
export const None = Template.bind({});
None.args = {
  rankList: [],
};

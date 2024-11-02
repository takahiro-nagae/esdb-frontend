import { Meta, StoryFn } from '@storybook/react';
import { useState } from 'react';

import { Rank } from '../Rank';

import { RANK_MOCK } from '@/repositories/form/__mocks__/fetchInitData';


export default {
  title: 'form/Rank/Rank',
  component: Rank,
  decorators: [
    Story => {
      return <Story />;
    },
  ],
} as Meta<typeof Rank>;

const Template: StoryFn<typeof Rank> = () => {
  const [selectedRank, setSelectedRank] = useState('');
  const [rankRange, setRankRange] = useState('1');

  return (
    <Rank
      rankList={RANK_MOCK}
      dropdown={{ selectedRank, setSelectedRank }}
      range={{ rankRange, setRankRange }}
    />
  );
};

export const Default = Template.bind({});

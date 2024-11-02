import { Meta, StoryFn } from '@storybook/react';
import { useState } from 'react';

import { RankRange } from '../RankRange';

export default {
  title: 'form/Rank/RankRange',
  component: RankRange,
  decorators: [
    Story => {
      return <Story />;
    },
  ],
} as Meta<typeof RankRange>;

const Template: StoryFn<typeof RankRange> = () => {
  const [rankRange, setRankRange] = useState('1');
  return <RankRange rankRange={rankRange} setRankRange={setRankRange} />;
};

export const Default = Template.bind({});

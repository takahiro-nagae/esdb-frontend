import { Meta, Story } from '@storybook/react';
import { RankRange } from '../RankRange';
import { useState } from 'react';

export default {
  title: 'form/Rank/RankRange',
  component: RankRange,
  decorators: [
    Story => {
      return <Story />;
    },
  ],
} as Meta<typeof RankRange>;

const Template: Story<typeof RankRange> = () => {
  const [rankRange, setRankRange] = useState('1');
  return <RankRange rankRange={rankRange} setRankRange={setRankRange} />;
};

export const Default = Template.bind({});

import { Meta, StoryFn } from '@storybook/react';

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
  return <RankRange />;
};

export const Default = Template.bind({});

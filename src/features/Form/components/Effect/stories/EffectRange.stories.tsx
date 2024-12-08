import { Meta, StoryFn } from '@storybook/react';

import { EffectRange } from '../EffectRange';

export default {
  title: 'form/Effect/EffectRange',
  component: EffectRange,
  decorators: [
    Story => {
      return <Story />;
    },
  ],
} as Meta<typeof EffectRange>;

const Template: StoryFn<typeof EffectRange> = () => {
  return <EffectRange />;
};

export const Default = Template.bind({});

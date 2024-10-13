import { Meta, StoryObj } from '@storybook/react';
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

export const Default: StoryObj<typeof EffectRange> = {
  args: {
    register: undefined,
  },
};

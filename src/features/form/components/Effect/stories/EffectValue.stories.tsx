import { Meta, StoryObj } from '@storybook/react';
import { EffectValue } from '../EffectValue';

export default {
  title: 'form/Effect/EffectValue',
  component: EffectValue,
  decorators: [
    Story => {
      return <Story />;
    },
  ],
} as Meta<typeof EffectValue>;

export const Default: StoryObj<typeof EffectValue> = {
  args: {
    inputEffectValue: '',
    setInputEffectValue: () => {},
  },
};

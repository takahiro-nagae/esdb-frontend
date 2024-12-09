import { Meta, StoryFn } from '@storybook/react';

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

const Template: StoryFn<typeof EffectValue> = () => {
  return <EffectValue />;
};

export const Default = Template.bind({});

import { Meta, StoryFn } from '@storybook/react';
import { useState } from 'react';

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
  const [effectRange, setEffectRange] = useState('0');
  return (
    <EffectRange effectRange={effectRange} setEffectRange={setEffectRange} />
  );
};

export const Default = Template.bind({});

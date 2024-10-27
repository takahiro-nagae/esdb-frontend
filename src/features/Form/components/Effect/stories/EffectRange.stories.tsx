import { Meta, StoryFn } from '@storybook/react';
import { EffectRange } from '../EffectRange';
import { useState } from 'react';

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

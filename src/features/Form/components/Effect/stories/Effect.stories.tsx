import { Meta, StoryFn } from '@storybook/react';
import { useState } from 'react';

import { Effect } from '../Effect';

import { EFFECT_MOCK } from '@/repositories/form/__mocks__/fetchInitData';

export default {
  title: 'form/Effect/Effect',
  component: Effect,
  decorators: [
    Story => {
      return <Story />;
    },
  ],
} as Meta<typeof Effect>;

const Template: StoryFn<typeof Effect> = () => {
  const [selectedEffect, setSelectedEffect] = useState('');
  const [inputEffectValue, setInputEffectValue] = useState('');
  const [effectRange, setEffectRange] = useState('');
  return (
    <Effect
      effectList={EFFECT_MOCK}
      dropdown={{ selectedEffect, setSelectedEffect }}
      input={{
        inputEffectValue,
        setInputEffectValue,
      }}
      range={{
        effectRange,
        setEffectRange,
      }}
    />
  );
};

export const Default = Template.bind({});

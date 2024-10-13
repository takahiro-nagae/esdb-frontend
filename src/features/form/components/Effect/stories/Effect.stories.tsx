import { Meta, StoryFn } from '@storybook/react';
import { Effect } from '../Effect';
import { EFFECT_MOCK } from '@/repositories/form/__mocks__/fetchInitData';
import { useState } from 'react';

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
      dropDown={{ selectedEffect, setSelectedEffect }}
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

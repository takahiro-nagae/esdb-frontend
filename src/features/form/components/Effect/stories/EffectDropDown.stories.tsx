import { Meta, StoryFn } from '@storybook/react';
import { EFFECT_MOCK } from '@/repositories/form/__mocks__/fetchInitData';
import { EffectDropDown } from '../EffectDropDown';
import { useState } from 'react';

export default {
  title: 'form/Effect/EffectDropDown',
  component: EffectDropDown,
  decorators: [
    Story => {
      return <Story />;
    },
  ],
} as Meta<typeof EffectDropDown>;

const Template: StoryFn<typeof EffectDropDown> = args => {
  const [selectedEffect, setSelectedEffect] = useState('0');
  return (
    <EffectDropDown
      {...args}
      selectedEffect={selectedEffect}
      setSelectedEffect={setSelectedEffect}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  effectList: EFFECT_MOCK,
};

export const None = Template.bind({});
None.args = {
  effectList: [],
};

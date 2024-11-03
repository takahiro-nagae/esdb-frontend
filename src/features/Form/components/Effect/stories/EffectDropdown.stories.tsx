import { Meta, StoryFn } from '@storybook/react';
import { useState } from 'react';

import { EffectDropdown } from '../EffectDropdown';

import { EFFECT_MOCK } from '@/repositories/form/__mocks__/fetchInitData';

export default {
  title: 'form/Effect/EffectDropDown',
  component: EffectDropdown,
  decorators: [
    Story => {
      return <Story />;
    },
  ],
} as Meta<typeof EffectDropdown>;

const Template: StoryFn<typeof EffectDropdown> = args => {
  const [selectedEffect, setSelectedEffect] = useState('0');
  return (
    <EffectDropdown
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

import { Meta, StoryObj } from '@storybook/react';
import { EFFECT_MOCK } from '@/repositories/form/__mocks__/fetchInitData';
import { EffectDropDown } from '../EffectDropDown';

export default {
  title: 'form/Effect/EffectDropDown',
  component: EffectDropDown,
  decorators: [
    Story => {
      return <Story />;
    },
  ],
} as Meta<typeof EffectDropDown>;

export const Default: StoryObj<typeof EffectDropDown> = {
  args: {
    effectList: EFFECT_MOCK,
    selectedEffect: '',
    setSelectedEffect: () => {},
  },
};

export const None: StoryObj<typeof EffectDropDown> = {
  args: {
    effectList: [],
    selectedEffect: '',
    setSelectedEffect: () => {},
  },
};

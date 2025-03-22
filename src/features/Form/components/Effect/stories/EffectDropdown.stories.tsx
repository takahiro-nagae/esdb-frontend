import { Meta, StoryFn } from '@storybook/react';
import { useEffect } from 'react';

import { EffectDropdown } from '../EffectDropdown';

import { useEffectStore } from '@/features/Form/store/useEffectStore';
import { EFFECT_MOCK } from '@/repositories/form/__mocks__/result';

export default {
  title: 'form/Effect/EffectDropDown',
  component: EffectDropdown,
  decorators: [
    (Story, context) => {
      const { setEffects } = useEffectStore();
      useEffect(() => {
        if (context.name === 'Default') {
          setEffects(EFFECT_MOCK);
        } else {
          setEffects([]);
        }
      }, [context.name, setEffects]);
      return <Story />;
    },
  ],
} as Meta<typeof EffectDropdown>;

const Template: StoryFn<typeof EffectDropdown> = args => {
  return <EffectDropdown {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  effectList: EFFECT_MOCK,
};

export const None = Template.bind({});
None.args = {
  effectList: [],
};

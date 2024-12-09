import { Meta, StoryFn } from '@storybook/react';

import { Effect } from '../Effect';

import { useEffectStore } from '@/features/Form/store/useEffectStore';
import { EFFECT_MOCK } from '@/repositories/form/__mocks__/fetchInitData';

export default {
  title: 'form/Effect/Effect',
  component: Effect,
  decorators: [
    Story => {
      const { setEffects } = useEffectStore();
      setEffects(EFFECT_MOCK);
      return <Story />;
    },
  ],
} as Meta<typeof Effect>;

const Template: StoryFn<typeof Effect> = () => {
  return <Effect />;
};

export const Default = Template.bind({});

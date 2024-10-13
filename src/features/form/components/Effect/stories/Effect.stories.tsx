import { Meta, StoryObj } from '@storybook/react';
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

export const Default: StoryObj<typeof Effect> = {
  args: {
    effectList: EFFECT_MOCK,
    register: undefined,
  },
};

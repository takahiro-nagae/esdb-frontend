import { Meta, StoryObj } from '@storybook/react';

import { TARGET_MOCK } from '@/repositories/form/__mocks__/fetchInitData';
import { Target } from './Target';

export default {
  title: 'form/Target',
  component: Target,
  decorators: [
    Story => {
      return <Story />;
    },
  ],
} as Meta<typeof Target>;

export const Default: StoryObj<typeof Target> = {
  args: {
    targetList: TARGET_MOCK,
    register: undefined,
  },
};

export const None: StoryObj<typeof Target> = {
  args: {
    targetList: [],
    register: undefined,
  },
};

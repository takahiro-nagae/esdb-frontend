import { Meta, StoryFn } from '@storybook/react';
import { useEffect } from 'react';

import { useTargetStore } from '../../store/useTargetStore';

import { Target } from './Target';

import { TARGET_MOCK } from '@/repositories/form/__mocks__/result';

export default {
  title: 'form/Target',
  component: Target,
  decorators: [
    (Story, context) => {
      const { setTargets } = useTargetStore();
      useEffect(() => {
        if (context.name === 'Default') {
          setTargets(TARGET_MOCK);
        } else {
          setTargets([]);
        }
      }, [context.name, setTargets]);
      return <Story />;
    },
  ],
} as Meta<typeof Target>;

const Template: StoryFn<typeof Target> = args => {
  return <Target {...args} />;
};

export const Default = Template.bind({});

export const None = Template.bind({});

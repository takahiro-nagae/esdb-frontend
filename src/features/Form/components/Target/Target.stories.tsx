import { Meta, StoryFn } from '@storybook/react';
import { useState } from 'react';

import { Target } from './Target';

import { TARGET_MOCK } from '@/repositories/form/__mocks__/fetchInitData';

export default {
  title: 'form/Target',
  component: Target,
  decorators: [
    Story => {
      return <Story />;
    },
  ],
} as Meta<typeof Target>;

const Template: StoryFn<typeof Target> = args => {
  const [selectedTarget, setSelectedTarget] = useState('1');
  return (
    <Target
      {...args}
      selectedTarget={selectedTarget}
      setSelectedTarget={setSelectedTarget}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  targetList: TARGET_MOCK,
};

export const None = Template.bind({});
None.args = {
  targetList: [],
};

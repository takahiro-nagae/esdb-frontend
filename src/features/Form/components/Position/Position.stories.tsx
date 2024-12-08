import { Meta, StoryFn } from '@storybook/react';

import { Position } from './Position';

export default {
  title: 'form/Position',
  component: Position,
  decorators: [
    Story => {
      return <Story />;
    },
  ],
} as Meta<typeof Position>;

const Template: StoryFn<typeof Position> = () => {
  return <Position />;
};

export const Default = Template.bind({});

import { Meta, Story } from '@storybook/react';
import { Position } from './Position';
import { useState } from 'react';

export default {
  title: 'form/Position',
  component: Position,
  decorators: [
    Story => {
      return <Story />;
    },
  ],
} as Meta<typeof Position>;

const Template: Story<typeof Position> = args => {
  const [position, setPosition] = useState('0');
  return <Position {...args} position={position} setPosition={setPosition} />;
};

export const Default = Template.bind({});

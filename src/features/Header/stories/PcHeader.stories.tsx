import { Meta, StoryFn } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';

import { PcHeader } from '../PcHeader';

export default {
  title: 'header/PcHeader',
  component: PcHeader,
  decorators: [
    Story => {
      return (
        <BrowserRouter>
          <Story />
        </BrowserRouter>
      );
    },
  ],
} as Meta<typeof PcHeader>;

const Template: StoryFn<typeof PcHeader> = () => {
  return <PcHeader />;
};

export const Default = Template.bind({});

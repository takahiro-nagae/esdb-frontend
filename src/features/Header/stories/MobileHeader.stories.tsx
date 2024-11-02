import { Meta, StoryFn } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';

import { MobileHeader } from '../MobileHeader';

export default {
  title: 'header/MobileHeader',
  component: MobileHeader,
  decorators: [
    Story => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
} as Meta<typeof MobileHeader>;

const Template: StoryFn<typeof MobileHeader> = () => {
  return <MobileHeader />;
};

export const Default = Template.bind({});

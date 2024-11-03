import { Meta, StoryFn } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';

import { FreeSearch } from '../FreeSearch';

export default {
  title: 'header/SearchBar',
  component: FreeSearch,
  decorators: [
    Story => {
      return (
        <BrowserRouter>
          <Story />
        </BrowserRouter>
      );
    },
  ],
} as Meta<typeof FreeSearch>;

const Template: StoryFn<typeof FreeSearch> = () => {
  return <FreeSearch />;
};

export const Default = Template.bind({});

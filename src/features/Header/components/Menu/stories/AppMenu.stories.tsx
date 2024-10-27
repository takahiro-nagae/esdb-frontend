import { Meta, StoryFn } from '@storybook/react';
import { AppMenu } from '../AppMenu';
import { BrowserRouter } from 'react-router-dom';

export default {
  title: 'header/Menu',
  component: AppMenu,
  decorators: [
    Story => {
      return (
        <BrowserRouter>
          <Story />
        </BrowserRouter>
      );
    },
  ],
} as Meta<typeof AppMenu>;

const Template: StoryFn<typeof AppMenu> = () => {
  return <AppMenu />;
};

export const Default = Template.bind({});

import { Meta, StoryFn } from '@storybook/react';

import { Footer } from '../Footer';

export default {
  title: 'common/Footer',
  component: Footer,
  decorators: [
    Story => {
      return <Story />;
    },
  ],
} as Meta<typeof Footer>;

const Template: StoryFn<typeof Footer> = () => {
  return <Footer />;
};

export const Default = Template.bind({});

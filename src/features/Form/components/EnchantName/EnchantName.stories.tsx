import { Meta, StoryFn } from '@storybook/react';

import { EnchantName } from './EnchantName';

export default {
  title: 'form/EnchantName',
  component: EnchantName,
  decorators: [
    Story => {
      return <Story />;
    },
  ],
} as Meta<typeof EnchantName>;

const Template: StoryFn<typeof EnchantName> = () => {
  return <EnchantName />;
};

export const Default = Template.bind({});

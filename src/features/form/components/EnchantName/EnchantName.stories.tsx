import { Meta, StoryObj } from '@storybook/react';
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

export const Default: StoryObj<typeof EnchantName> = {
  args: {
    inputEnchantName: '',
    setInputEnchantName: undefined,
  },
};

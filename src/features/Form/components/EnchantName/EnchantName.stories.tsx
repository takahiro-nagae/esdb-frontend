import { Meta, Story } from '@storybook/react';
import { useState } from 'react';

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

const Template: Story<typeof EnchantName> = () => {
  const [inputEnchantName, setInputEnchantName] = useState('');
  return (
    <EnchantName
      inputEnchantName={inputEnchantName}
      setInputEnchantName={setInputEnchantName}
    />
  );
};

export const Default = Template.bind({});

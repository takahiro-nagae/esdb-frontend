import { Meta, StoryFn } from '@storybook/react';
import { EffectValue } from '../EffectValue';
import { useState } from 'react';

export default {
  title: 'form/Effect/EffectValue',
  component: EffectValue,
  decorators: [
    Story => {
      return <Story />;
    },
  ],
} as Meta<typeof EffectValue>;

const Template: StoryFn<typeof EffectValue> = () => {
  const [inputEffectValue, setInputEffectValue] = useState('');
  return (
    <EffectValue
      inputEffectValue={inputEffectValue}
      setInputEffectValue={setInputEffectValue}
    />
  );
};

export const Default = Template.bind({});

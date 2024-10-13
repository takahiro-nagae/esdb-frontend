import { Meta, Story } from '@storybook/react';
import { RANK_MOCK } from '@/repositories/form/__mocks__/fetchInitData';
import { Rank } from '../Rank';
import { FormType } from '@/features/form/common/type/FormType';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

export default {
  title: 'form/Rank/Rank',
  component: Rank,
  decorators: [
    Story => {
      return <Story />;
    },
  ],
} as Meta<typeof Rank>;

const Template: Story<typeof Rank> = () => {
  const [rankRange, setRankRange] = useState('1');
  const { register } = useForm<FormType>();
  return (
    <Rank
      rankList={RANK_MOCK}
      rankRange={rankRange}
      register={register}
      setRankRange={setRankRange}
    />
  );
};

export const Default = Template.bind({});

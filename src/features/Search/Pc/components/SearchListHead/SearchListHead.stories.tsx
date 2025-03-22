import { Meta, StoryFn } from '@storybook/react';
import { useEffect } from 'react';

import { Dummy1, Dummy1NotDispVal } from '../../data/SearchListMockData';

import { SearchListHead } from './SearchListHead';

import { useEnchantStore } from '@/features/Search/state/useEnchantStore';
import { usePcLayoutStore } from '@/features/Search/state/usePcLayoutStore';

export default {
  title: 'search/pc/SearchListHead',
  component: SearchListHead,
  decorators: [
    (Story, context) => {
      const { setOrderBy, setOrder } = usePcLayoutStore();
      const { setImmutableEnchants, setEffectName } = useEnchantStore();
      useEffect(() => {
        if (context.name === 'Default') {
          setOrderBy('id');
          setOrder('asc');
          setImmutableEnchants([Dummy1NotDispVal]);
          setEffectName('');
        } else if (context.name === 'Enchant Name Asc') {
          setOrderBy('name');
          setOrder('asc');
          setImmutableEnchants([Dummy1NotDispVal]);
          setEffectName('');
        } else if (context.name === 'Enchant Name Desc') {
          setOrderBy('name');
          setOrder('desc');
          setImmutableEnchants([Dummy1NotDispVal]);
          setEffectName('');
        } else if (context.name === 'Desc Val') {
          setOrderBy('value');
          setOrder('asc');
          setImmutableEnchants([Dummy1]);
          setEffectName('test');
        }
      }, [context.name, setOrderBy, setOrder]);

      return <Story />;
    },
  ],
} as Meta<typeof SearchListHead>;

const Template: StoryFn<typeof SearchListHead> = args => {
  return <SearchListHead {...args} />;
};
export const Default = Template.bind({});

export const EnchantNameAsc = Template.bind({});

export const EnchantNameDesc = Template.bind({});

export const DescVal = Template.bind({});

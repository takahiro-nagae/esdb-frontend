import { Meta, StoryFn } from '@storybook/react';
import { useEffect } from 'react';

import {
  Dummy1,
  Dummy1NotDispVal,
  Dummy2,
  Dummy2NotDispVal,
} from '../../data/SearchListMockData';

import { SearchListBody } from './SearchListBody';

import { useEnchantStore } from '@/features/Search/state/useEnchantStore';
import { usePcLayoutStore } from '@/features/Search/state/usePcLayoutStore';

export default {
  title: 'search/pc/SearchListBody',
  component: SearchListBody,
  render: args => <SearchListBody {...args} />,
  decorators: [
    (Story, context) => {
      const { setOrder, setOrderBy, setPage } = usePcLayoutStore();
      const { setImmutableEnchants, setEffectName } = useEnchantStore();
      useEffect(() => {
        switch (context.name) {
          case 'Enchant Name Asc':
          case 'Disp Row Per Page 1':
            setOrder('asc');
            setOrderBy('name');
            setImmutableEnchants([Dummy1, Dummy2]);
            setPage(0);
            setEffectName('test');
            break;
          case 'Enchant Name Desc':
            setOrder('desc');
            setOrderBy('name');
            setImmutableEnchants([Dummy1, Dummy2]);
            setPage(0);
            setEffectName('test');
            break;
          case 'Not Val Enchant Name Asc':
            setOrder('asc');
            setOrderBy('name');
            setImmutableEnchants([Dummy1NotDispVal, Dummy2NotDispVal]);
            setPage(0);
            setEffectName('');
            break;
          case 'Same Sort Value':
            setOrder('asc');
            setOrderBy('rank');
            setImmutableEnchants([Dummy1, Dummy2]);
            setPage(0);
            setEffectName('test');
            break;
          case 'Disp Row Per Page 2':
            setOrder('asc');
            setOrderBy('name');
            setImmutableEnchants([Dummy1, Dummy2]);
            setPage(1);
            setEffectName('test');
            break;
          default:
            break;
        }
      }, [
        context.name,
        setOrder,
        setOrderBy,
        setPage,
        setImmutableEnchants,
        setEffectName,
      ]);

      return <Story />;
    },
  ],
} as Meta<typeof SearchListBody>;

const Template: StoryFn<typeof SearchListBody> = args => {
  return <SearchListBody {...args} />;
};

export const EnchantNameAsc = Template.bind({});
EnchantNameAsc.args = {
  rowsPerPage: 2,
};

export const EnchantNameDesc = Template.bind({});
EnchantNameDesc.args = {
  rowsPerPage: 2,
};

export const NotValEnchantNameAsc = Template.bind({});
NotValEnchantNameAsc.args = {
  rowsPerPage: 2,
};

export const SameSortValue = Template.bind({ rowPerPage: 2 });
SameSortValue.args = {
  rowsPerPage: 2,
};

export const DispRowPerPage1 = Template.bind({});
DispRowPerPage1.args = {
  rowsPerPage: 1,
};

export const DispRowPerPage2 = Template.bind({});
DispRowPerPage2.args = {
  rowsPerPage: 1,
};

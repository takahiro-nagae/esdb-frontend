import { Meta, StoryObj } from '@storybook/react';
import { useEffect } from 'react';

import { useEnchantStore } from '../../state/useEnchantStore';
import { usePcLayoutStore } from '../../state/usePcLayoutStore';
import { SearchListContainer } from '../SearchListContainer';
import { Dummy1, Dummy2 } from '../data/SearchListMockData';

export default {
  title: 'search/pc/SearchListContainer',
  component: SearchListContainer,
  decorators: [
    Story => {
      const { setImmutableEnchants } = useEnchantStore();
      const { setOrderBy, setOrder, setPage } = usePcLayoutStore();
      useEffect(() => {
        setImmutableEnchants([Dummy1, Dummy2]);
        setOrderBy('enchant_name');
        setOrder('asc');
        setPage(0);
      }, [setImmutableEnchants, setOrderBy, setOrder, setPage]);

      return (
        <>
          <style>
            {`
              div {
                  top: 0 !important;
              }
              th {
                  top: 0 !important;
              }
          `}
          </style>
          <Story />
        </>
      );
    },
  ],
} as Meta<typeof SearchListContainer>;

export const Default: StoryObj<typeof SearchListContainer> = {};

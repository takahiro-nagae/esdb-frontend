import { Meta, StoryObj } from '@storybook/react';

import { SearchListHead } from './SearchListHead';

import { OrderContext } from '@/features/Search/context/pc/OrderContext';

export default {
  title: 'search/pc/SearchListHead',
  component: SearchListHead,
} as Meta<typeof SearchListHead>;

export const Default: StoryObj<typeof SearchListHead> = {
  decorators: [
    Story => {
      return (
        <OrderContext.Provider
          value={{
            orderBy: 'enchant_id',
            setOrderBy: () => {},
            order: 'asc',
            setOrder: () => {},
          }}
        >
          <table>
            <Story />
          </table>
        </OrderContext.Provider>
      );
    },
  ],
  args: {
    isDispVal: false,
  },
};

export const EnchantNameAsc: StoryObj<typeof SearchListHead> = {
  decorators: [
    Story => {
      return (
        <OrderContext.Provider
          value={{
            orderBy: 'enchant_name',
            setOrderBy: () => {},
            order: 'asc',
            setOrder: () => {},
          }}
        >
          <table>
            <Story />
          </table>
        </OrderContext.Provider>
      );
    },
  ],
  args: {
    isDispVal: false,
  },
};

export const EnchantNameDesc: StoryObj<typeof SearchListHead> = {
  decorators: [
    Story => {
      return (
        <OrderContext.Provider
          value={{
            orderBy: 'enchant_name',
            setOrderBy: () => {},
            order: 'desc',
            setOrder: () => {},
          }}
        >
          <table>
            <Story />
          </table>
        </OrderContext.Provider>
      );
    },
  ],
  args: {
    isDispVal: false,
  },
};

export const DescVal: StoryObj<typeof SearchListHead> = {
  decorators: [
    Story => {
      return (
        <OrderContext.Provider
          value={{
            orderBy: 'disp_val',
            setOrderBy: () => {},
            order: 'asc',
            setOrder: () => {},
          }}
        >
          <table>
            <Story />
          </table>
        </OrderContext.Provider>
      );
    },
  ],
  args: {
    isDispVal: true,
  },
};

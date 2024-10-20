import { Meta, StoryObj } from '@storybook/react';
import { SearchListContainer } from '../SearchListContainer';
import { OrderContext } from '../../context/pc/OrderContext';
import { PageContext } from '../../context/PageContext';
import { EnchantContext } from '../../context/EnchantContext';
import { Dummy1, Dummy2 } from '../data/SearchListMockData';

export default {
  title: 'search/pc/SearchListContainer',
  component: SearchListContainer,
  decorators: [
    Story => {
      return (
        <EnchantContext.Provider
          value={{
            enchantList: [Dummy1, Dummy2],
            setEnchantList: () => {},
            rowData: [Dummy1, Dummy2],
            setRowData: () => {},
            count: 2,
            setCount: () => {},
          }}
        >
          <OrderContext.Provider
            value={{
              order: 'asc',
              setOrder: () => {},
              orderBy: 'enchant_name',
              setOrderBy: () => {},
            }}
          >
            <PageContext.Provider value={{ page: 0, setPage: () => {} }}>
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
            </PageContext.Provider>
          </OrderContext.Provider>
        </EnchantContext.Provider>
      );
    },
  ],
} as Meta<typeof SearchListContainer>;

export const Default: StoryObj<typeof SearchListContainer> = {
  args: {
    rowData: [Dummy1, Dummy2],
    count: 2,
    isDispVal: true,
  },
};

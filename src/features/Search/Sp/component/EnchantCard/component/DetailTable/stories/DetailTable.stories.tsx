import { Meta } from '@storybook/react';

import { DetailTable } from '../DetailTable';

import { OPEN_ROUTE_NAME } from './mockRouteName';

import { ENCHANT_DATA_MOCK } from '@/repositories/search/__mocks__/result';

export default {
  title: 'search/sp/component/DetailTable',
  component: DetailTable,
} as Meta<typeof DetailTable>;

export const NotOpen = {
  args: {
    enchant: ENCHANT_DATA_MOCK,
    isOpen: false,
  },
};

export const Open = {
  args: {
    enchant: {
      ...ENCHANT_DATA_MOCK,
      route: OPEN_ROUTE_NAME,
    },
    isOpen: true,
  },
};

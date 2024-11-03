import { Meta, StoryObj } from '@storybook/react';

import { SpSearchContainer } from '../SpSearchContainer';

import { ENCHANT_DATA_MOCK } from '@/repositories/search/__mocks__/fetchSearchEnchantData';

export default {
  title: 'search/sp/SpSearchContainer',
  component: SpSearchContainer,
} as Meta<typeof SpSearchContainer>;

export const Default: StoryObj<typeof SpSearchContainer> = {
  args: {
    rowData: [
      ENCHANT_DATA_MOCK,
      ENCHANT_DATA_MOCK,
      ENCHANT_DATA_MOCK,
      ENCHANT_DATA_MOCK,
      ENCHANT_DATA_MOCK,
    ],
  },
};

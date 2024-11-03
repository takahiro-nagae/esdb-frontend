import { Meta, StoryObj } from '@storybook/react';

import { EnchantCard } from '../EnchantCard';

import { ENCHANT_DATA_MOCK } from '@/repositories/search/__mocks__/fetchSearchEnchantData';

export default {
  title: 'search/sp/EnchantCard',
  component: EnchantCard,
} as Meta<typeof EnchantCard>;

export const Normal: StoryObj<typeof EnchantCard> = {
  args: {
    enchant: ENCHANT_DATA_MOCK,
  },
};

export const AllView: StoryObj<typeof EnchantCard> = {
  args: {
    enchant: {
      ...ENCHANT_DATA_MOCK,
      imp_flg: '0',
      invalid_target_flg: '1',
      disp_val: 100,
    },
  },
};

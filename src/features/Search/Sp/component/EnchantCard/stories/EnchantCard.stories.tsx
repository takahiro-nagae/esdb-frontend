import { Meta, StoryObj } from '@storybook/react';

import { EnchantCard } from '../EnchantCard';

import { useEnchantStore } from '@/features/Search/state/useEnchantStore';
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
  decorators: [
    Story => {
      const { setEffectName } = useEnchantStore();
      setEffectName('テスト');
      return <Story />;
    },
  ],
  args: {
    enchant: {
      ...ENCHANT_DATA_MOCK,
      isInvalidTarget: true,
      value: 100,
    },
  },
};

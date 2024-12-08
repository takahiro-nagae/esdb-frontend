import { Meta, StoryObj } from '@storybook/react';
import { useEffect } from 'react';

import { useEnchantStore } from '../../state/useEnchantStore';
import { SpSearchContainer } from '../SpSearchContainer';

import { ENCHANT_DATA_MOCK } from '@/repositories/search/__mocks__/fetchSearchEnchantData';

export default {
  title: 'search/sp/SpSearchContainer',
  component: SpSearchContainer,
  decorators: [
    Story => {
      const { setImmutableEnchants } = useEnchantStore();
      useEffect(() => {
        setImmutableEnchants([
          ENCHANT_DATA_MOCK,
          ENCHANT_DATA_MOCK,
          ENCHANT_DATA_MOCK,
          ENCHANT_DATA_MOCK,
          ENCHANT_DATA_MOCK,
        ]);
      }, [setImmutableEnchants]);
      return <Story />;
    },
  ],
} as Meta<typeof SpSearchContainer>;

export const Default: StoryObj<typeof SpSearchContainer> = {};

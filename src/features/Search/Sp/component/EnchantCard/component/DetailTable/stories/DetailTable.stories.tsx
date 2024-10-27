import { Meta } from '@storybook/react';
import { DetailTable } from '../DetailTable';
import { ENCHANT_DATA_MOCK } from '@/repositories/search/__mocks__/fetchSearchEnchantData';

export default {
  title: 'search/sp/component/DetailTable',
  component: DetailTable,
} as Meta<typeof DetailTable>;

export const OPEN_ROUTE_NAME =
  '■ビギナー ショートボウ<br>　- お化け白アリ@■初歩の 木の棒<br>　- コウモリ/巨大コウモリ@■ES<br>　- 巨大ボス：イフリート@■ビギナー モンゴスマートキャップ/ストライプキャップ<br>　- 地下トンネル 宝箱@■ビギナー マンドリン<br>　- ブリアナが販売 (23,000G)' as const;

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
      route_name: OPEN_ROUTE_NAME,
    },
    isOpen: true,
  },
};

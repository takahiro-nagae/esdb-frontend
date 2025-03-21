import { Meta, StoryObj } from '@storybook/react';

import { EnchantCard } from '../EnchantCard';

import { useEnchantStore } from '@/features/Search/state/useEnchantStore';
import { ENCHANT_DATA_MOCK } from '@/repositories/search/__mocks__/result';

export default {
  title: 'search/sp/EnchantCard',
  component: EnchantCard,
} as Meta<typeof EnchantCard>;

export const Normal: StoryObj<typeof EnchantCard> = {
  args: {
    enchant: {
      id: ENCHANT_DATA_MOCK.id,
      name: ENCHANT_DATA_MOCK.name,
      nameEn: ENCHANT_DATA_MOCK.nameEn,
      isInvalidTarget: ENCHANT_DATA_MOCK.isInvalidTarget,
      invalidTargetName: ENCHANT_DATA_MOCK.invalidTargetName,
      isImp: true,
      impName: '',
      effect: ENCHANT_DATA_MOCK.effect.map(e => ({
        name: e?.name ?? '',
        type: e?.type ?? '',
      })),
      position: ENCHANT_DATA_MOCK.position,
      positionName: ENCHANT_DATA_MOCK.positionName,
      rank: ENCHANT_DATA_MOCK.rank,
      rankSeq: ENCHANT_DATA_MOCK.rankSeq,
      route: ENCHANT_DATA_MOCK.route.filter(r => r !== null) as string[],
      target: ENCHANT_DATA_MOCK.target,
      value: ENCHANT_DATA_MOCK.value,
    },
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
      id: ENCHANT_DATA_MOCK.id,
      name: ENCHANT_DATA_MOCK.name,
      nameEn: ENCHANT_DATA_MOCK.nameEn,
      isInvalidTarget: true,
      invalidTargetName: '貼付不可',
      isImp: false,
      impName: '未実装',
      effect: ENCHANT_DATA_MOCK.effect.map(e => ({
        name: e?.name ?? '',
        type: e?.type ?? '',
      })),
      position: ENCHANT_DATA_MOCK.position,
      positionName: ENCHANT_DATA_MOCK.positionName,
      rank: ENCHANT_DATA_MOCK.rank,
      rankSeq: ENCHANT_DATA_MOCK.rankSeq,
      route: ENCHANT_DATA_MOCK.route.filter(r => r !== null) as string[],
      target: ENCHANT_DATA_MOCK.target,
      value: 100,
    },
  },
};

import { Meta, StoryObj } from '@storybook/react';

import { Row } from './Row';

import {
  Dummy1,
  Dummy1NotDispVal,
} from '@/features/Search/Pc/data/SearchListMockData';
import { useEnchantStore } from '@/features/Search/state/useEnchantStore';

export default {
  title: 'search/pc/SearchListRow',
  component: Row,
  decorators: [
    Story => {
      return (
        <table>
          <Story />
        </table>
      );
    },
  ],
} as Meta<typeof Row>;

export const IsDispVal: StoryObj<typeof Row> = {
  decorators: [
    Story => {
      const { setEffectName } = useEnchantStore();
      setEffectName('テスト');
      return <Story />;
    },
  ],
  args: {
    enchant: Dummy1,
  },
};

export const IsNotDispVal: StoryObj<typeof Row> = {
  decorators: [
    Story => {
      const { setEffectName } = useEnchantStore();
      setEffectName('');
      return <Story />;
    },
  ],
  args: {
    enchant: Dummy1NotDispVal,
  },
};

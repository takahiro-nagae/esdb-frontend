import { Meta, StoryObj } from '@storybook/react';

import { BeginnerData } from '../../../../../../repositories/detail/__mock__/result';
import { Detail } from '../Detail';

export default {
  title: 'search/common/component/Detail',
  component: Detail,
} as Meta<typeof Detail>;

export const DetailView: StoryObj<typeof Detail> = {
  args: {
    enchant: BeginnerData,
  },
};

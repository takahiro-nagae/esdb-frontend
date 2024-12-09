import { Meta, StoryObj } from '@storybook/react';

import { Row } from './Row';

import {
  Dummy1,
  Dummy1NotDispVal,
} from '@/features/Search/Pc/data/SearchListMockData';

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
  args: {
    enchant: Dummy1,
  },
};

export const IsNotDispVal: StoryObj<typeof Row> = {
  args: {
    enchant: Dummy1NotDispVal,
  },
};

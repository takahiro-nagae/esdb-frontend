import { Meta, StoryObj } from '@storybook/react';

import { ImpText } from '../ImpText';

export default {
  title: 'search/common/component/ImpText',
  component: ImpText,
} as Meta<typeof ImpText>;

export const NotImped: StoryObj<typeof ImpText> = {
  args: {
    isImp: false,
  },
};

export const Imped: StoryObj<typeof ImpText> = {
  args: {
    isImp: true,
  },
};

import { Meta, StoryFn } from '@storybook/react';
import { useEffect } from 'react';

import { Pagination } from './Pagination';

import { usePcLayoutStore } from '@/features/Search/state/usePcLayoutStore';

export default {
  title: 'search/pc/Pagination',
  component: Pagination,
  decorators: [
    (Story, context) => {
      const { setPage } = usePcLayoutStore();
      useEffect(() => {
        if (context.name === 'Default') {
          setPage(0);
        } else {
          setPage(1);
        }
      }, [context.name, setPage]);

      return <Story />;
    },
  ],
} as Meta<typeof Pagination>;

const Template: StoryFn<typeof Pagination> = args => {
  return <Pagination {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  rowsPerPage: 30,
  setRowsPerPage: () => {},
  count: 100,
};

export const Page1 = Template.bind({});
Page1.args = {
  rowsPerPage: 30,
  setRowsPerPage: () => {},
  count: 100,
};

export const PerPage60Page1 = Template.bind({});
PerPage60Page1.args = {
  rowsPerPage: 60,
  setRowsPerPage: () => {},
  count: 100,
};

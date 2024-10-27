import { Meta, StoryObj } from '@storybook/react';
import { Pagination } from './Pagination';
import { PageContext } from '../../../context/PageContext';

export default {
  title: 'search/pc/Pagination',
  component: Pagination,
  decorators: [
    Story => {
      return (
        <PageContext.Provider value={{ page: 0, setPage: () => {} }}>
          <Story />
        </PageContext.Provider>
      );
    },
  ],
} as Meta<typeof Pagination>;

export const Default: StoryObj<typeof Pagination> = {
  args: {
    rowsPerPage: 30,
    setRowsPerPage: () => {},
    maxCount: 100,
  },
};

export const Page1: StoryObj<typeof Pagination> = {
  args: {
    rowsPerPage: 30,
    setRowsPerPage: () => {},
    maxCount: 100,
  },
  decorators: [
    Story => {
      return (
        <PageContext.Provider value={{ page: 1, setPage: () => {} }}>
          <Story />
        </PageContext.Provider>
      );
    },
  ],
};

export const PerPage60Page1: StoryObj<typeof Pagination> = {
  args: {
    rowsPerPage: 60,
    setRowsPerPage: () => {},
    maxCount: 100,
  },
  decorators: [
    Story => {
      return (
        <PageContext.Provider value={{ page: 1, setPage: () => {} }}>
          <Story />
        </PageContext.Provider>
      );
    },
  ],
};

import { TablePagination } from '@mui/material';
import React from 'react';

import styles from './Pagination.module.css';

import { usePcLayoutStore } from '@/features/Search/state/usePcLayoutStore';

type PaginationProps = {
  rowsPerPage: number;
  setRowsPerPage: (rowsPerPage: number) => void;
  count: number;
};

export const Pagination: React.FC<PaginationProps> = ({
  rowsPerPage,
  setRowsPerPage,
  count,
}) => {
  const { page, setPage } = usePcLayoutStore();

  return (
    <TablePagination
      component='div'
      count={count}
      className={styles.pagination}
      onPageChange={(_, page) => {
        setPage(page);
        window.scrollTo(0, 0);
      }}
      onRowsPerPageChange={e => {
        setRowsPerPage(+e.target.value);
        setPage(0);
      }}
      page={page}
      rowsPerPage={rowsPerPage}
      rowsPerPageOptions={[30, 60, 100]}
      data-testid='pagination'
    />
  );
};

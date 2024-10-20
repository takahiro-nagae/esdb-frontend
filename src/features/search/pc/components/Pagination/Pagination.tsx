import React from 'react';
import { TablePagination } from '@mui/material';
import styles from './Pagination.module.css';
import { usePagination } from './hooks/usePagination';

type PaginationProps = {
  rowsPerPage: number;
  setRowsPerPage: (rowsPerPage: number) => void;
  maxCount: number;
};

export const Pagination: React.FC<PaginationProps> = ({
  rowsPerPage,
  setRowsPerPage,
  maxCount,
}) => {
  const { pageContext, handleChangePage, handleChangeRowsPerPage } =
    usePagination(setRowsPerPage);

  return (
    <TablePagination
      component='div'
      count={maxCount}
      className={styles.pagination}
      onPageChange={(e, page) => handleChangePage(page)}
      onRowsPerPageChange={handleChangeRowsPerPage}
      page={pageContext.page}
      rowsPerPage={rowsPerPage}
      rowsPerPageOptions={[30, 60, 100]}
      data-testid='pagination'
    />
  );
};

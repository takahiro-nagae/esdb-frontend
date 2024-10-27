import { SearchFilter } from '../common/components/SearchFilter/SearchFilter';
import { Grid } from '@material-ui/core';
import Box from '@mui/material/Box';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import { SearchListHead } from './components/SearchListHead/SearchListHead';
import React, { useState } from 'react';
import { SearchListBody } from './components/SearchListBody/SearchListBody';

import styles from './SearchListContainer.module.css';
import { EnchantData } from '@/repositories/search/_types';
import { Pagination } from './components/Pagination/Pagination';

type SearchListContainerProps = {
  rowData: Array<EnchantData>;
  count: number;
  isDispVal: boolean;
};

export const SearchListContainer: React.FC<SearchListContainerProps> = ({
  rowData,
  count,
  isDispVal,
}) => {
  const [rowsPerPage, setRowsPerPage] = useState(30);
  const xsSize = 11;

  return (
    <>
      <SearchFilter xs={xsSize} />
      <Grid item xs={xsSize}>
        <Box>
          <TableContainer className={styles.table}>
            <Table>
              <SearchListHead isDispVal={isDispVal} />
              <SearchListBody rowData={rowData} rowsPerPage={rowsPerPage} />
            </Table>
          </TableContainer>
          <Pagination
            rowsPerPage={rowsPerPage}
            setRowsPerPage={setRowsPerPage}
            maxCount={count}
          />
        </Box>
      </Grid>
    </>
  );
};

import { Grid } from '@mui/material';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import React, { useState } from 'react';

import { SearchFilter } from '../common/components/SearchFilter/SearchFilter';
import { useEnchantStore } from '../state/useEnchantStore';

import styles from './SearchListContainer.module.css';
import { Pagination } from './components/Pagination/Pagination';
import { SearchListBody } from './components/SearchListBody/SearchListBody';
import { SearchListHead } from './components/SearchListHead/SearchListHead';

export const SearchListContainer: React.FC = () => {
  const [rowsPerPage, setRowsPerPage] = useState(30);
  const { enchantsLength } = useEnchantStore();
  const xsSize = 11;

  return (
    <>
      <SearchFilter xs={xsSize} />
      <Grid item xs={xsSize}>
        <Box>
          <TableContainer className={styles.table}>
            <Table>
              <SearchListHead />
              <SearchListBody rowsPerPage={rowsPerPage} />
            </Table>
          </TableContainer>
          <Pagination
            rowsPerPage={rowsPerPage}
            setRowsPerPage={setRowsPerPage}
            count={enchantsLength}
          />
        </Box>
      </Grid>
    </>
  );
};

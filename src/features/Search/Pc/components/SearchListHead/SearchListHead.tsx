import { TableRow } from '@mui/material';
import Box from '@mui/material/Box';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableSortLabel from '@mui/material/TableSortLabel';
import { visuallyHidden } from '@mui/utils';
import React from 'react';


import { useOrderContext } from '../../../context/pc/useOrderContext';

import styles from './SearchListHead.module.css';
import { HeadCellData } from './const/HeadCellData';
import {
  createSortHandler,
  isDisplayCell,
} from './functions/searchListHeadFunction';

type SearchListHeadProps = {
  isDispVal: boolean;
};

export const SearchListHead: React.FC<SearchListHeadProps> = ({
  isDispVal,
}) => {
  const orderContext = useOrderContext();

  return (
    <TableHead>
      <TableRow>
        {HeadCellData.map(
          headCell =>
            isDisplayCell(headCell.id, isDispVal) && (
              <TableCell
                className={styles.tableHeader}
                key={headCell.id}
                sortDirection={
                  orderContext.orderBy === headCell.id
                    ? orderContext.order
                    : false
                }
              >
                <TableSortLabel
                  active={orderContext.orderBy === headCell.id}
                  direction={
                    orderContext.orderBy === headCell.id
                      ? orderContext.order
                      : 'asc'
                  }
                  onClick={() => createSortHandler(headCell.id, orderContext)}
                  style={{ color: '#fff' }}
                >
                  {headCell.label}
                  {orderContext.orderBy === headCell.id ? (
                    <Box component='span' sx={visuallyHidden}>
                      {orderContext.order === 'desc'
                        ? 'sorted descending'
                        : 'sorted ascending'}
                    </Box>
                  ) : null}
                </TableSortLabel>
              </TableCell>
            ),
        )}
        <TableCell className={styles.tableHeader} role='label'>
          効果
        </TableCell>
        <TableCell className={styles.tableHeader} role='label'>
          入手先
        </TableCell>
      </TableRow>
    </TableHead>
  );
};

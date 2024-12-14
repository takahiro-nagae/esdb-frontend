import { TableRow } from '@mui/material';
import Box from '@mui/material/Box';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableSortLabel from '@mui/material/TableSortLabel';
import { visuallyHidden } from '@mui/utils';
import React from 'react';

import styles from './SearchListHead.module.css';
import { HeadCellData } from './const/HeadCellData';
import { isDisplayCell } from './functions/searchListHeadFunction';
import { HeadData } from './types/HeadData';

import { useEnchantStore } from '@/features/Search/state/useEnchantStore';
import { usePcLayoutStore } from '@/features/Search/state/usePcLayoutStore';

export const SearchListHead: React.FC = () => {
  const { enchants } = useEnchantStore();
  const { order, orderBy, setOrder, setOrderBy } = usePcLayoutStore();

  const createSortHandler = (property: keyof HeadData) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell className={styles.tableHeader}></TableCell>
        {HeadCellData.map(
          headCell =>
            isDisplayCell(headCell.id, enchants[0]?.disp_val !== undefined) && (
              <TableCell
                className={styles.tableHeader}
                key={headCell.id}
                sortDirection={orderBy === headCell.id ? order : false}
              >
                <TableSortLabel
                  active={orderBy === headCell.id}
                  direction={orderBy === headCell.id ? order : 'asc'}
                  onClick={() => createSortHandler(headCell.id)}
                  style={{ color: '#fff' }}
                >
                  {headCell.label}
                  {orderBy === headCell.id ? (
                    <Box component='span' sx={visuallyHidden}>
                      {order === 'desc'
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

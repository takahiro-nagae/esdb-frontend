import React, { Dispatch, SetStateAction } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { TablePagination } from '@mui/material';

/**
 * 検索結果のページネーション
 * @param props {
 *                  number,
 *                  number,
 *                  number,
 *                  Dispatch<SetStateAction<number>>,
 *                  Dispatch<React.SetStateAction<number>>
 *               }
 * @returns { JSX.Element }
 */
export const Pagination = ( props: {
    count: number,
    page: number,
    rowsPerPage: number,
    setPage: Dispatch<SetStateAction<number>>,
    setRowsPerPage: Dispatch<React.SetStateAction<number>>,
} ) => {

    /** ページネーション */
    const pagination = css( {
        backgroundColor: '#3C3B40',
        borderBottom: '1px solid rgba(81, 81, 81, 1)',
        borderTop: '1px solid rgba(81, 81, 81, 1)',
        color: '#ccc',
        '.css-pqjvzy-MuiSvgIcon-root-MuiSelect-icon': {
            color: '#fff'
        }
    } );

    /** ページ変更 */
    const handleChangePage = ( event: unknown, newPage: number ) => {
        props.setPage( newPage );
    };

    /** ページに表示する件数の変更 */
    const handleChangeRowsPerPage = ( event: React.ChangeEvent<HTMLInputElement> ) => {
        props.setRowsPerPage( +event.target.value );
        props.setPage( 0 );
    };

    return (
        <TablePagination
            component="div"
            count={ props.count }
            css={ pagination }
            onPageChange={ handleChangePage }
            onRowsPerPageChange={ handleChangeRowsPerPage }
            page={ props.page }
            rowsPerPage={ props.rowsPerPage }
            rowsPerPageOptions={ [ 30, 60, 100 ] }
        />
    )

}
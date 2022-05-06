/** 標準ライブラリ */
import React from 'react';

/** サードパーティーライブラリ */
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { TablePagination } from '@mui/material';

/**
 * 検索結果のページネーション
 */
export const Pagination = ( props: {
    count: number, page: number, rowsPerPage: number, setPage: any, setRowsPerPage: any
} ) => {

    /** ページネーション */
    const pagination = css( {
        backgroundColor: '#3C3B40',
        color: '#ccc',
        borderTop: '1px solid rgba(81, 81, 81, 1)',
        borderBottom: '1px solid rgba(81, 81, 81, 1)',
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
            rowsPerPageOptions={ [ 30, 60, 100 ] }
            component="div"
            count={ props.count }
            rowsPerPage={ props.rowsPerPage }
            page={ props.page }
            onPageChange={ handleChangePage }
            onRowsPerPageChange={ handleChangeRowsPerPage }
            css={ pagination }
        />
    )

}
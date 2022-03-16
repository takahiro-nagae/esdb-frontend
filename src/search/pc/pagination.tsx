/** 標準ライブラリ */
import { useState } from 'react';

/** サードパーティーライブラリ */
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { TablePagination } from '@mui/material';

/**
 *　検索結果のページネーション
 */
export const Pagination = (props: {count: number, page: number, rowsPerPage: number
    , handleChangePage: any, handleChangeRowsPerPage: any}) => {

    /** ページネーション */
    const pagenation = css ({
        backgroundColor: '#3C3B40',
        color: '#ccc',
        borderTop: '1px solid rgba(81, 81, 81, 1)',
        borderBottom: '1px solid rgba(81, 81, 81, 1)',
        '.css-pqjvzy-MuiSvgIcon-root-MuiSelect-icon' : {
            color: '#fff'
        }
    });

    return(
        <TablePagination
            rowsPerPageOptions={[30, 60, 100]}
            component="div"
            count={props.count}
            rowsPerPage={props.rowsPerPage}
            page={props.page}
            onPageChange={props.handleChangePage}
            onRowsPerPageChange={props.handleChangeRowsPerPage}
            css={pagenation}
        />
    )

}
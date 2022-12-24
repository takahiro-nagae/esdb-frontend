import React, { Dispatch, SetStateAction } from 'react';
/** @jsxImportSource @emotion/react */
import { TablePagination } from '@mui/material';
import { pagination } from "./style/paginationStyle";

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
export const Pagination = (props: {
    count: number,
    page: number,
    rowsPerPage: number,
    setPage: Dispatch<SetStateAction<number>>,
    setRowsPerPage: Dispatch<React.SetStateAction<number>>,
}) => {

    /** ページ変更 */
    const handleChangePage = (event: unknown, newPage: number) => {
        props.setPage(newPage);
    };

    /** ページに表示する件数の変更 */
    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        props.setRowsPerPage(+event.target.value);
        props.setPage(0);
    };

    return (
        <TablePagination
            component="div"
            count={props.count}
            css={pagination}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            page={props.page}
            rowsPerPage={props.rowsPerPage}
            rowsPerPageOptions={[ 30, 60, 100 ]}
        />
    )

}
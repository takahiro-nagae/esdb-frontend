/** @jsxImportSource @emotion/react */
import React from 'react';
import { TablePagination } from '@mui/material';
import { pagination } from "./style/PaginationStyle";
import { usePageContext } from '../context/usePageContext';

/**
 * 検索結果のページネーションコンポーネント
 * @returns { JSX.Element }
 */
export const Pagination = (props:
    {
        rowsPerPage: number,
        setRowsPerPage: (rowsPerPage: number) => void,
        maxCount: number
    }
) => {
    const pageContext = usePageContext();

    /** ページ変更 */
    const handleChangePage = (newPage: number) => {
        pageContext.setPage(newPage);
    };

    /** ページに表示する件数の変更 */
    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        props.setRowsPerPage(+event.target.value);
        pageContext.setPage(0);
    };

    return (
        <TablePagination
            component="div"
            count={props.maxCount}
            css={pagination}
            onPageChange={(e, page) => handleChangePage(page)}
            onRowsPerPageChange={handleChangeRowsPerPage}
            page={pageContext.page}
            rowsPerPage={props.rowsPerPage}
            rowsPerPageOptions={[ 30, 60, 100 ]}
            data-testid="pagination"
        />
    );

};
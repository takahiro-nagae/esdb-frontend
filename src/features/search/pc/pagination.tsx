import React from 'react';
/** @jsxImportSource @emotion/react */
import { TablePagination } from '@mui/material';
import { pagination } from "./style/paginationStyle";
import { usePageContext } from '../context/usePageContext';
import { useEnchantContext } from '../context/useEnchantContext';
import { useRowsPerPageContext } from './context/useRowsPerPageContext';

/**
 * 検索結果のページネーションコンポーネント
 * @returns { JSX.Element }
 */
export const Pagination = () => {

    const pageContext = usePageContext();
    const enchantContext = useEnchantContext();
    const rowsPerPageContext = useRowsPerPageContext();

    /** ページ変更 */
    const handleChangePage = (event: unknown, newPage: number) => {
        pageContext.setPage(newPage);
    };

    /** ページに表示する件数の変更 */
    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        rowsPerPageContext.setRowsPerPage(+event.target.value);
        pageContext.setPage(0);
    };

    return (
        <TablePagination
            component="div"
            count={enchantContext.count}
            css={pagination}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            page={pageContext.page}
            rowsPerPage={rowsPerPageContext.rowsPerPage}
            rowsPerPageOptions={[ 30, 60, 100 ]}
        />
    );

};
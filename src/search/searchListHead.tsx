/** サードパーティーライブラリ */
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { TableCell, TableRow } from "@material-ui/core";

/**
 * PC用の検索一覧ヘッダー
 */
export const SearchListHead = () => {

    /** テーブルヘッダー */
    const tableHeader = css ({
        backgroundColor: '#1F2023',
        color: '#fff',
        border: 'none'
    });

    return(
        <TableRow>
            <TableCell css={tableHeader}>名称</TableCell>
            <TableCell css={tableHeader}>位置</TableCell>
            <TableCell css={tableHeader}>ランク</TableCell>
            <TableCell css={tableHeader}>対象</TableCell>
            <TableCell css={tableHeader}>値</TableCell>
            <TableCell css={tableHeader}>効果</TableCell>
            <TableCell css={tableHeader}>入手先</TableCell>
        </TableRow>
    );
}
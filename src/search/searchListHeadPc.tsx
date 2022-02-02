import { TableCell, TableRow } from "@material-ui/core";
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

/**
 * PC用の検索一覧ヘッダー
 * @param: tableHeader ヘッダ行のcss
 */
export const SearchListHeadPc = (props: {tableHeader: any}) => {
    return(
        <TableRow>
            <TableCell css={props.tableHeader}>名称</TableCell>
            <TableCell css={props.tableHeader}>位置</TableCell>
            <TableCell css={props.tableHeader}>ランク</TableCell>
            <TableCell css={props.tableHeader}>対象</TableCell>
            <TableCell css={props.tableHeader}>値</TableCell>
            <TableCell css={props.tableHeader}>効果</TableCell>
            <TableCell css={props.tableHeader}>入手先</TableCell>
        </TableRow>
    );
}
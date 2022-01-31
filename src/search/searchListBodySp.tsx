import { TableCell, TableRow } from "@material-ui/core";
import { useState } from "react";
import { IconButton } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

/**
 * SPの検索一覧
 * @param tableContent コンテント全体のCSS
 */
export const SearchListBodySp = (props: {tableContent: any}) => {
    /** オープン状態 */
    const [open, setOpen] = useState(false);

    return(
        <TableRow css={props.tableContent}>
            <TableCell>1</TableCell>
            <TableCell>フラミンゴスレイヤー</TableCell>
            <TableCell>接頭</TableCell>
            <TableCell>F</TableCell>
            {/* スマホ用開閉ボタン */}
            <TableCell>
                <IconButton
                    aria-label="expand row"
                    size="small"
                    onClick={() => setOpen(!open)}
                >
                    {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                </IconButton>
            </TableCell>
        </TableRow>
    );
}
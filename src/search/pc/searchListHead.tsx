/** 標準ライブラリ */
import { useState } from "react";

/** サードパーティーライブラリ */
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import TableHead from '@mui/material/TableHead';
import TableCell from '@mui/material/TableCell/TableCell';
import { TableRow } from "@mui/material";
import TableSortLabel from "@mui/material/TableSortLabel";
import Box from "@mui/material/Box";
import { visuallyHidden } from '@mui/utils';

/** ローカルライブラリ */
import { HeadData } from "./headData";
import { Order } from "./order";




interface EnhancedTableProps {
    onRequestSort: (event: React.MouseEvent<unknown>, property: keyof HeadData) => void;
    order: Order;
    orderBy: string;
    valFlg: boolean;
}

/**
 * 検索結果一覧のヘッダー
 */
export const SearchListHead = (props: EnhancedTableProps) => {
    const { order, orderBy, onRequestSort, valFlg } =props;
    const createSortHandler =
    (property: keyof HeadData) => (event: React.MouseEvent<unknown>) => {
    onRequestSort(event, property);
    };

    interface HeadCell {
        id: keyof HeadData;
        label: string;
    }

    /** テーブルヘッダー */
    const tableHeader = css ({
        backgroundColor: '#1F2023',
        color: '#fff',
        border: 'none',
        borderBottom: '1px solid rgba(81,81,81,1)',
        position: 'sticky',
        top: '108px',
        zIndex: '3',
        'path' : {
            color: '#fff'
        }
    });

    const headCells: readonly HeadCell[] = [
        {
            id: 'enchant_name',
            label: 'エンチャント名',
        },
        {
            id: 'position_id',
            label: ' 位置',
        },
        {
            id: 'rank',
            label: 'ランク',
        },
        {
            id: 'target_name',
            label: '対象',
        },
        {
            id: 'disp_val',
            label: '値',
        },
    ];

      return(
        <TableHead>
            <TableRow>
                {headCells.map((headCell) => (
                    (headCell.id != 'disp_val' || valFlg) &&
                        <TableCell
                            key={headCell.id}
                            sortDirection={orderBy === headCell.id ? order : false}
                            css={tableHeader}
                        >
                            <TableSortLabel
                                active={orderBy === headCell.id}
                                direction={orderBy === headCell.id ? order : 'asc'}
                                onClick={createSortHandler(headCell.id)}
                                style={{color: '#fff'}}
                            >
                                {headCell.label}
                                {orderBy === headCell.id ? (
                                <Box component="span" sx={visuallyHidden}>
                                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                </Box>
                                ) : null}
                            </TableSortLabel>
                        </TableCell>
                ))}
                <TableCell css={tableHeader}>効果</TableCell>
                <TableCell css={tableHeader}>入手先</TableCell>
            </TableRow>
        </TableHead>
      );
}
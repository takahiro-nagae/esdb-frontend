/** @jsxImportSource @emotion/react */
import React from "react";
import TableHead from '@mui/material/TableHead';
import TableCell from '@mui/material/TableCell';
import { TableRow } from "@mui/material";
import TableSortLabel from "@mui/material/TableSortLabel";
import Box from "@mui/material/Box";
import { visuallyHidden } from '@mui/utils';
import { HeadCellData } from "./data/HeadCellData";
import { tableHeader } from "./style/SearchListHeadStyle";
import { useOrderContext } from "../context/pc/useOrderContext";
import { createSortHandler, isDisplayCell } from "./function/searchListHeadFunction";

/**
 * 検索結果一覧のヘッダー
 * @param props {
 *                  boolean
 *              }
 * @returns SearchListHead { JSX.Element }
 */
export const SearchListHead = (props: {
    isDispVal: boolean
}) => {
    const orderContext = useOrderContext();

    return (
        <TableHead>
            <TableRow>
                {HeadCellData.map((headCell) => (
                    (isDisplayCell(headCell.id, props.isDispVal)) &&
                    <TableCell
                        css={tableHeader}
                        key={headCell.id}
                        sortDirection={orderContext.orderBy === headCell.id ? orderContext.order : false}
                    >
                        <TableSortLabel
                            active={orderContext.orderBy === headCell.id}
                            direction={orderContext.orderBy === headCell.id ? orderContext.order : 'asc'}
                            onClick={() => createSortHandler(headCell.id, orderContext)}
                            style={{ color: '#fff' }}
                        >
                            {headCell.label}
                            {orderContext.orderBy === headCell.id ? (
                                <Box
                                    component="span"
                                    sx={visuallyHidden}
                                >
                                    {
                                        orderContext.order === 'desc' ?
                                            'sorted descending' :
                                            'sorted ascending'
                                    }
                                </Box>
                            ) : null}
                        </TableSortLabel>
                    </TableCell>
                ))}
                <TableCell css={tableHeader} role='label'>効果</TableCell>
                <TableCell css={tableHeader} role='label'>入手先</TableCell>
            </TableRow>
        </TableHead>
    );
};
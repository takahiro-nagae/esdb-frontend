import React from "react";
/** @jsxImportSource @emotion/react */
import TableHead from '@mui/material/TableHead';
import TableCell from '@mui/material/TableCell/TableCell';
import { TableRow } from "@mui/material";
import TableSortLabel from "@mui/material/TableSortLabel";
import Box from "@mui/material/Box";
import { visuallyHidden } from '@mui/utils';
import { HeadData } from "./interface/headData";
import { HeadCellData } from "./data/headCellData";
import { tableHeader } from "./style/searchListHeadStyle";
import { useOrderContext } from "../context/useOrderContext";

/**
 * 検索結果一覧のヘッダー
 * @param props {
 *                  boolean
 *              }
 * @returns SearchListHead { JSX.Element }
 */
export const SearchListHead = (props: {
    valFlg: boolean
}) => {
    const orderContext = useOrderContext();

    const createSortHandler =
              (property: keyof HeadData) => (event: React.MouseEvent<unknown>) => {
                  handleRequestSort(event, property);
              };

    const handleRequestSort = (
        event: React.MouseEvent<unknown>,
        property: keyof HeadData,
    ) => {
        const isAsc = orderContext.orderBy === property && orderContext.order === 'asc';
        orderContext.setOrder(isAsc ? 'desc' : 'asc');
        orderContext.setOrderBy(property);
    };

    return (
        <TableHead>
            <TableRow>
                {HeadCellData.map((headCell) => (
                    (headCell.id != 'disp_val' || props.valFlg) &&
                    <TableCell
                        css={tableHeader}
                        key={headCell.id}
                        sortDirection={orderContext.orderBy === headCell.id ? orderContext.order : false}
                    >
                        <TableSortLabel
                            active={orderContext.orderBy === headCell.id}
                            direction={orderContext.orderBy === headCell.id ? orderContext.order : 'asc'}
                            onClick={createSortHandler(headCell.id)}
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
                <TableCell css={tableHeader}>効果</TableCell>
                <TableCell css={tableHeader}>入手先</TableCell>
            </TableRow>
        </TableHead>
    );
};
import React, { Dispatch, SetStateAction } from "react";
/** @jsxImportSource @emotion/react */
import TableHead from '@mui/material/TableHead';
import TableCell from '@mui/material/TableCell/TableCell';
import { TableRow } from "@mui/material";
import TableSortLabel from "@mui/material/TableSortLabel";
import Box from "@mui/material/Box";
import { visuallyHidden } from '@mui/utils';
import { HeadData } from "./interface/headData";
import { Order } from "./type/order";
import { HeadCellData } from "./data/headCellData";
import { tableHeader } from "./style/searchListHeadStyle";

/**
 * 検索結果一覧のヘッダー
 * @param props {
 *                  Order,
 *                  Dispatch<SetStateAction<Order>>,
 *                  string,
 *                  Dispatch<SetStateAction<string>>,
 *                  boolean
 *              }
 * @returns SearchListHead { JSX.Element }
 */
export const SearchListHead = (props: {
    order: Order,
    setOrder: Dispatch<SetStateAction<Order>>,
    orderBy: string,
    setOrderBy: Dispatch<SetStateAction<keyof HeadData>>,
    valFlg: boolean
}) => {
    const createSortHandler =
              (property: keyof HeadData) => (event: React.MouseEvent<unknown>) => {
                  handleRequestSort(event, property);
              };

    const handleRequestSort = (
        event: React.MouseEvent<unknown>,
        property: keyof HeadData,
    ) => {
        const isAsc = props.orderBy === property && props.order === 'asc';
        props.setOrder(isAsc ? 'desc' : 'asc');
        props.setOrderBy(property);
    };

    return (
        <TableHead>
            <TableRow>
                {HeadCellData.map((headCell) => (
                    (headCell.id != 'disp_val' || props.valFlg) &&
                    <TableCell
                        css={tableHeader}
                        key={headCell.id}
                        sortDirection={props.orderBy === headCell.id ? props.order : false}
                    >
                        <TableSortLabel
                            active={props.orderBy === headCell.id}
                            direction={props.orderBy === headCell.id ? props.order : 'asc'}
                            onClick={createSortHandler(headCell.id)}
                            style={{ color: '#fff' }}
                        >
                            {headCell.label}
                            {props.orderBy === headCell.id ? (
                                <Box
                                    component="span"
                                    sx={visuallyHidden}
                                >
                                    {
                                        props.order === 'desc' ?
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
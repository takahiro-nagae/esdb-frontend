import { SearchFilter } from "../common/compornent/searchFilter";
import { Grid } from "@material-ui/core";
import Box from "@mui/material/Box";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import { SearchListHead } from "./searchListHead";
import { Pagination } from "./pagination";
import { EnchantData } from "../common/interface/enchantData";
import React, { Dispatch, SetStateAction, useState } from "react";
import { Order } from "./type/order";
import { HeadData } from "./interface/headData";
import { SearchListBody } from "./searchListBody";

/**
 * PC版の検索一覧コンテナコンポーネント
 * @param props {
 *                  number, Dispatch<SetStateAction<number>>,
 *                  Array<EnchantData>,
 *                  Order, Dispatch<SetStateAction<Order>> ,
 *                  keyof HeadData, Dispatch<SetStateAction<keyof HeadData>>,
 *                  number, Dispatch<SetStateAction<number>>,
 *                  Array<EnchantData>, Dispatch<SetStateAction<Array<EnchantData>>>,
 *                  boolean
 *              }
 * @returns SearchListContainer { JSX.Element }
 */
export const SearchListContainer = (props: {
    count: number, setCount: Dispatch<SetStateAction<number>>,
    enchantList: Array<EnchantData>,
    order: Order, setOrder: Dispatch<SetStateAction<Order>>,
    orderBy: keyof HeadData, setOrderBy: Dispatch<SetStateAction<keyof HeadData>>,
    page: number, setPage: Dispatch<SetStateAction<number>>,
    rowData: Array<EnchantData>, setRowData: Dispatch<SetStateAction<Array<EnchantData>>>,
}) => {

    /** 現在のページ */
    const [ rowsPerPage, setRowsPerPage ] = useState(30);
    /** グリッドのサイズ */
    const xs = 11;

    return (
        <>
            <SearchFilter
                enchantList={props.enchantList}
                setCount={props.setCount}
                setPage={props.setPage}
                setRowData={props.setRowData}
                xs={xs}
            />
            <Grid
                item
                style={{ width: '100%' }}
                xs={xs}
            >
                <Box>
                    <TableContainer style={{ overflow: 'visible' }}>
                        <Table style={{ borderCollapse: 'separate' }}>
                            <SearchListHead
                                order={props.order}
                                setOrder={props.setOrder}
                                orderBy={props.orderBy}
                                setOrderBy={props.setOrderBy}
                                valFlg={Boolean(props.enchantList[0].disp_val)}
                            />
                            <SearchListBody
                                order={props.order}
                                orderBy={props.orderBy}
                                page={props.page}
                                rowData={props.rowData}
                                rowsPerPage={rowsPerPage}
                            />
                        </Table>
                    </TableContainer>
                    <Pagination
                        count={props.count}
                        page={props.page}
                        setPage={props.setPage}
                        rowsPerPage={rowsPerPage}
                        setRowsPerPage={setRowsPerPage}
                    />
                </Box>
            </Grid>
        </>
    );
}
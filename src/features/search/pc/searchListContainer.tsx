import { SearchFilter } from "../common/component/SearchFilter/SearchFilter";
import { Grid } from "@material-ui/core";
import Box from "@mui/material/Box";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import { SearchListHead } from "./searchListHead";
import { Pagination } from "./pagination";
import React, { useState } from "react";
import { SearchListBody } from "./searchListBody";
import { useEnchantContext } from "../context/useEnchantContext";
import { RowsPerPageContext } from "./context/RowsPerPageContext";

/**
 * PC版の検索一覧コンテナコンポーネント
 * @returns SearchListContainer { JSX.Element }
 */
export const SearchListContainer = () => {

    /** 現在のページ */
    const [ rowsPerPage, setRowsPerPage ] = useState(30);
    /** グリッドのサイズ */
    const xs = 11;
    const enchantContext = useEnchantContext();

    return (
        <>
            <SearchFilter
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
                                valFlg={Boolean(enchantContext.enchantList[0].disp_val)}
                            />
                            <SearchListBody
                                rowsPerPage={rowsPerPage}
                            />
                        </Table>
                    </TableContainer>
                    <RowsPerPageContext.Provider value={{ rowsPerPage, setRowsPerPage }}>
                        <Pagination />
                    </RowsPerPageContext.Provider>
                </Box>
            </Grid>
        </>
    );
};
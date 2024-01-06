import { SearchFilter } from "../common/component/SearchFilter/SearchFilter";
import { Grid } from "@material-ui/core";
import Box from "@mui/material/Box";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import { SearchListHead } from "./SearchListHead";
import React, { useState } from "react";
import { useEnchantContext } from "../context/useEnchantContext";
import { SearchListBody } from "./SearchListBody";
import { Pagination } from "./Pagination";

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
    const isDispVal = Boolean(enchantContext.enchantList[0].disp_val);

    return (
        <>
            <SearchFilter xs={xs} />
            <Grid
                item
                style={{ width: '100%' }}
                xs={xs}
            >
                <Box>
                    <TableContainer style={{ overflow: 'visible' }}>
                        <Table style={{ borderCollapse: 'separate' }}>
                            <SearchListHead isDispVal={isDispVal} />
                            <SearchListBody
                                rowData={enchantContext.rowData}
                                rowsPerPage={rowsPerPage}
                            />
                        </Table>
                    </TableContainer>
                    <Pagination
                        rowsPerPage={rowsPerPage}
                        setRowsPerPage={setRowsPerPage}
                        maxCount={enchantContext.count}
                    />
                </Box>
            </Grid>
        </>
    );
};
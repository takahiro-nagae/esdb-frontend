import { SearchFilter } from "../common/compornent/searchFilter";
import { Grid } from "@material-ui/core";
import Box from "@mui/material/Box";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import { SearchListHead } from "./searchListHead";
import TableBody from "@mui/material/TableBody";
import { TableCell, TableRow } from "@mui/material";
import { InfeedAd } from "../../adsense/infeedAd";
import { SearchListBody } from "./searchListBody";
import { Pagination } from "./pagination";
import { EnchantData } from "../common/interface/enchantData";
import React, { Dispatch, SetStateAction, useState } from "react";
import { Order } from "./order";
import { HeadData } from "./headData";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const SearchListContainer = ( props: {
    count: number, setCount: Dispatch<SetStateAction<number>>,
    enchantList: Array<EnchantData>,
    order: Order, setOrder: Dispatch<SetStateAction<Order>>,
    orderBy: keyof HeadData, setOrderBy: Dispatch<SetStateAction<keyof HeadData>>,
    page: number, setPage: Dispatch<SetStateAction<number>>,
    rowData: Array<EnchantData>, setRowData: Dispatch<SetStateAction<Array<EnchantData>>>,
    valFlag: boolean,
} ) => {

    /** コンテント各行の基本スタイル */
    const tableContentStyle = css( {
        backgroundColor: '#3C3B40',
    } );

    /** データ行のスタイル */
    const tableDataStyle = css( {
        borderBottom: '1px solid rgba(81, 81, 81, 1)',
        paddingTop: '0'
    } );

    /** 現在のページ */
    const [ rowsPerPage, setRowsPerPage ] = useState( 30 );
    /** グリッドのサイズ */
    const xs = 11;

    function descendingComparator<T>( a: T, b: T, orderBy: keyof T ) {
        if ( b[orderBy] < a[orderBy] ) {
            return -1;
        }
        if ( b[orderBy] > a[orderBy] ) {
            return 1;
        }
        return 0;
    }

    function getComparator<Key extends keyof any>(
        order: Order,
        orderBy: Key,
    ): (
        a: { [key in Key]: number | string },
        b: { [key in Key]: number | string },
    ) => number {
        return order === 'desc'
            ? ( a, b ) => descendingComparator( a, b, orderBy )
            : ( a, b ) => -descendingComparator( a, b, orderBy );
    }

    function stableSort<T>( array: readonly T[], comparator: ( a: T, b: T ) => number ) {
        const stabilizedThis = array.map( ( el, index ) => [ el, index ] as [ T, number ] );
        stabilizedThis.sort( ( a, b ) => {
            const order = comparator( a[0], b[0] );
            if ( order !== 0 ) {
                return order;
            }
            return a[1] - b[1];
        } );
        return stabilizedThis.map( ( el ) => el[0] );
    }

    const handleRequestSort = (
        event: React.MouseEvent<unknown>,
        property: keyof HeadData,
    ) => {
        const isAsc = props.orderBy === property && props.order === 'asc';
        props.setOrder( isAsc ? 'desc' : 'asc' );
        props.setOrderBy( property );
    };

    /** ページ変更 */
    const handleChangePage = ( event: unknown, newPage: number ) => {
        props.setPage( newPage );
    };

    /** ページに表示する件数の変更 */
    const handleChangeRowsPerPage = ( event: React.ChangeEvent<HTMLInputElement> ) => {
        setRowsPerPage( +event.target.value );
        props.setPage( 0 );
    };

    return (
        <>
            <SearchFilter
                enchantList={ props.enchantList }
                setCount={ props.setCount }
                setPage={ props.setPage }
                setRowData={ props.setRowData }
                xs={ xs }
            />
            <Grid
                item
                xs={ xs }
            >
                <Box>
                    <TableContainer style={ { overflow: 'visible' } }>
                        <Table style={ { borderCollapse: 'separate' } }>
                            <SearchListHead
                                onRequestSort={ handleRequestSort }
                                order={ props.order }
                                orderBy={ props.orderBy }
                                valFlg={ props.valFlag }
                            />
                            <TableBody>
                                {
                                    stableSort( props.rowData, getComparator( props.order, props.orderBy ) )
                                        .slice( props.page * rowsPerPage, props.page * rowsPerPage + rowsPerPage )
                                        .map( ( enchant, index ) => (
                                            <>
                                                { index != 0 && index % 5 == 0 &&
                                                    <TableRow css={ tableContentStyle } key={ index }>
                                                        <TableCell colSpan={ props.valFlag ? 7 : 6 }
                                                                   css={ tableDataStyle }>
                                                            <InfeedAd/>
                                                        </TableCell>
                                                    </TableRow>
                                                }
                                                <SearchListBody enchant={ enchant } valFlg={ props.valFlag }
                                                                key={ enchant.enchant_id }/>
                                                { index == props.rowData.length - 1 &&
                                                    <TableRow css={ tableContentStyle } key={ 'lastPc' }>
                                                        <TableCell colSpan={ props.valFlag ? 7 : 6 }
                                                                   css={ tableDataStyle }>
                                                            <InfeedAd/>
                                                        </TableCell>
                                                    </TableRow>
                                                }
                                            </>
                                        ) )
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <Pagination
                        count={ props.count }
                        page={ props.page } setPage={ props.setPage }
                        rowsPerPage={ rowsPerPage } setRowsPerPage={ setRowsPerPage }
                    />
                </Box>
            </Grid>
        </>
    );
}
import TableBody from "@mui/material/TableBody";
import { TableCell, TableRow } from "@mui/material";
import { InfeedAd } from "../../adsense/infeedAd";
import { SearchListRow } from "./searchListRow";
import { EnchantData } from "../common/interface/enchantData";
import { Order } from "./type/order";
import { HeadData } from "./interface/headData";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

/**
 * PC版検索一覧の本体部分コンテナ
 * @param props { Order, keyof HeadData, number, Array<EnchantData>, number, boolean }
 * @returns { JSX.Element }
 */
export const SearchListBody = ( props: {
    order: Order,
    orderBy: keyof HeadData,
    page: number,
    rowData: Array<EnchantData>,
    rowsPerPage: number,
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

    /**
     * @param array { readonly T[] }
     * @param comparator { (a: T, b: T) => number }
     */
    function stableSort<T>(
        array: readonly T[],
        comparator: ( a: T, b: T ) => number ) {
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

    /**
     * @param a { T }
     * @param b { T }
     * @param orderBy { keyof T }
     */
    function descendingComparator<T>( a: T, b: T, orderBy: keyof T ) {
        if ( b[orderBy] < a[orderBy] ) {
            return -1;
        }
        if ( b[orderBy] > a[orderBy] ) {
            return 1;
        }
        return 0;
    }

    /**
     * @param order { Order }
     * @param orderBy { Key }
     */
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

    return (
        <TableBody>
            { stableSort( props.rowData, getComparator( props.order, props.orderBy ) )
                .slice( props.page * props.rowsPerPage, props.page * props.rowsPerPage + props.rowsPerPage )
                .map( ( enchant, index ) => (
                    <>
                        { index != 0 && index % 5 == 0 &&
                            <TableRow
                                css={ tableContentStyle }
                                key={ index }
                            >
                                <TableCell
                                    colSpan={ props.valFlag ? 7 : 6 }
                                    css={ tableDataStyle }
                                >
                                    <InfeedAd/>
                                </TableCell>
                            </TableRow>
                        }
                        <SearchListRow
                            enchant={ enchant }
                            key={ enchant.enchant_id }
                            valFlg={ props.valFlag }
                        />
                        { index == props.rowData.length - 1 &&
                            <TableRow
                                css={ tableContentStyle }
                                key={ 'lastPc' }
                            >
                                <TableCell
                                    colSpan={ props.valFlag ? 7 : 6 }
                                    css={ tableDataStyle }
                                >
                                    <InfeedAd/>
                                </TableCell>
                            </TableRow>
                        }
                    </>
                ) ) }
        </TableBody>
    );
}
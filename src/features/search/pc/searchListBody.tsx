/* eslint @typescript-eslint/no-explicit-any: 0 */
import TableBody from "@mui/material/TableBody";
import { TableCell, TableRow } from "@mui/material";
import { InfeedAd } from "../../../adsense/infeedAd";
import { SearchListRow } from "./searchListRow";
import { Order } from "./type/order";
/** @jsxImportSource @emotion/react */
import { tableContentStyle, tableDataStyle } from "./style/searchListBodyStyle";
import { useOrderContext } from "../context/useOrderContext";
import { usePageContext } from "../context/usePageContext";
import { useEnchantContext } from "../context/useEnchantContext";

/**
 * PC版検索一覧の本体部分コンテナ
 * @param props { Array<EnchantData>, number, boolean }
 * @returns { JSX.Element }
 */
export const SearchListBody = (props: {
    rowsPerPage: number,
}) => {
    const enchantContext = useEnchantContext();
    const pageContext = usePageContext();
    const orderContext = useOrderContext();
    /**
     * @param array { readonly T[] }
     * @param comparator { (a: T, b: T) => number }
     */
    function stableSort<T>(
        array: readonly T[],
        comparator: (a: T, b: T) => number) {
        const stabilizedThis = array.map((el, index) => [ el, index ] as [ T, number ]);
        stabilizedThis.sort((a, b) => {
            const order = comparator(a[0], b[0]);
            if ( order !== 0 ) {
                return order;
            }
            return a[1] - b[1];
        });
        return stabilizedThis.map((el) => el[0]);
    }

    /**
     * @param a { T }
     * @param b { T }
     * @param orderBy { keyof T }
     */
    function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
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
            ? (a, b) => descendingComparator(a, b, orderBy)
            : (a, b) => -descendingComparator(a, b, orderBy);
    }

    return (
        <TableBody>
            {stableSort(enchantContext.rowData, getComparator(orderContext.order, orderContext.orderBy))
                .slice(pageContext.page * props.rowsPerPage, pageContext.page * props.rowsPerPage + props.rowsPerPage)
                .map((enchant, index) => (
                    <>
                        {index != 0 && index % 5 == 0 &&
                            <TableRow
                                css={tableContentStyle}
                                key={index}
                            >
                                <TableCell
                                    colSpan={enchant.disp_val ? 7 : 6}
                                    css={tableDataStyle}
                                >
                                    <InfeedAd/>
                                </TableCell>
                            </TableRow>
                        }
                        <SearchListRow
                            enchant={enchant}
                            key={enchant.enchant_id}
                        />
                        {index == enchantContext.rowData.length - 1 && process.env.NODE_ENV === 'production' &&
                            <TableRow
                                css={tableContentStyle}
                                key={'lastPc'}
                            >
                                <TableCell
                                    colSpan={enchant.disp_val ? 7 : 6}
                                    css={tableDataStyle}
                                >
                                    <InfeedAd/>
                                </TableCell>
                            </TableRow>
                        }
                    </>
                ))}
        </TableBody>
    );
};
import { EnchantData } from "../../common/interface/enchantData";
import { HeadData } from "../type/HeadData";
import { Order } from "../type/Order";

export const stableSort = (array: Array<EnchantData>, comparator: (a: EnchantData, b: EnchantData) => number) => {
    const stabilizedThis = array.map((el, index) => [ el, index ] as [ EnchantData, number ]);
    stabilizedThis.sort((a, b) => comparator(a[0], b[0]));

    return stabilizedThis.map((el) => el[0]);
};

export const getComparator = (order: Order, orderBy: keyof HeadData) => {
    return order === "desc"
    ? (a:EnchantData, b:EnchantData) => descendingComparator(a, b, orderBy)
    : (a:EnchantData, b:EnchantData) => -descendingComparator(a, b, orderBy);
};

const descendingComparator = (a: EnchantData, b: EnchantData, orderBy: keyof HeadData) => {
    if ( b[orderBy] < a[orderBy] ) {
        return -1;
    }
    if ( b[orderBy] > a[orderBy] ) {
        return 1;
    }
    return 0;
};
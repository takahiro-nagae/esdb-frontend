import { Meta, StoryObj } from "@storybook/react";
import { SearchListBody } from "../SearchListBody";
import { Dummy1, Dummy1NotDispVal, Dummy2, Dummy2NotDispVal } from "../data/SearchListMockData";
import { OrderContext } from "../../context/pc/OrderContext";
import { PageContext } from "../../context/PageContext";

export default {
    title: 'search/pc/SearchListBody',
    component: SearchListBody,
    decorators: [
        (Story) => {
            return (
                <table>
                    <OrderContext.Provider
                        value={{
                            order: 'asc',
                            setOrder: () => {},
                            orderBy: 'enchant_name',
                            setOrderBy: () => {},
                        }}
                    >
                        <PageContext.Provider value={{ page: 0, setPage: () => {}}}>
                            <Story />
                        </PageContext.Provider>
                    </OrderContext.Provider>
                </table>
            );
        }
    ],
} as Meta<typeof SearchListBody>;

export const EnchantNameAsc: StoryObj<typeof SearchListBody> = {
    args: {
        rowData: [Dummy1, Dummy2],
        rowsPerPage: 2,
    }
};

export const EnchantNameDesc: StoryObj<typeof SearchListBody> = {
    args: {
        rowData: [Dummy1, Dummy2],
        rowsPerPage: 2,
    },
    decorators: [
        (Story) => {
            return (
                <OrderContext.Provider
                    value={{
                        order: 'desc',
                        setOrder: () => {},
                        orderBy: 'enchant_name',
                        setOrderBy: () => {},
                    }}>
                        <Story />
                </OrderContext.Provider>
            );
        }
    ]
};

export const NotValEnchantNameAsc: StoryObj<typeof SearchListBody> = {
    args: {
        rowData: [Dummy1NotDispVal, Dummy2NotDispVal],
        rowsPerPage: 2,
    }
};

export const SameSortValue: StoryObj<typeof SearchListBody> = {
    args: {
        rowData: [Dummy1, Dummy2],
        rowsPerPage: 2,
    },
    decorators: [
        (Story) => {
            return (
                <OrderContext.Provider
                    value={{
                        order: 'desc',
                        setOrder: () => {},
                        orderBy: 'rank',
                        setOrderBy: () => {},
                    }}>
                        <Story />
                </OrderContext.Provider>
            );
        }
    ]
};

export const DispRowPerPage1: StoryObj<typeof SearchListBody> = {
    args: {
        rowData: [Dummy1, Dummy2],
        rowsPerPage: 1,
    },
};

export const DispRowPerPage2: StoryObj<typeof SearchListBody> = {
    args: {
        rowData: [Dummy1, Dummy2],
        rowsPerPage: 1,
    },
    decorators: [
        (Story) => {
            return (
                <PageContext.Provider value={{ page: 1, setPage: () => {}}}>
                    <Story />
                </PageContext.Provider>
            );
        }
    ],
};

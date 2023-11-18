import { createContext } from 'react';

type RowsPerPageContext = {
  rowsPerPage: number;
  setRowsPerPage: (rowsPerPage: number) => void;
};

export const RowsPerPageContext = createContext<RowsPerPageContext>({} as RowsPerPageContext);

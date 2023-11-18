import { useContext } from 'react';
import { RowsPerPageContext } from './RowsPerPageContext';

export const useRowsPerPageContext = () => useContext(RowsPerPageContext);
import { createContext } from 'react';

type PageContext = {
  page : number;
  setPage : (page: number) => void;
};

export const PageContext = createContext<PageContext>({} as PageContext);

import { usePageContext } from '@/features/Search/context/usePageContext';

export const usePagination = (
  setRowsPerPage: (rowsPerPage: number) => void,
) => {
  const pageContext = usePageContext();

  /** ページ変更 */
  const handleChangePage = (newPage: number) => {
    pageContext.setPage(newPage);
  };

  /** ページに表示する件数の変更 */
  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setRowsPerPage(+event.target.value);
    pageContext.setPage(0);
  };

  return {
    pageContext,
    handleChangePage,
    handleChangeRowsPerPage,
  };
};

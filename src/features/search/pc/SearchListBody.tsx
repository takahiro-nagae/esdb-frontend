import TableBody from '@mui/material/TableBody';
import { SearchListRow } from './SearchListRow';
import { useOrderContext } from '../context/pc/useOrderContext';
import { usePageContext } from '../context/usePageContext';
import { getComparator, stableSort } from './function/searchListBodyFunction';
import { AmongAd } from './component/Ads/AmoungAd';
import { LastInfeedAd } from './component/Ads/LastInfeedAd';
import { EnchantData } from '@/repositories/search/_types';

/**
 * PC版検索一覧の本体部分コンテナ
 * @param props { Array<EnchantData>, number, boolean }
 * @returns { JSX.Element }
 */
export const SearchListBody = (props: {
  rowData: Array<EnchantData>;
  rowsPerPage: number;
}) => {
  const pageContext = usePageContext();
  const orderContext = useOrderContext();

  const sliceFrom = pageContext.page * props.rowsPerPage;
  const sliceTo = sliceFrom + props.rowsPerPage;

  return (
    <TableBody>
      {stableSort(
        props.rowData,
        getComparator(orderContext.order, orderContext.orderBy),
      )
        .slice(sliceFrom, sliceTo)
        .map((enchant, index) => (
          <>
            <AmongAd index={index} disp_val={enchant.disp_val} />
            <SearchListRow enchant={enchant} key={enchant.enchant_id} />
            <LastInfeedAd
              index={index}
              dataLength={props.rowData.length}
              disp_val={enchant.disp_val}
            />
          </>
        ))}
    </TableBody>
  );
};

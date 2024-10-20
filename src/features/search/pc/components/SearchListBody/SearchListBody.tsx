import TableBody from '@mui/material/TableBody';
import { EnchantData } from '@/repositories/search/_types';
import { usePageContext } from '@/features/search/context/usePageContext';
import { useOrderContext } from '@/features/search/context/pc/useOrderContext';
import { getComparator, stableSort } from './functions/searchListBodyFunction';
import { AmongAd } from './components/Ads/AmoungAd';
import { Row } from './components/Row/Row';
import { LastInfeedAd } from './components/Ads/LastInfeedAd';

type SearchListBodyProps = {
  rowData: Array<EnchantData>;
  rowsPerPage: number;
};

export const SearchListBody: React.FC<SearchListBodyProps> = ({
  rowData,
  rowsPerPage,
}) => {
  const pageContext = usePageContext();
  const orderContext = useOrderContext();

  const sliceFrom = pageContext.page * rowsPerPage;
  const sliceTo = sliceFrom + rowsPerPage;

  return (
    <TableBody>
      {stableSort(
        rowData,
        getComparator(orderContext.order, orderContext.orderBy),
      )
        .slice(sliceFrom, sliceTo)
        .map((enchant, index) => (
          <>
            <AmongAd index={index} disp_val={enchant.disp_val} />
            <Row enchant={enchant} key={enchant.enchant_id} />
            <LastInfeedAd
              index={index}
              dataLength={rowData.length}
              disp_val={enchant.disp_val}
            />
          </>
        ))}
    </TableBody>
  );
};

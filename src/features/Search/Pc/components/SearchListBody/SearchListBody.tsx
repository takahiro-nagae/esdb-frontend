import TableBody from '@mui/material/TableBody';

import { AmongAd } from './components/Ads/AmoungAd';
import { LastInfeedAd } from './components/Ads/LastInfeedAd';
import { Row } from './components/Row/Row';
import { getComparator, stableSort } from './functions/searchListBodyFunction';

import { useOrderContext } from '@/features/Search/context/pc/useOrderContext';
import { usePageContext } from '@/features/Search/context/usePageContext';
import { EnchantData } from '@/repositories/search/_types';

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

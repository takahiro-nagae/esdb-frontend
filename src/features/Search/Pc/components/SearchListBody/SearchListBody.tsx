import TableBody from '@mui/material/TableBody';

import { AmongAd } from './components/Ads/AmoungAd';
import { LastInfeedAd } from './components/Ads/LastInfeedAd';
import { Row } from './components/Row/Row';
import { getComparator, stableSort } from './functions/searchListBodyFunction';

import { useEnchantStore } from '@/features/Search/state/useEnchantStore';
import { usePcLayoutStore } from '@/features/Search/state/usePcLayoutStore';

type SearchListBodyProps = {
  rowsPerPage: number;
};

export const SearchListBody: React.FC<SearchListBodyProps> = ({
  rowsPerPage,
}) => {
  const { page } = usePcLayoutStore();
  const { enchants, enchantsLength } = useEnchantStore();
  const { order, orderBy } = usePcLayoutStore();

  const sliceFrom = page * rowsPerPage;
  const sliceTo = sliceFrom + rowsPerPage;

  return (
    <TableBody>
      {stableSort(enchants, getComparator(order, orderBy))
        .slice(sliceFrom, sliceTo)
        .map((enchant, index) => (
          <>
            <AmongAd index={index} disp_val={enchant.disp_val} />
            <Row enchant={enchant} key={enchant.enchant_id} />
            <LastInfeedAd
              index={index}
              dataLength={enchantsLength}
              disp_val={enchant.disp_val}
            />
          </>
        ))}
    </TableBody>
  );
};

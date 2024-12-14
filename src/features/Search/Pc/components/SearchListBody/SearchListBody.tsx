import TableBody from '@mui/material/TableBody';

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
  const { enchants } = useEnchantStore();
  const { order, orderBy } = usePcLayoutStore();

  const sliceFrom = page * rowsPerPage;
  const sliceTo = sliceFrom + rowsPerPage;

  return (
    <TableBody>
      {stableSort(enchants, getComparator(order, orderBy))
        .slice(sliceFrom, sliceTo)
        .map((enchant, index) => (
          <Row enchant={enchant} key={enchant.enchant_id} index={index} />
        ))}
      <LastInfeedAd disp_val={enchants[0].disp_val} />
    </TableBody>
  );
};

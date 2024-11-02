import {
  Box,
  Collapse,
  Table,
  TableBody,
  TableCell,
  TableRow,
} from '@material-ui/core';

import { DetailModal } from '../../../../../common/components/Detail/Modal/DetailModal';
import { EffectList } from '../../../../../common/components/EffectList/EffectList';
import { RouteList } from '../../../../../common/components/RouteList/RouteList';

import styles from './DetailTable.module.css';

import { EnchantData } from '@/repositories/search/_types';

type DetailTableProps = {
  enchant: EnchantData;
  isOpen: boolean;
};

export const DetailTable: React.FC<DetailTableProps> = ({
  enchant,
  isOpen,
}) => {
  const omtCount = 3;
  const routeNames = enchant.route_name ? enchant.route_name.split('@') : [];

  return (
    <Collapse in={isOpen} timeout='auto' unmountOnExit>
      <Box sx={{ paddingBottom: 10 }}>
        <p className={styles.target}>対象：{enchant.target_name}</p>
        <Table size='small'>
          <TableBody>
            <TableRow>
              <TableCell className={styles.acoHead}>効果</TableCell>
              <TableCell className={styles.acoBody}>
                <EffectList
                  effectKbn={enchant.effect_kbn}
                  effectName={enchant.effect_name}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className={styles.acoHead}>入手先</TableCell>
              <TableCell className={styles.acoBody}>
                <RouteList routeNames={routeNames} omtCount={omtCount} />
                <DetailModal
                  count={routeNames.length - omtCount}
                  data-testid='routeModal'
                  enchant={enchant}
                />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Box>
    </Collapse>
  );
};

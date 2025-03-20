import {
  Box,
  Collapse,
  Table,
  TableBody,
  TableCell,
  TableRow,
} from '@mui/material';

import { DetailModal } from '../../../../../common/components/Detail/Modal/DetailModal';
import { EffectList } from '../../../../../common/components/EffectList/EffectList';
import { RouteList } from '../../../../../common/components/RouteList/RouteList';

import styles from './DetailTable.module.css';

import { GetEnchantDetailsQuery } from '@/repositories/generated/graphql';

type DetailTableProps = {
  enchant: GetEnchantDetailsQuery['details']['enchants'][number];
  isOpen: boolean;
};

export const DetailTable: React.FC<DetailTableProps> = ({
  enchant,
  isOpen,
}) => {
  const omtCount = 3;

  return (
    <Collapse in={isOpen} timeout='auto' unmountOnExit>
      <Box sx={{ paddingBottom: 10 }}>
        <p className={styles.target}>対象：{enchant.target}</p>
        <Table size='small'>
          <TableBody>
            <TableRow>
              <TableCell className={styles.acoHead}>効果</TableCell>
              <TableCell className={styles.acoBody}>
                <EffectList effects={enchant.effect} />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className={styles.acoHead}>入手先</TableCell>
              <TableCell className={styles.acoBody}>
                <RouteList routeNames={enchant.route} omtCount={omtCount} />
                <DetailModal
                  count={enchant.route.length - omtCount}
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

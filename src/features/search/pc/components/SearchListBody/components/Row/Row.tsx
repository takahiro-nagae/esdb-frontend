import { TableCell, TableRow } from '@material-ui/core';

import { EnchantData } from '@/repositories/search/_types';
import { InvalidText } from '@/features/search/common/components/ImvalidText/InvalidText';
import { ImpText } from '@/features/search/common/components/ImpText/ImpText';
import { EffectList } from '@/features/search/common/components/EffectList/EffectList';
import { RouteList } from '@/features/search/common/components/RouteList/RouteList';
import { DetailModal } from '@/features/search/common/components/Detail/Modal/DetailModal';
import {
  createEnchantName,
  createEnchantNameEn,
} from '@/features/search/common/functions/enchantNameFunction';
import { positionName } from '@/features/search/common/functions/positionFunction';
import { RankModal } from '@/features/search/common/components/Rank/Modal/RankModal';
import styles from './Row.module.css';
import enchantNameStyles from '../../../../../common/styles/EnchantName.module.css';
import positionStyles from '../../../../../common/styles/Position.module.css';

type RowProps = {
  enchant: EnchantData;
};

export const Row: React.FC<RowProps> = ({ enchant }) => {
  const omtCount = 3;
  const routeNames = enchant.route_name ? enchant.route_name.split('@') : [];

  return (
    <TableRow className={styles.tableContent}>
      <TableCell>
        <span data-testid='enchantName'>
          {createEnchantName(enchant.enchant_name, enchant.enchant_name_2)}
        </span>
        <InvalidText invalidTargetFlg={enchant.invalid_target_flg} />
        <ImpText impFlg={enchant.imp_flg} />
        <br />
        <small
          className={enchantNameStyles.subTitleStyle}
          data-testid='enchantNameEn'
        >
          {createEnchantNameEn(enchant.enchant_name_en, enchant.position_id)}
        </small>
      </TableCell>
      <TableCell
        className={
          enchant.position_id === '1'
            ? positionStyles.prefix
            : positionStyles.suffix
        }
      >
        {positionName(enchant.position_id)}
      </TableCell>
      <TableCell>
        <RankModal rank={enchant.rank} />
      </TableCell>
      <TableCell>{enchant.target_name}</TableCell>
      {enchant.disp_val && (
        <TableCell data-testid='dispVal'>{enchant.disp_val}</TableCell>
      )}
      <TableCell>
        <EffectList
          effectKbn={enchant.effect_kbn}
          effectName={enchant.effect_name}
        />
      </TableCell>
      <TableCell>
        <RouteList routeNames={routeNames} omtCount={omtCount} />
        <DetailModal
          count={routeNames.length - omtCount}
          data-testid='routeModal'
          enchant={enchant}
        />
      </TableCell>
    </TableRow>
  );
};

import { TableCell, TableRow } from '@material-ui/core';

import enchantNameStyles from '../../../../../common/styles/EnchantName.module.css';
import positionStyles from '../../../../../common/styles/Position.module.css';

import styles from './Row.module.css';

import { DetailModal } from '@/features/Search/common/components/Detail/Modal/DetailModal';
import { EffectList } from '@/features/Search/common/components/EffectList/EffectList';
import { ImpText } from '@/features/Search/common/components/ImpText/ImpText';
import { InvalidText } from '@/features/Search/common/components/ImvalidText/InvalidText';
import { RankModal } from '@/features/Search/common/components/Rank/Modal/RankModal';
import { RouteList } from '@/features/Search/common/components/RouteList/RouteList';
import {
  createEnchantName,
  createEnchantNameEn,
} from '@/features/Search/common/functions/enchantNameFunction';
import { positionName } from '@/features/Search/common/functions/positionFunction';
import { EnchantData } from '@/repositories/search/_types';

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

import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import { IconButton, TableCell, TableRow } from '@mui/material';

import enchantNameStyles from '../../../../../common/styles/EnchantName.module.css';
import positionStyles from '../../../../../common/styles/Position.module.css';
import { AmongAd } from '../Ads/AmoungAd';

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
import { isFavorite, useBookmarkState } from '@/state/useBookmarkState';

type RowProps = {
  enchant: EnchantData;
  index: number;
};

export const Row: React.FC<RowProps> = ({ enchant, index }) => {
  const omtCount = 3;
  const routeNames = enchant.route_name ? enchant.route_name.split('@') : [];
  const { pushEnchant, removeEnchant } = useBookmarkState();

  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({
      id: enchant.enchant_id,
    });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <>
      <AmongAd index={index} disp_val={enchant.disp_val} />
      <TableRow
        className={styles.tableContent}
        {...listeners}
        {...attributes}
        ref={setNodeRef}
        style={style}
        data-testid='enchantRow'
      >
        <TableCell>
          {isFavorite(enchant.enchant_id) ? (
            <IconButton onClick={() => removeEnchant(enchant.enchant_id)}>
              <BookmarkIcon
                onClick={() => removeEnchant(enchant.enchant_id)}
                color='info'
              />
            </IconButton>
          ) : (
            <IconButton onClick={() => pushEnchant(enchant)}>
              <BookmarkBorderOutlinedIcon
                onClick={() => pushEnchant(enchant)}
              />
            </IconButton>
          )}
        </TableCell>
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
    </>
  );
};

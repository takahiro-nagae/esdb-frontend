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
  Enchant,
  useEnchantStore,
} from '@/features/Search/state/useEnchantStore';
import { isFavorite, useBookmarkState } from '@/state/useBookmarkState';

type RowProps = {
  enchant: Enchant;
  index: number;
};

export const Row: React.FC<RowProps> = ({ enchant, index }) => {
  const omtCount = 3;
  const { pushEnchant, removeEnchant } = useBookmarkState();

  const { effectName } = useEnchantStore();

  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({
      id: enchant.id,
    });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <>
      <AmongAd index={index} isValue={!!effectName} />
      <TableRow
        className={styles.tableContent}
        {...listeners}
        {...attributes}
        ref={setNodeRef}
        style={style}
        data-testid='enchantRow'
      >
        <TableCell>
          {isFavorite(enchant.id) ? (
            <IconButton onClick={() => removeEnchant(enchant.id)}>
              <BookmarkIcon color='info' />
            </IconButton>
          ) : (
            <IconButton onClick={() => pushEnchant(enchant)}>
              <BookmarkBorderOutlinedIcon />
            </IconButton>
          )}
        </TableCell>
        <TableCell>
          <span data-testid='enchantName'>{enchant.name}</span>
          <InvalidText isInvalidTarget={enchant.isInvalidTarget} />
          <ImpText isImp={enchant.isImp} />
          <br />
          <small
            className={enchantNameStyles.subTitleStyle}
            data-testid='enchantNameEn'
          >
            {enchant.nameEn}
          </small>
        </TableCell>
        <TableCell
          className={
            enchant.position === '1'
              ? positionStyles.prefix
              : positionStyles.suffix
          }
        >
          {enchant.positionName}
        </TableCell>
        <TableCell>
          <RankModal rank={enchant.rank} />
        </TableCell>
        <TableCell>{enchant.target}</TableCell>
        {effectName && (
          <TableCell data-testid='dispVal'>{enchant.value}</TableCell>
        )}
        <TableCell>
          <EffectList effects={enchant.effect} />
        </TableCell>
        <TableCell>
          <RouteList routeNames={enchant.route} omtCount={omtCount} />
          <DetailModal
            count={enchant.route.length - omtCount}
            data-testid='routeModal'
            enchant={enchant}
          />
        </TableCell>
      </TableRow>
    </>
  );
};

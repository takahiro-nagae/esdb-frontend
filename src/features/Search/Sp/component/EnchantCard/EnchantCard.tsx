import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import { IconButton } from '@mui/material';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { useState } from 'react';

import { ImpText } from '../../../common/components/ImpText/ImpText';
import { InvalidText } from '../../../common/components/ImvalidText/InvalidText';
import { RankModal } from '../../../common/components/Rank/Modal/RankModal';
import enchantNameStyles from '../../../common/styles/EnchantName.module.css';
import positionStyles from '../../../common/styles/Position.module.css';

import styles from './EnchantCard.module.css';
import { AccordionButton } from './component/AccordionButton/AccordionButton';
import { DetailTable } from './component/DetailTable/DetailTable';

import { useEnchantStore } from '@/features/Search/state/useEnchantStore';
import { GetEnchantDetailsQuery } from '@/repositories/generated/graphql';
import { isFavorite, useBookmarkState } from '@/state/useBookmarkState';

type EnchantCardProps = {
  enchant: GetEnchantDetailsQuery['details']['enchants'][number];
};

export const EnchantCard: React.FC<EnchantCardProps> = ({ enchant }) => {
  const [open, setOpen] = useState(false);
  const { pushEnchant, removeEnchant } = useBookmarkState();
  const { effectName } = useEnchantStore();

  return (
    <Card className={styles.enchantCard}>
      <Box className={styles.cardBox}>
        {isFavorite(enchant.id) ? (
          <IconButton onClick={() => removeEnchant(enchant.id)}>
            <BookmarkIcon
              onClick={() => removeEnchant(enchant.id)}
              color='info'
            />
          </IconButton>
        ) : (
          <IconButton onClick={() => pushEnchant(enchant)}>
            <BookmarkBorderOutlinedIcon onClick={() => pushEnchant(enchant)} />
          </IconButton>
        )}
        <Box>
          <Typography className={styles.title}>
            <span data-testid='enchantName'>{enchant.name}</span>
            <InvalidText isInvalidTarget={enchant.isInvalidTarget} />
            <ImpText isImp={true} />
          </Typography>
          <Typography
            className={enchantNameStyles.subTitleStyle}
            data-testid='enchantNameEn'
          >
            {enchant.nameEn}
          </Typography>
          <div>
            <Typography
              className={
                enchant.position === '1'
                  ? positionStyles.prefix
                  : positionStyles.suffix
              }
              data-testid='position'
              style={{ display: 'inline' }}
            >
              {enchant.positionName}
            </Typography>
            <Typography className={styles.inline}>
              <small>ランク</small>
            </Typography>
            <RankModal rank={enchant.rank} />
          </div>
        </Box>
        <Box>
          {effectName && (
            <p className={styles.value} data-testid='dispVal'>
              {enchant.value}
            </p>
          )}
        </Box>
        <Box className={styles.accordionButton}>
          <AccordionButton open={open} setOpen={setOpen} />
        </Box>
      </Box>
      <DetailTable enchant={enchant} isOpen={open} />
    </Card>
  );
};

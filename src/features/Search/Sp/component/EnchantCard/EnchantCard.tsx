import { IconButton } from '@material-ui/core';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { useState } from 'react';

import { ImpText } from '../../../common/components/ImpText/ImpText';
import { InvalidText } from '../../../common/components/ImvalidText/InvalidText';
import { RankModal } from '../../../common/components/Rank/Modal/RankModal';
import {
  createEnchantName,
  createEnchantNameEn,
} from '../../../common/functions/enchantNameFunction';
import { positionName } from '../../../common/functions/positionFunction';
import enchantNameStyles from '../../../common/styles/EnchantName.module.css';
import positionStyles from '../../../common/styles/Position.module.css';

import styles from './EnchantCard.module.css';
import { AccordionButton } from './component/AccordionButton/AccordionButton';
import { DetailTable } from './component/DetailTable/DetailTable';

import { EnchantData } from '@/repositories/search/_types';
import { isFavorite, useBookmarkState } from '@/state/useBookmarkState';

type EnchantCardProps = {
  enchant: EnchantData;
};

export const EnchantCard: React.FC<EnchantCardProps> = ({ enchant }) => {
  const [open, setOpen] = useState(false);
  const { pushEnchant, removeEnchant } = useBookmarkState();

  return (
    <Card className={styles.enchantCard}>
      <Box className={styles.cardBox}>
        {isFavorite(enchant.enchant_id) ? (
          <IconButton onClick={() => removeEnchant(enchant.enchant_id)}>
            <BookmarkIcon
              onClick={() => removeEnchant(enchant.enchant_id)}
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
            <span data-testid='enchantName'>
              {createEnchantName(enchant.enchant_name, enchant.enchant_name_2)}
            </span>
            <InvalidText invalidTargetFlg={enchant.invalid_target_flg} />
            <ImpText impFlg={enchant.imp_flg} />
          </Typography>
          <Typography
            className={enchantNameStyles.subTitleStyle}
            data-testid='enchantNameEn'
          >
            {createEnchantNameEn(enchant.enchant_name_en, enchant.position_id)}
          </Typography>
          <div>
            <Typography
              className={
                enchant.position_id === '1'
                  ? positionStyles.prefix
                  : positionStyles.suffix
              }
              data-testid='position'
              style={{ display: 'inline' }}
            >
              {positionName(enchant.position_id)}
            </Typography>
            <Typography className={styles.inline}>
              <small>ランク</small>
            </Typography>
            <RankModal rank={enchant.rank} />
          </div>
        </Box>
        <Box>
          {enchant.disp_val && (
            <p className={styles.value} data-testid='dispVal'>
              {enchant.disp_val}
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

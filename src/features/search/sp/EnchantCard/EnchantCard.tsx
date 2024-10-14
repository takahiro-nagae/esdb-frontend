/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import {
  positionColor,
  positionName,
} from '../../common/functions/positionFunction';
import { RankModal } from '../../common/component/Rank/Modal/RankModal';
import {
  createEnchantName,
  createEnchantNameEn,
  subTitleStyle,
} from '../../common/functions/enchantNameFunction';
import { InvalidText } from '../../common/component/ImvalidText/InvalidText';
import { ImpText } from '../../common/component/ImpText/ImpText';
import {
  cardBox,
  enchantCard,
  inline,
  title,
  value,
} from './style/EnchantCardStyle';
import { DetailTable } from './component/DetailTable/DetailTable';
import { AccordionButton } from './component/AccordionButton/AccordionButton';
import { EnchantData } from '@/repositories/search/_types';

/**
 * エンチャントカードコンポーネント
 * @param props { EnchantData }
 * @returns { JSX.Element }
 */
export const EnchantCard = (props: { enchant: EnchantData }) => {
  const [open, setOpen] = useState(false);

  return (
    <Card css={enchantCard}>
      <Box css={cardBox}>
        <Box>
          <Typography css={title}>
            <span data-testid='enchantName'>
              {createEnchantName(
                props.enchant.enchant_name,
                props.enchant.enchant_name_2,
              )}
            </span>
            <InvalidText invalidTargetFlg={props.enchant.invalid_target_flg} />
            <ImpText impFlg={props.enchant.imp_flg} />
          </Typography>
          <Typography css={subTitleStyle} data-testid='enchantNameEn'>
            {createEnchantNameEn(
              props.enchant.enchant_name_en,
              props.enchant.position_id,
            )}
          </Typography>
          <div>
            <Typography
              css={positionColor(props.enchant.position_id)}
              data-testid='position'
              style={{ display: 'inline' }}
            >
              {positionName(props.enchant.position_id)}
            </Typography>
            <Typography css={inline}>
              <small>ランク</small>
            </Typography>
            <RankModal rank={props.enchant.rank} />
          </div>
        </Box>
        <Box>
          {props.enchant.disp_val && (
            <p css={value} data-testid='dispVal'>
              {props.enchant.disp_val}
            </p>
          )}
        </Box>
        <Box>
          <AccordionButton open={open} setOpen={setOpen} />
        </Box>
      </Box>
      <DetailTable enchant={props.enchant} isOpen={open} />
    </Card>
  );
};

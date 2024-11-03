import { Table, TableBody, TableCell, TableRow } from '@mui/material';

import {
  createEnchantName,
  createEnchantNameEn,
} from '../../functions/enchantNameFunction';
import { positionName } from '../../functions/positionFunction';
import enchantNameStyles from '../../styles/EnchantName.module.css';
import positionStyles from '../../styles/Position.module.css';
import effectListStyles from '../EffectList/EffectList.module.css';
import { RankModal } from '../Rank/Modal/RankModal';

import styles from './Detail.module.css';

import { DisplayWideAd } from '@/adsense/DisplayWideAd';
import { EnchantDataDetail } from '@/repositories/search/_types';

type DetailProps = {
  enchant: EnchantDataDetail;
};

export const Detail: React.FC<DetailProps> = ({ enchant }) => {
  const effectKbnArray = enchant.effect_kbn
    ? enchant.effect_kbn.split('@')
    : [];
  const effectNameArray = enchant.effect_name
    ? enchant.effect_name.split('@')
    : [];
  const routeNameArray = enchant.route_name
    ? enchant.route_name.split('@')
    : [];

  return (
    <>
      <Table size='small'>
        <TableBody>
          <TableRow>
            <TableCell className={styles.header}>名称</TableCell>
            <TableCell className={styles.body}>
              <span>
                {createEnchantName(
                  enchant.enchant_name,
                  enchant.enchant_name_2,
                )}
              </span>
              <br />
              <small className={enchantNameStyles.subTitleStyle}>
                {createEnchantNameEn(
                  enchant.enchant_name_en,
                  enchant.position_id,
                )}
              </small>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className={styles.header}>位置</TableCell>
            <TableCell className={styles.body}>
              <span
                className={
                  enchant.position_id === '1'
                    ? positionStyles.prefix
                    : positionStyles.suffix
                }
              >
                {positionName(enchant.position_id)}
              </span>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className={styles.header}>ランク</TableCell>
            <TableCell className={styles.body}>
              <RankModal rank={enchant.rank} />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className={styles.header}>効果</TableCell>
            <TableCell className={styles.body}>
              {effectKbnArray &&
                effectKbnArray.map((effectKbn, index) => (
                  <p className={effectListStyles[`${effectKbn}`]} key={index}>
                    {effectNameArray[index]}
                  </p>
                ))}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className={styles.header}>入手先</TableCell>
            <TableCell className={styles.body}>
              {routeNameArray &&
                routeNameArray.map((route, index) => (
                  <p dangerouslySetInnerHTML={{ __html: route }} key={index} />
                ))}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <DisplayWideAd />
    </>
  );
};

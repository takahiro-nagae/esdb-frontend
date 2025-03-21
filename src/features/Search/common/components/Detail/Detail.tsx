import { Table, TableBody, TableCell, TableRow } from '@mui/material';

import enchantNameStyles from '../../styles/EnchantName.module.css';
import positionStyles from '../../styles/Position.module.css';
import effectListStyles from '../EffectList/EffectList.module.css';
import { RankModal } from '../Rank/Modal/RankModal';

import styles from './Detail.module.css';

import { DisplayWideAd } from '@/adsense/DisplayWideAd';
import { Enchant } from '@/features/Search/state/useEnchantStore';

type DetailProps = {
  enchant: Enchant;
};

export const Detail: React.FC<DetailProps> = ({ enchant }) => {
  const effects = enchant.effect;
  const routes = enchant.route;
  return (
    <>
      <Table size='small'>
        <TableBody>
          <TableRow>
            <TableCell className={styles.header}>名称</TableCell>
            <TableCell className={styles.body}>
              <span>{enchant.name}</span>
              <br />
              <small className={enchantNameStyles.subTitleStyle}>
                {enchant.nameEn}
              </small>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className={styles.header}>位置</TableCell>
            <TableCell className={styles.body}>
              <span
                className={
                  enchant.position === '1'
                    ? positionStyles.prefix
                    : positionStyles.suffix
                }
              >
                {enchant.positionName}
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
              {effects &&
                effects.map((effect, index) => (
                  <p
                    className={effectListStyles[`${effect?.type}`]}
                    key={index}
                  >
                    {effect?.name}
                  </p>
                ))}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className={styles.header}>入手先</TableCell>
            <TableCell className={styles.body}>
              {routes &&
                routes.map((route, index) => (
                  <p
                    dangerouslySetInnerHTML={{ __html: route || '' }}
                    key={index}
                  />
                ))}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <DisplayWideAd />
    </>
  );
};

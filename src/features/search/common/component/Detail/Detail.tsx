/** @jsxImportSource @emotion/react */
import { Table, TableBody, TableCell, TableRow } from '@mui/material';
import effectColorFunction from '../../functions/effectColorFunction';
import {
  createEnchantName,
  createEnchantNameEn,
  subTitleStyle,
} from '../../functions/enchantNameFunction';
import { positionColor, positionName } from '../../functions/positionFunction';
import { RankModal } from '../Rank/Modal/RankModal';
import { DisplayWideAd } from '../../../../../adsense/displayWideAd';
import { body, header } from './style/DetailStyle';
import { EnchantData } from '@/repositories/search/_types';

/**
 * エンチャント詳細表示のコンポーネント
 * @param props { string }
 * @returns Detail { JSX.Element }
 */
export const Detail = (props: { enchant: EnchantData }) => {
  const effectKbnArray = props.enchant.effect_kbn
    ? props.enchant.effect_kbn.split('@')
    : [];
  const effectNameArray = props.enchant.effect_name
    ? props.enchant.effect_name.split('@')
    : [];
  const routeNameArray = props.enchant.route_name
    ? props.enchant.route_name.split('@')
    : [];

  return (
    <>
      <Table size='small'>
        <TableBody>
          <TableRow>
            <TableCell css={header}>名称</TableCell>
            <TableCell css={body}>
              <span>
                {createEnchantName(
                  props.enchant.enchant_name,
                  props.enchant.enchant_name_2,
                )}
              </span>
              <br />
              <small css={subTitleStyle}>
                {createEnchantNameEn(
                  props.enchant.enchant_name_en,
                  props.enchant.position_id,
                )}
              </small>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell css={header}>位置</TableCell>
            <TableCell css={body}>
              <span css={positionColor(props.enchant.position_id)}>
                {positionName(props.enchant.position_id)}
              </span>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell css={header}>ランク</TableCell>
            <TableCell css={body}>
              <RankModal rank={props.enchant.rank} />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell css={header}>効果</TableCell>
            <TableCell css={body}>
              {effectKbnArray &&
                effectKbnArray.map((effectKbn, index) => (
                  <p css={effectColorFunction(effectKbn)} key={index}>
                    {effectNameArray[index]}
                  </p>
                ))}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell css={header}>入手先</TableCell>
            <TableCell css={body}>
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

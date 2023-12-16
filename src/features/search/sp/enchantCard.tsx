/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import { Collapse, Table, TableBody, TableCell, TableRow } from '@material-ui/core';
import Box from '@mui/material/Box';
import { IconButton } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { positionColor, positionName } from '../common/function/positionFunction';
import { RankModal } from '../rank/rankModal';
import { createEnchantName, createEnchantNameEn, subTitleStyle } from '../common/function/enchantNameFunction';
import { EffectList } from '../common/compornent/EffectList/EffectList';
import { RouteList } from '../common/compornent/RouteList/RouteList';
import { InvalidText } from '../common/compornent/ImvalidText/InvalidText';
import { ImpText } from '../common/compornent/ImpText/ImpText';
import { EnchantData } from '../common/interface/enchantData';
import {
    accIcon,
    acoBody,
    acoHead,
    cardBox,
    enchantCard,
    inline,
    target,
    title,
    value
} from './style/enchantCardStyle';
import { DetailModal } from '../detail/detailModal';

/**
 * エンチャントカードコンポーネント
 * @param props { EnchantData }
 * @returns { JSX.Element }
 */
export const EnchantCard = (props: {
    enchant: EnchantData
}) => {
    const [ open, setOpen ] = useState(false);

    const omtCount = 3;
    const routeNames = props.enchant.route_name ? props.enchant.route_name.split('@') : [];

    return (
        <Card
            css={enchantCard}
        >
            <Box
                css={cardBox}
            >
                <Box>
                    <Typography
                        css={title}
                        variant='subtitle1'
                    >
                        <span data-testid='enchantName'>
                            {
                                createEnchantName(
                                    props.enchant.enchant_name,
                                    props.enchant.enchant_name_2
                                )
                            }
                        </span>
                        <InvalidText invalidTargetFlg={props.enchant.invalid_target_flg} />
                        <ImpText impFlg={props.enchant.imp_flg} />
                    </Typography>
                    <Typography
                        css={subTitleStyle}
                        data-testid='enchantNameEn'
                        variant='subtitle2'
                    >
                        {
                            createEnchantNameEn(
                                props.enchant.enchant_name_en,
                                props.enchant.position_id
                            )
                        }
                    </Typography>
                    <div>
                        <Typography
                            css={positionColor(props.enchant.position_id)}
                            data-testid='position'
                            style={{ display: 'inline' }}
                            variant='subtitle2'
                        >
                            {positionName(props.enchant.position_id)}
                        </Typography>
                        <Typography
                            css={inline}
                            variant='body1'
                        >
                            <small>ランク</small>
                        </Typography>
                        <RankModal rank={props.enchant.rank} />
                    </div>
                </Box>
                <Box>
                    {
                        props.enchant.disp_val &&
                        <p css={value} data-testid='dispVal'>
                            {props.enchant.disp_val}
                        </p>
                    }
                </Box>
                <Box>
                    <IconButton
                        aria-label='expand row'
                        css={accIcon}
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </Box>
            </Box>
            <Collapse
                in={open}
                timeout='auto'
                unmountOnExit
            >
                <Box sx={{ paddingBottom: 10 }}>
                    <p css={target}>
                        対象：{props.enchant.target_name}
                    </p>
                    <Table
                        aria-label='purchases'
                        size='small'
                    >
                        <TableBody>
                            <TableRow>
                                <TableCell css={acoHead}>効果</TableCell>
                                <TableCell css={acoBody}>
                                    <EffectList
                                        effectKbn={props.enchant.effect_kbn}
                                        effectName={props.enchant.effect_name}
                                    />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell css={acoHead}>入手先</TableCell>
                                <TableCell css={acoBody}>
                                    <RouteList
                                        routeNames={ routeNames }
                                        omtCount={omtCount}
                                    />
                                    {
                                        routeNames && routeNames.length > omtCount &&
                                        <DetailModal
                                            count={routeNames.length - omtCount}
                                            data-testid='routeModal'
                                            enchant_id={props.enchant.enchant_id}
                                        />
                                    }
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </Box>
            </Collapse>
        </Card>
    );
};
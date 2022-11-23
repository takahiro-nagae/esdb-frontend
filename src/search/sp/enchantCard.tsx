import { useState } from "react";
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Collapse, Table, TableBody, TableCell, TableRow } from "@material-ui/core";
import Box from '@mui/material/Box';
import { IconButton } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { positionColor, positionName } from '../common/function/positionFunction';
import { RankModal } from '../rank/rankModal';
import { createEnchantName, createEnchantNameEn, subTitleStyle } from "../common/function/enchantNameFunction";
import { EffectList } from "../common/compornent/effectList";
import { RouteList } from "../common/compornent/routeList";
import { InvalidText } from "../common/compornent/invalidText";
import { ImpText } from "../common/compornent/impText";
import { EnchantData } from "../common/interface/enchantData";

/**
 * エンチャントカードコンポーネント
 * @param props { EnchantData }
 * @returns { JSX.Element }
 */
export const EnchantCard = (props: {
    enchant: EnchantData
}) => {

    /** オープン状態 */
    const [ open, setOpen ] = useState(false);

    /** インライン */
    const inlineStyle = css({
        color: '#fff',
        display: 'inline',
        marginLeft: '16px',
        marginRight: '-24px',
        verticalAlign: 'middle'
    });

    /**タイトル（エンチャント名） */
    const titleStyle = css({
        color: '#fff',
        fontWeight: 'bold'
    });

    /** 対象の見た目 */
    const targetStyle = css({
        borderLeft: '4px solid #0886a3',
        color: '#fff',
        paddingLeft: '16px',
    });

    /** 値 */
    const valueStyle = css({
        color: '#fff'
    });

    /** アコーディオンのヘッダー */
    const acoHeadStyle = css({
        backgroundColor: '#2f2f2f',
        color: '#fff'
    });

    /** アコーディオンのボディ */
    const acoBodyStyle = css({
        backgroundColor: '#fff'
    });

    /** アコーディオンのアイコン */
    const accIconStyle = css({
        color: '#fff'
    });

    return (
        <Card
            sx={{
                backgroundColor: '#3C3B40',
                boxSizing: 'border-box',
                margin: '8px',
                padding: '8px',
            }}
        >
            <Box
                sx={{
                    alignItems: 'center',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                }}
            >
                <Box>
                    <Typography
                        css={titleStyle}
                        variant="subtitle1"
                    >
                        <span data-testid='enchantName'>
                            {
                                createEnchantName(
                                    props.enchant.enchant_name,
                                    props.enchant.enchant_name_2
                                )
                            }
                        </span>
                        <InvalidText invalidTargetFlg={props.enchant.invalid_target_flg}/>
                        <ImpText impFlg={props.enchant.imp_flg}/>
                    </Typography>
                    <Typography
                        css={subTitleStyle}
                        data-testid='enchantNameEn'
                        variant="subtitle2"
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
                            variant="subtitle2"
                        >
                            {positionName(props.enchant.position_id)}
                        </Typography>
                        <Typography
                            css={inlineStyle}
                            variant='body1'
                        >
                            <small>ランク</small>
                        </Typography>
                        <RankModal rank={props.enchant.rank}/>
                    </div>
                </Box>
                <Box>
                    {
                        props.enchant.disp_val &&
                        <p css={valueStyle} data-testid='dispVal'>
                            {props.enchant.disp_val}
                        </p>
                    }
                </Box>
                <Box>
                    <IconButton
                        aria-label="expand row"
                        css={accIconStyle}
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUpIcon/> : <KeyboardArrowDownIcon/>}
                    </IconButton>
                </Box>
            </Box>
            <Collapse
                in={open}
                timeout="auto"
                unmountOnExit
            >
                <Box sx={{ paddingBottom: 10 }}>
                    <p css={targetStyle}>
                        対象：{props.enchant.target_name}
                    </p>
                    <Table
                        aria-label="purchases"
                        size="small"
                    >
                        <TableBody>
                            <TableRow>
                                <TableCell css={acoHeadStyle}>効果</TableCell>
                                <TableCell css={acoBodyStyle}>
                                    <EffectList
                                        effectKbn={props.enchant.effect_kbn}
                                        effectName={props.enchant.effect_name}
                                    />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell css={acoHeadStyle}>入手先</TableCell>
                                <TableCell css={acoBodyStyle}>
                                    <RouteList
                                        enchantId={props.enchant.enchant_id}
                                        routeName={props.enchant.route_name}
                                    />
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </Box>
            </Collapse>
        </Card>
    );
}
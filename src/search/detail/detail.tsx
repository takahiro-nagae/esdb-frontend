/** 標準ライブラリ */
import { useEffect, useState } from "react";

/** サードパーティーライブラリ */
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import axios from "axios";
import { Table, TableBody, TableCell, TableRow } from "@mui/material";
import ReactLoading from 'react-loading';

/** ローカルライブラリ */
import effectColor from "../effectColor";
import { createEnchantName, createEnchantNameEn, subTitleStyle } from "../enchantNameFunction";
import { positionColor, positionName } from "../positionFunction";
import { RankModal } from "../rank/rankModal";
import { DisplayWide } from "../../adsense/displayWide";

export const Detail = (props: {enchant_id: any}) => {

    /** ローディングフラグ */
    const [loadingFlag, setLoadingFlag] = useState(false);

    /** エンチャントデータ */
    const [enchantData, setEnchantData] = useState({
        enchant_name: '',
        enchant_name_2: '',
        enchant_name_en: '',
        position_id: '',
        rank: ''

    });
    /** 効果区分 */
    const [effectKbnArray, setEffectKbnArray] = useState([]);
    /** 効果名 */
    const [effectNameArray, setEffectNameArray] = useState([]);
    /** 入手先 */
    const [routeNameArray, setRouteNameArray] = useState([]);

    /** アコーディオンのヘッダー */
    const head = css({
        backgroundColor: '#2f2f2f',
        color: '#fff',
        borderBottom: '1px solid rgba(81, 81, 81, 1)'
    });

    /** アコーディオンのボディ */
    const body = css({
        backgroundColor: '#3C3B40',
        borderBottom: '1px solid rgba(81, 81, 81, 1)'
    });

    const detailBase = css({
        color: '#fff'
    });

    /** ローディングや検索結果なしの表示 */
    const verticalCenter = css ({
        position: 'absolute',
        top: '50%',
        left:'50%'
    });

    // ********************
    // 初期表示
    // ********************
    useEffect(() => {
        axios.get('https://wd5zeazzd9.execute-api.ap-northeast-1.amazonaws.com/Prod/detail/' + props.enchant_id)
        .then((res) => {
            if(res.data != undefined) {
                if(res.data != []) {
                    // エンチャントデータをセット
                    setEnchantData(res.data);
                    setEffectKbnArray(res.data.effect_kbn.split('@'));
                    setEffectNameArray(res.data.effect_name.split('@'));
                    setRouteNameArray(res.data.route_name.split('@'));
                    setLoadingFlag(true);
                }
            }
        }).catch((error) => {
            console.log(error)
        });
    }, []);

    return(
        <>
            { !loadingFlag &&
                    <ReactLoading type="bubbles" css={verticalCenter} />
            }
            { loadingFlag &&
                <>
                    <Table size="small" aria-label="purchases">
                        <TableBody>
                            {/* エンチャント名 */}
                            <TableRow>
                                <TableCell css={head}>名称</TableCell>
                                <TableCell css={body}>
                                    <span css={detailBase}>{createEnchantName(enchantData.enchant_name, enchantData.enchant_name_2)}</span><br />
                                    <small css={subTitleStyle}>{createEnchantNameEn(enchantData.enchant_name_en, enchantData.position_id)}</small>
                                </TableCell>
                            </TableRow>
                            { /** 位置 */}
                            <TableRow>
                                <TableCell css={head}>位置</TableCell>
                                <TableCell css={body}>
                                    <span css={positionColor(enchantData.position_id)}>{positionName(enchantData.position_id)}</span><br />
                                </TableCell>
                            </TableRow>
                            {/** ランク */}
                            <TableRow>
                                <TableCell css={head}>ランク</TableCell>
                                <TableCell css={body}>
                                    <RankModal rank={enchantData.rank} />
                                </TableCell>
                            </TableRow>
                            {/* 効果 */}
                            <TableRow>
                                <TableCell css={head}>効果</TableCell>
                                <TableCell css={body}>
                                    { effectKbnArray && effectKbnArray.map((effectKbn, index) =>
                                        <p css={effectColor(effectKbn)} key={index} >{effectNameArray[index]}</p>
                                    )}
                                </TableCell>
                            </TableRow>
                            {/* 入手先 */}
                            <TableRow>
                                <TableCell css={head}>入手先</TableCell>
                                <TableCell css={body}>
                                    {routeNameArray && routeNameArray.map((route, index) => (
                                        <p dangerouslySetInnerHTML={{ __html: route }} key={index} css={detailBase}></p>
                                    ))}
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                    <DisplayWide />
                </>
            }
        </>
    );
}
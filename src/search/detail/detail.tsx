import { useEffect, useState } from "react";
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import axios from "axios";
import { Table, TableBody, TableCell, TableRow } from "@mui/material";
import effectColorFunction from "../common/function/effectColorFunction";
import { createEnchantName, createEnchantNameEn, subTitleStyle } from "../common/function/enchantNameFunction";
import { positionColor, positionName } from "../common/function/positionFunction";
import { RankModal } from "../rank/rankModal";
import { DisplayWideAd } from "../../adsense/displayWideAd";
import { EnchantDataImpl } from "./impl/enchantDataImpl";
import { Loading } from "../common/compornent/loading";

/**
 * エンチャント詳細表示のコンポーネント
 * @param props { string }
 * @returns Detail { JSX.Element }
 */
export const Detail = (props: { enchant_id: string }) => {

    /** ローディング可否 */
    const [ isLoading, setIsLoading ] = useState(false);

    /** エンチャントデータ */
    const [ enchantData, setEnchantData ] = useState(new EnchantDataImpl());
    /** 効果区分 */
    const [ effectKbnArray, setEffectKbnArray ] = useState([]);
    /** 効果名 */
    const [ effectNameArray, setEffectNameArray ] = useState([]);
    /** 入手先 */
    const [ routeNameArray, setRouteNameArray ] = useState([]);

    /** ヘッダー適用スタイル */
    const headerStyle = css({
        color: '#fff',
        backgroundColor: '#2f2f2f',
        borderBottom: '1px solid rgba(81, 81, 81, 1)'
    });

    /** 本文適用スタイル */
    const bodyStyle = css({
        color: '#fff',
        backgroundColor: '#3C3B40',
        borderBottom: '1px solid rgba(81, 81, 81, 1)'
    });

    /** ローディングや検索結果なしの表示 */
    const verticalCenterStyle = css({
        position: 'absolute',
        top: '50%',
        left: '50%'
    });

    useEffect(() => {
        const detailApiUrl = 'https://wd5zeazzd9.execute-api.ap-northeast-1.amazonaws.com/Prod/detail/';
        axios.get(detailApiUrl + props.enchant_id)
            .then((res) => {
                if ( res.data ) {
                    setEnchantData(res.data);
                    setEffectKbnArray(res.data.effect_kbn.split('@'));
                    setEffectNameArray(res.data.effect_name.split('@'));
                    setRouteNameArray(res.data.route_name.split('@'));
                }
                setIsLoading(true);
            }).catch((error) => {
            console.log(error)
        });
    }, []);

    return (
        <>
            <Loading isLoading={isLoading}/>
            <>
                <Table
                    aria-label="purchases"
                    size="small"
                >
                    <TableBody>
                        <TableRow>
                            <TableCell css={headerStyle}>名称</TableCell>
                            <TableCell css={bodyStyle}>
                                    <span>
                                        {
                                            createEnchantName(
                                                enchantData.enchant_name,
                                                enchantData.enchant_name_2
                                            )
                                        }
                                    </span>
                                <br/>
                                <small css={subTitleStyle}>
                                    {
                                        createEnchantNameEn(
                                            enchantData.enchant_name_en,
                                            enchantData.position_id
                                        )
                                    }
                                </small>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell css={headerStyle}>位置</TableCell>
                            <TableCell css={bodyStyle}>
                                    <span css={positionColor(enchantData.position_id)}>
                                        {positionName(enchantData.position_id)}
                                    </span>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell css={headerStyle}>ランク</TableCell>
                            <TableCell css={bodyStyle}>
                                <RankModal rank={enchantData.rank}/>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell css={headerStyle}>効果</TableCell>
                            <TableCell css={bodyStyle}>
                                {effectKbnArray && effectKbnArray.map((effectKbn, index) =>
                                    <p
                                        css={effectColorFunction(effectKbn)}
                                        key={index}
                                    >
                                        {effectNameArray[index]}
                                    </p>
                                )}
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell css={headerStyle}>入手先</TableCell>
                            <TableCell css={bodyStyle}>
                                {routeNameArray && routeNameArray.map((route, index) =>
                                    <p
                                        dangerouslySetInnerHTML={{ __html: route }}
                                        key={index}
                                    />
                                )}
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
                <DisplayWideAd/>
            </>
        </>
    );
}
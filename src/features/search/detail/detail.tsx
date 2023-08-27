import { useEffect, useState } from 'react';
/** @jsxImportSource @emotion/react */
import { Table, TableBody, TableCell, TableRow } from '@mui/material';
import effectColorFunction from '../common/function/effectColorFunction';
import { createEnchantName, createEnchantNameEn, subTitleStyle } from '../common/function/enchantNameFunction';
import { positionColor, positionName } from '../common/function/positionFunction';
import { RankModal } from '../rank/rankModal';
import { DisplayWideAd } from '../../../adsense/displayWideAd';
import { EnchantDataImpl } from './impl/enchantDataImpl';
import { Loading } from '../common/compornent/loading';
import { getEnchantDetailData } from '../../../api/backendApi';
import { body, header } from './style/detailStyle';

/**
 * エンチャント詳細表示のコンポーネント
 * @param props { string }
 * @returns Detail { JSX.Element }
 */
export const Detail = (props: { enchant_id: string }) => {
    const [ isLoading, setIsLoading ] = useState(false);
    const [ enchantData, setEnchantData ] = useState(new EnchantDataImpl());
    const [ effectKbnArray, setEffectKbnArray ] = useState<string[]>([]);
    const [ effectNameArray, setEffectNameArray ] = useState<string[]>([]);
    const [ routeNameArray, setRouteNameArray ] = useState<string[]>([]);

    useEffect(() => {
        const res = async () => getEnchantDetailData(props.enchant_id);

        res().then((res) => {
            setEnchantData(res.enchantData);
            setEffectKbnArray(res.effectKbn.split('@'));
            setEffectNameArray(res.effectName.split('@'));
            setRouteNameArray(res.routeName.split('@'));
        });

        setIsLoading(true);
    }, []);

    return (
        <>
            <Loading isLoading={isLoading} />
            <>
                <Table
                    aria-label='purchases'
                    size='small'
                >
                    <TableBody>
                        <TableRow>
                            <TableCell css={header}>名称</TableCell>
                            <TableCell css={body}>
                                    <span>
                                        {
                                            createEnchantName(
                                                enchantData.enchant_name,
                                                enchantData.enchant_name_2
                                            )
                                        }
                                    </span>
                                <br />
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
                            <TableCell css={header}>位置</TableCell>
                            <TableCell css={body}>
                                    <span css={positionColor(enchantData.position_id)}>
                                        {positionName(enchantData.position_id)}
                                    </span>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell css={header}>ランク</TableCell>
                            <TableCell css={body}>
                                <RankModal rank={enchantData.rank} />
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell css={header}>効果</TableCell>
                            <TableCell css={body}>
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
                            <TableCell css={header}>入手先</TableCell>
                            <TableCell css={body}>
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
                <DisplayWideAd />
            </>
        </>
    );
};
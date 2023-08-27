/* eslint @typescript-eslint/no-explicit-any: 0 */
/** @jsxImportSource @emotion/react */
import { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import { DisplayWideAd } from '../../../adsense/displayWideAd';
import { searchRank } from "./interface/searchRank";
import { SearchRankImpl } from "./impl/searchRankImpl";
import { getRankData } from "../../../api/backendApi";
import { descriptionStyle, rankStyle, rowStyle, tableHeader } from "./style/rankStyle";

/**
 * ランク表示部の共通項目
 */
export const Rank = (props: { rank: any }) => {
    /** ランクの取得データ */
    const [ rankData, setRankData ] = useState<searchRank>(new SearchRankImpl());

    useEffect(() => {
        const res = async () => getRankData(props.rank);
        res().then((res) => setRankData(res));
    }, []);

    return (
        <>
            <p css={descriptionStyle}>
                <span>ランク：</span>
                <span css={rankStyle}>{rankData.rank}</span>
            </p>
            <p css={descriptionStyle}>INT:200時 単位：%</p>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell css={tableHeader}>曜日</TableCell>
                        <TableCell css={tableHeader}>通常</TableCell>
                        <TableCell css={tableHeader}>エリート</TableCell>
                        <TableCell css={tableHeader}>エルフ</TableCell>
                        <TableCell css={tableHeader}>古代</TableCell>
                        <TableCell css={tableHeader}>稀代</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow css={rowStyle}>
                        <TableCell>木曜日以外</TableCell>
                        <TableCell>{rankData.normal_rate}</TableCell>
                        <TableCell>{rankData.elite_rate}</TableCell>
                        <TableCell>{rankData.elf_rate}</TableCell>
                        <TableCell>{rankData.ancient_rate}</TableCell>
                        <TableCell>{rankData.rare_holy_rate}</TableCell>
                    </TableRow>
                    <TableRow css={rowStyle}>
                        <TableCell>木曜日</TableCell>
                        <TableCell>{rankData.normal_rate_thu}</TableCell>
                        <TableCell>{rankData.elite_rate_thu}</TableCell>
                        <TableCell>{rankData.elf_rate_thu}</TableCell>
                        <TableCell>{rankData.ancient_rate_thu}</TableCell>
                        <TableCell>{rankData.rare_holy_rate_thu}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
            <DisplayWideAd/>
        </>
    );
};
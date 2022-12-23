import { useEffect, useState } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import { DisplayWideAd } from '../../adsense/displayWideAd';
import { searchRank } from "./interface/searchRank";
import { SearchRankImpl } from "./impl/searchRankImpl";
import { getRankData } from "../../api/backendApi";

/**
 * ランク表示部の共通項目
 */
export const Rank = (props: { rank: any }) => {
    /** ランクの取得データ */
    const [ rankData, setRankData ] = useState<searchRank>(new SearchRankImpl());

    /** 説明文 */
    const descriptionStyle = css({
        color: '#fff',
        paddingLeft: '20px',
    });

    /** 動的ランク表示部分 */
    const rankStyle = css({
        color: '#f00',
        fontSize: '18px',
        fontWeight: 'bold'
    });

    /** テーブルヘッダー */
    const tableHeader = css({
        backgroundColor: '#0854a3',
    });

    const rowStyle = css({
        backgroundColor: '#3C3B40'
    });

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
}
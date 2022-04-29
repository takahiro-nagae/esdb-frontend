/** 標準ライブラリ */
import { useEffect, useState } from 'react';

/** サードパーティーライブラリ */
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import axios from 'axios';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import { DisplayWideAd } from '../../adsense/displayWideAd';

/**
 * ランク表示部の共通項目
 */
export const Rank = (props: {rank: any}) => {
    /** ランクの取得データ */
    const [rankData, setRankData] = useState({
        rank: '-',
        normal_rate: '-',
        elite_rate: '-',
        elf_rate: '-',
        ancient_rate: '-',
        rare_holy_rate: '-',
        normal_rate_thu: '-',
        elite_rate_thu: '-',
        elf_rate_thu: '-',
        ancient_rate_thu: '-',
        rare_holy_rate_thu: '-'
    });

    /** 説明文 */
    const description = css ({
        paddingLeft: '20px',
        color: '#fff'
    });

    /** ランク表示 */
    const dispRank = css ({
        color: '#f00',
        fontSize: '18px',
        fontWeight: 'bold'
    });

    /** テーブルヘッダー */
    const tableHeader = css ({
        backgroundColor: '#0854a3',
    });

    const row = css({
        backgroundColor: '#3C3B40'
    });


    // ********************
    // 初期表示
    // ********************
    useEffect(() => {
        axios.get('https://wd5zeazzd9.execute-api.ap-northeast-1.amazonaws.com/Prod/rank/' + props.rank)
        .then((res) => {
            if(res.data != undefined) {
                // ランクデータをセット
                setRankData(res.data);
            }
        }).catch((error) => {
            console.log(error)
        });
    }, []);

    return(
        <>
            <p css={description}>ランク：<span css={dispRank}>{rankData.rank}</span></p>
            <p css={description}>INT:200時　単位：%</p>
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
                    <TableRow css={row}>
                        <TableCell>木曜日以外</TableCell>
                        <TableCell>{rankData.normal_rate}</TableCell>
                        <TableCell>{rankData.elite_rate}</TableCell>
                        <TableCell>{rankData.elf_rate}</TableCell>
                        <TableCell>{rankData.ancient_rate}</TableCell>
                        <TableCell>{rankData.rare_holy_rate}</TableCell>
                    </TableRow>
                    <TableRow css={row}>
                        <TableCell>木曜日</TableCell>
                        <TableCell>{rankData.normal_rate_thu}</TableCell>
                        <TableCell>{rankData.elite_rate_thu}</TableCell>
                        <TableCell>{rankData.elf_rate_thu}</TableCell>
                        <TableCell>{rankData.ancient_rate_thu}</TableCell>
                        <TableCell>{rankData.rare_holy_rate_thu}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
            <DisplayWideAd />
        </>
    );
}
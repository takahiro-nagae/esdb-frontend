/** 標準ライブラリ */
import { useEffect, useState } from "react";

/** サードパーティーライブラリ */
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import axios from "axios";
import ReactLoading from "react-loading";
import Card from '@mui/material/Card';
import { Box, Button } from "@mui/material";

/** ローカルライブラリ */
import { createEnchantName, createEnchantNameEn } from "../enchantNameFunction";
import { RankModal } from "../rank/rankModal";
import { DisplayWide } from "../../adsense/displayWide";

/**
 * 下地一覧
 */
export const GroundList = (props: {enchant_id: string}) => {

    /** ローディングフラグ */
    const [loadingFlag, setLoadingFlag] = useState(false);
    /** 下地一覧 */
    const [groundList, setGroundList] = useState(Array(0));
    /** 対象エンチャント */
    const [targetEnchant, setTargetEnchant] = useState({
        enchant_name: '',
        enchant_name_2: '',
        enchant_name_en: '',
        position_id: ''
    });

    const targetEnchantStyle = css({
        color: '#fff'
    });

    /** テーブルヘッダー */
    const tableHeader = css ({
        backgroundColor: '#1F2023',
        color: '#fff',
        border: 'none',
        borderBottom: '1px solid rgba(81,81,81,1)',
        'path' : {
            color: '#fff'
        }
    });

    const constRank = css({
        width: '64px',
        color: '#fff',
        margin: '0',
        textAlign: 'center'
    });

    const enchantStyke = css({
        textAlign: 'left'
    });

    // ********************
    // 初期表示
    // ********************
    useEffect(() => {
        axios.get('https://wd5zeazzd9.execute-api.ap-northeast-1.amazonaws.com/Prod/ground/' + props.enchant_id)
        .then((res) => {
            if(res.data != undefined) {
                setGroundList(res.data.ground);
                setTargetEnchant(res.data.target_enchant);
            }
            // ローディング完了
            setLoadingFlag(true);
        }).catch((error) => {
            console.log(error)
        });
    }, []);

    // ********************
    // 各エンチャントを開く
    // ********************
    const openEnchant = (enchant_id: string) => {
        window.open('/detail/' + enchant_id,'_blank');
    };

    return(
        <>
            { !loadingFlag && <ReactLoading type="bubbles" /> }
            { loadingFlag &&
                <>
                    <p css={targetEnchantStyle} >
                        <span>対象エンチャント：</span>
                        <span>{createEnchantName(targetEnchant.enchant_name, targetEnchant.enchant_name_2)}</span>
                        { targetEnchant.enchant_name_en != '' &&
                            <span>({createEnchantNameEn(targetEnchant.enchant_name_en, targetEnchant.position_id)})</span>
                        }
                    </p>
                    {groundList.map(ground => (
                        <Card sx={{ backgroundColor: '#3C3B40',
                            padding: '8px',
                            margin: '8px',
                            boxSizing: 'border-box' }}
                            key={ground.rank}>
                                <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start' }}>
                                    <Box sx={{width: '80px'}}>
                                        <RankModal rank={ground.rank} />
                                        <p css={constRank}><small>ランク</small></p>
                                    </Box>
                                    <Box>
                                        {ground.enchant_list.map((enchant: { enchant_id: string; enchant_name: string; enchant_name_2: string; enchant_name_en: string; position_id: string; }) => (
                                            <Button onClick={() => openEnchant(enchant.enchant_id)} key={enchant.enchant_id}>
                                                <a css={enchantStyke}>
                                                    <span>{createEnchantName(enchant.enchant_name, enchant.enchant_name_2)}</span>
                                                    { enchant.enchant_name_en != '' &&
                                                        <span>({createEnchantNameEn(enchant.enchant_name_en, enchant.position_id)})</span>
                                                    }
                                                </a>
                                            </Button>
                                        ))}
                                    </Box>
                                </Box>
                        </Card>
                    ))}
                    <DisplayWide />
                </>
            }
        </>

    );
}
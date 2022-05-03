import { useEffect, useState } from "react";
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import axios from "axios";
import ReactLoading from "react-loading";
import Card from '@mui/material/Card';
import { Button } from "@mui/material";
import Box from '@mui/material/Box';
import { createEnchantName, createEnchantNameEn } from "../enchantNameFunction";
import { RankModal } from "../rank/rankModal";
import { DisplayWideAd } from "../../adsense/displayWideAd";
import {GroundEnchantImpl} from "./impl/groundEnchantImpl";
import {Ground} from "./interface/ground";

/**
 * 下地一覧コンポーネント
 * @param props { string }
 * @returns GroundList {  JSX.Element }
 */
export const GroundList = (props: { enchant_id: string }) => {

    /** ローディング可否 */
    // TODO: ローディング共通化できない？
    const [isLoading, setIsLoading] = useState(false);
    /** 下地一覧 */
    const [groundList, setGroundList] = useState<Array<Ground>>([]);
    /** 対象エンチャント */
    const [targetEnchant, setTargetEnchant] = useState(new GroundEnchantImpl());

    /** 対象エンチャント文言 */
    const targetEnchantStyle = css({
        color: '#fff'
    });

    /** ランク行のテーブル */
    const constRankStyle = css({
        color: '#fff',
        margin: '0',
        textAlign: 'center',
        width: '64px',
    });

    /** 各種エンチャント */
    const enchantStyle = css({
        textAlign: 'left'
    });

    useEffect(() => {
        const groundApiUrl = 'https://wd5zeazzd9.execute-api.ap-northeast-1.amazonaws.com/Prod/ground/';
        axios.get(groundApiUrl + props.enchant_id)
        .then((res) => {
            if(res.data) {
                setGroundList(res.data.ground);
                setTargetEnchant(res.data.target_enchant);
            }
            // ローディング完了
            setIsLoading(true);
        }).catch((error) => {
            console.log(error)
        });
    }, []);

    const openEnchant = (enchant_id: string) => {
        window.open('/detail/' + enchant_id,'_blank');
    };

    return(
        <>
            { !isLoading && <ReactLoading type="bubbles" /> }
            { isLoading &&
                <>
                    <p css={targetEnchantStyle} >
                        <span>対象エンチャント：</span>
                        <span>
                            {
                                createEnchantName (
                                    targetEnchant.enchant_name,
                                    targetEnchant.enchant_name_2
                                )
                            }
                        </span>
                        { targetEnchant.enchant_name_en != '' &&
                            <span>
                                {
                                    createEnchantNameEn (
                                        targetEnchant.enchant_name_en,
                                        targetEnchant.position_id
                                    )
                                }
                            </span>
                        }
                    </p>
                    { groundList.map(ground => (
                        <Card
                            key={ ground.rank }
                            sx={{
                                backgroundColor: '#3C3B40',
                                boxSizing: 'border-box',
                                padding: '8px',
                                margin: '8px',
                            }}
                        >
                        <Box
                            sx={{
                                alignItems: 'flex-start',
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'flex-start'
                            }}
                        >
                            <Box sx={{ width: '80px' }}>
                                <RankModal rank={ ground.rank } />
                                <p css={ constRankStyle }>
                                    <small>ランク</small>
                                </p>
                            </Box>
                            <Box>
                                { ground.enchant_list.map(enchant => (
                                    <Button
                                        key={ enchant.enchant_id }
                                        onClick={ () => openEnchant(enchant.enchant_id) }
                                    >
                                        <a css={ enchantStyle }>
                                            <span>
                                                {
                                                    createEnchantName (
                                                        enchant.enchant_name,
                                                        enchant.enchant_name_2
                                                    )
                                                }
                                            </span>
                                            { enchant.enchant_name_en != '' &&
                                                <span>
                                                    {
                                                        createEnchantNameEn (
                                                            enchant.enchant_name_en,
                                                            enchant.position_id
                                                        )
                                                    }
                                                </span>
                                            }
                                        </a>
                                    </Button>
                                ))}
                            </Box>
                        </Box>
                        </Card>
                    ))}
                    <DisplayWideAd />
                </>
            }
        </>
    );
}
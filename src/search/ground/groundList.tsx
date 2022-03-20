/** 標準ライブラリ */
import { useEffect, useState } from "react";

/** サードパーティーライブラリ */
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import axios from "axios";
import ReactLoading from "react-loading";

/** ローカルライブラリ */
import { createEnchantName, createEnchantNameEn } from "../enchantNameFunction";


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

    return(
        <>
            { !loadingFlag && <ReactLoading type="bubbles" /> }
            { loadingFlag &&
                <p css={targetEnchantStyle} >
                    <span>対象エンチャント：</span>
                    <span>{createEnchantName(targetEnchant.enchant_name, targetEnchant.enchant_name_2)}</span>
                    <span>({createEnchantNameEn(targetEnchant.enchant_name_en, targetEnchant.position_id)})</span>
                </p>
            }
        </>

    );
}
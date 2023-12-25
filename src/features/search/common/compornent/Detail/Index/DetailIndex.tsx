import { useParams } from "react-router-dom";
import { Grid } from '@material-ui/core';
import Box from '@mui/material/Box';
import { Detail } from "../Detail";
import { getEnchantDetailData } from "../../../../../../api/backendApi";
import { useEffect, useState } from 'react';
import { EnchantData } from "../../../interface/enchantData";
import { Loading } from "../../Loading/Loading";

/**
 * インデックス登録用の詳細ページ出力コンテナコンポーネント
 * @returns DetailIndex { JSX.Element }
 */
export const DetailIndex = () => {
    const params = useParams();

    const [ isLoading, setIsLoading ] = useState(false);
    const [ enchantData, setEnchantData ] = useState<EnchantData>();

    useEffect(() => {
        const enchantIdParam = params.enchant_id ? params.enchant_id : '';
        getEnchantDetailData(enchantIdParam).then((res) => {
            setEnchantData(res);
            setIsLoading(true);
        });

    }, []);

    return(
        <>
            <Loading isLoading={ isLoading } />
            <Box sx={{ mt: 5, ml: 5}}>
                {
                    enchantData &&
                    <Grid item xs={11} >
                        <Detail enchant={enchantData} />
                    </Grid>
                }
            </Box>
        </>

    );
};
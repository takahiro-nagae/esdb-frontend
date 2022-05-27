import { useParams } from "react-router-dom";
import { Grid } from '@material-ui/core';
import Box from '@mui/material/Box';
import { Detail } from "../detail/detail";

/**
 * インデックス登録用の詳細ページ出力コンテナコンポーネント
 * @returns DetailIndex {  JSX.Element }
 */
export const DetailIndex = () => {
    const params = useParams();

    return(
        <Box sx={{ mt: 5, ml: 5}}>
            <Grid item xs={11} >
                <Detail enchant_id={params.enchant_id!} />
            </Grid>
        </Box>
    )
}
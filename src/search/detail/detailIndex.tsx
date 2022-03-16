/** 標準ライブラリ */
import { useParams } from "react-router-dom";

/** サードパーティーライブラリ */
import { Box, Grid } from '@material-ui/core';

/** ローカルライブラリ */
import { Detail } from "../detail/detail";

/**
 *
 * @param props インデックス用のランク表示
 * @returns
 */
export const DetailIndex = (props: any) => {
    const params = useParams();

    return(
        <Box sx={{ mt: 5, ml: 5}}>
            <Grid item xs={11} >
                <Detail enchant_id={params.enchant_id} />
            </Grid>
        </Box>
    )
}
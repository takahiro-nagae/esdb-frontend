/** @jsxImportSource @emotion/react */
import { Grid } from "@material-ui/core";
import Box from "@mui/material/Box";
import { EnchantCard } from "./EnchantCard/EnchantCard";
import { EnchantData } from "../common/interface/enchantData";
import { dataWidth } from "./style/SpSearchContainerStyle";
import { ScrollTopButton } from "./component/ScrollTopButton/ScrollTopButton";
import { LastInfeedAd } from "./component/Ads/LastInfeedAd";
import { AmongAd } from "./component/Ads/AmongAd";

/**
 * SPの検索結果コンテナ
 * @param props { Array<EnchantData>, boolean }
 * @returns SpSearchContainer { JSX.Element }
 */
export const SpSearchContainer = (props: {
    rowData: Array<EnchantData>
}) => {
    return (
        <>
            <Grid
                css={dataWidth}
                item
                xs={12}
            >
                <Box sx={{ p: 1 }}>
                    {props.rowData.map((enchant, index) => (
                        <>
                            <AmongAd index={index} />
                            <EnchantCard
                                enchant={enchant}
                                key={enchant.enchant_id}
                            />
                            <LastInfeedAd index={index} dataLength={props.rowData.length} />
                        </>
                    ))}
                </Box>
            </Grid>
            <ScrollTopButton />
        </>
    );
};
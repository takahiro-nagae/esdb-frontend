import { Grid } from "@material-ui/core";
import Box from "@mui/material/Box";
import { Card } from "@mui/material";
import { InfeedAd } from "../../../adsense/infeedAd";
import { EnchantCard } from "./enchantCard";
import IconButton from "@mui/material/IconButton";
import { KeyboardDoubleArrowUp } from "@mui/icons-material";
/** @jsxImportSource @emotion/react */
import { animateScroll as scroll } from "react-scroll/modules";
import { EnchantData } from "../common/interface/enchantData";
import { card, dataWidth, topIcon } from "./style/spSearchContainerStyle";

/**
 * SPの検索結果コンテナ
 * @param props { Array<EnchantData>, boolean }
 * @returns SpSearchContainer { JSX.Element }
 */
export const SpSearchContainer = (props: {
    rowData: Array<EnchantData>
}) => {

    /**
     * トップにスクロール
     */
    const scrollToTop = () => {
        scroll.scrollToTop();
    };

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
                            {index != 0 && index % 5 == 0 &&
                                <Card
                                    css={card}
                                    key={index}
                                >
                                    <InfeedAd/>
                                </Card>
                            }
                            <EnchantCard
                                enchant={enchant}
                                key={enchant.enchant_id}
                            />
                            {index == props.rowData.length - 1 && process.env.NODE_ENV === 'production' &&
                                <Card
                                    css={card}
                                    key={'lastSp'}
                                >
                                    <InfeedAd/>
                                </Card>
                            }
                        </>
                    ))}
                </Box>
            </Grid>
            <IconButton
                aria-label="add an alarm"
                color="secondary"
                css={topIcon}
                onClick={scrollToTop}
                style={{ position: 'fixed', bottom: '48px', background: '#282828' }}
            >
                <KeyboardDoubleArrowUp sx={{ fontSize: 40 }}/>
            </IconButton>
        </>
    );
};
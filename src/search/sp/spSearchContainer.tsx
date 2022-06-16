import { Grid } from "@material-ui/core";
import Box from "@mui/material/Box";
import { Card } from "@mui/material";
import { InfeedAd } from "../../adsense/infeedAd";
import { EnchantCard } from "./enchantCard";
import IconButton from "@mui/material/IconButton";
import { KeyboardDoubleArrowUp } from "@mui/icons-material";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { animateScroll as scroll } from "react-scroll/modules";
import { EnchantData } from "../common/interface/enchantData";

/**
 * SPの検索結果コンテナ
 * @param props { Array<EnchantData>, boolean }
 * @returns SpSearchContainer { JSX.Element }
 */
export const SpSearchContainer = (props: {
    rowData: Array<EnchantData>
}) => {

    /** 横幅指定 */
    const dataWidthStyle = css({
        width: '100%'
    });

    /**  トップに戻るアイコンの設定 */
    const topIconStyle = css({
        color: '#fff',
        right: '20px',
        position: 'fixed',
    });

    const cardStyle = css({
        backgroundColor: '#3C3B40',
        boxSizing: 'border-box',
        padding: '8px',
        margin: '8px',
    });

    /**
     * トップにスクロール
     */
    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    return (
        <>
            <Grid
                css={dataWidthStyle}
                item
                xs={12}
            >
                <Box sx={{ p: 1 }}>
                    {props.rowData.map((enchant, index) => (
                        <>
                            {index != 0 && index % 5 == 0 &&
                                <Card
                                    css={cardStyle}
                                    key={index}
                                >
                                    <InfeedAd/>
                                </Card>
                            }
                            <EnchantCard
                                enchant={enchant}
                                key={enchant.enchant_id}
                            />
                            {index == props.rowData.length - 1 &&
                                <Card
                                    css={cardStyle}
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
                css={topIconStyle}
                onClick={scrollToTop}
                style={{ position: 'fixed', bottom: '48px', background: '#282828' }}
            >
                <KeyboardDoubleArrowUp sx={{ fontSize: 40 }}/>
            </IconButton>
        </>
    );
}
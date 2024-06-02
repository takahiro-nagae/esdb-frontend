/** @jsxImportSource @emotion/react */
import { Card } from "@material-ui/core";
import { InfeedAd } from "../../../../../adsense/infeedAd";
import { card } from "./style/AdsStyle";
import { displayLastAd } from "./function/displayAd";

export const LastInfeedAd = (props: {index: number, dataLength: number}) => {
    if(displayLastAd(props.index, props.dataLength)) {
        // カードが描画されるためproduction以外はreturn null
        if(process.env.VITE_APP_ENV !== 'prod') {
            return null;
        }

        return(
            <Card
                css={card}
                key={'lastSp'}
            >
                <InfeedAd/>
            </Card>
        );
    } else {
        return null;
    }
};
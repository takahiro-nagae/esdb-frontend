/** @jsxImportSource @emotion/react */
import { Card } from "@material-ui/core";
import { InfeedAd } from "../../../../../adsense/infeedAd";
import { card } from "./style/AdsStyle";
import { displayAmongAd } from "./function/displayAd";

export const AmongAd = (props: {index: number}) => {
    if(displayAmongAd(props.index)) {
        // カードが描画されるためproduction以外はreturn null
        if(process.env.NODE_ENV !== 'production') {
            return null;
        }

        return(
            <Card
                css={card}
                key={props.index}
            >
                <InfeedAd/>
            </Card>
        );
    } else {
        return null;
    }
};
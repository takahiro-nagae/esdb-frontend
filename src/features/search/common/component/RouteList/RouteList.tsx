/** @jsxImportSource @emotion/react */
import { isMobile } from "react-device-detect";
import { routeFont } from "./style/RouteListStyle";
import DOMPurify from "dompurify";

/**
 * 入手先一覧コンポーネント
 * @param props { string[], number }
 * @returns RouteList { JSX.Element }
 */
export const RouteList = (props: {
    routeNames: string[],
    omtCount: number,
}) => {
    return (
        <>
            {
                props.routeNames && props.routeNames
                    .slice(0, props.omtCount)
                    .map((route, index) => (
                        <p
                            css={isMobile ? routeFont: null}
                            dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(route) }}
                            key={index}
                        />
                    ))
            }
        </>
    );
};
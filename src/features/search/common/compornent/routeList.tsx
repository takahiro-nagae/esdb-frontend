import { DetailModal } from "../../detail/detailModal";
import { css } from "@emotion/react";
import { isMobile } from "react-device-detect";
/** @jsxImportSource @emotion/react */

/**
 * 入手先一覧コンポーネント
 * @param props { string, string }
 * @returns RouteList { JSX.Element }
 */
export const RouteList = (props: {
    enchantId: string,
    routeName: string
}) => {

    /** 入手先を配列化 */
    const routeNameArray: "" | string[] = props.routeName && props.routeName.split('@');

    /** 省略までの件数 */
    const omtCount = 3;

    /** 入手先の文字色 */
    const routeFont = css({
        color: '#333',
    });

    return (
        <>
            {
                routeNameArray && routeNameArray
                    .slice(0, omtCount)
                    .map((route, index) => (
                        <p
                            css={isMobile ? routeFont: null}
                            dangerouslySetInnerHTML={{ __html: route }}
                            key={index}
                        />
                    ))
            }
            {
                routeNameArray && routeNameArray.length > omtCount &&
                <DetailModal
                    count={routeNameArray.length - omtCount}
                    data-testid='routeModal'
                    enchant_id={props.enchantId}
                />
            }
        </>
    );
};
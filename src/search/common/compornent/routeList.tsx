import { DetailModal } from "../../detail/detailModal";
import {css} from "@emotion/react";
import {maxQueryProperty} from "../../../common/theme/layout";
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
    const routeNameArray:"" | string[] = props.routeName && props.routeName.split('@');

    /** 省略までの件数 */
    const omtCount = 3;

    /** 入手先の文字色 */
    const routeFont = css({
        [ maxQueryProperty ] : {
            color: '#333',
        }
    });

    return(
      <>
          {
              routeNameArray && routeNameArray
              .slice(0, omtCount)
              .map((route, index) => (
                  <p
                      css={ routeFont }
                      dangerouslySetInnerHTML={{ __html: route }}
                      key={ index }
                  />
              ))
          }
          {
              routeNameArray && routeNameArray.length > omtCount &&
              <DetailModal
                  count={ routeNameArray.length - omtCount }
                  enchant_id={ props.enchantId }
              />
          }
      </>
    );
}
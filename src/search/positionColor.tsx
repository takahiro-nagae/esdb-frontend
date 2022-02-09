/** サードパーティーライブラリ */
import { css } from "@emotion/react";

/**
 * 位置コードの値で設定する色を変更する
 * @param positionCode 位置コード
 * @returns 位置コードの値による色
 */
export default function positionColor (positionCode: string) {
    switch(positionCode) {
        case '1':
            // 接頭
            return css({
                color: '#71a0ff!important'
            });
        case '2':
            // 接尾
            return css({
                color: '#ff7575!important'
            });
        default:
            return css({
                color: '#fff'
            });
    }
}

/** サードパーティーライブラリ */
import { css } from "@emotion/react";

/**
 * 効果の値で設定する色を変更する
 * @param effectStr 効果の値
 * @returns 効果の値による色
 */
export default function effectColor (effectStr: string) {
    switch(effectStr) {
        case 'increase':
            // 増加
            return css({
                color: '#5f5fff'
            });
        case 'decrease':
            // 減少
            return css({
                color: '#ff3b3b'
            });
        case 'not-relevant':
            // ランクに関係なく
            return css({
                color: '#92fa92'
            });
        case 'designated':
            // 専用
            return css({
                color: '#f0f'
            });
        default:
            return css({
                color: '#f461f4'
            });
    }
}

import { css } from "@emotion/react";

/**
 * 効果の値で設定する色を変更する
 * @param effectStr { string } 効果の値
 * @returns 効果の値による色 {  SerializedStyles }
 */
export default function effectColor (effectStr: string) {
    switch(effectStr) {
        case 'increase':
            // 増加
            return css({
                color: '#7070ff',
                margin: '2px'
            });
        case 'decrease':
            // 減少
            return css({
                color: '#ff3b3b',
                margin: '2px'
            });
        case 'not-relevant':
            // ランクに関係なく
            return css({
                color: '#11D612',
                margin: '2px'
            });
        case 'designated':
            // 専用
            return css({
                color: '#f0f',
                margin: '2px'
            });
        default:
            return css({
                color: '#f461f4',
                margin: '2px'
            });
    }
}

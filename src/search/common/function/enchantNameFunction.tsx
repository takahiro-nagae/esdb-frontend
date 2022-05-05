/** サードパーティーライブラリ */
import { css } from "@emotion/react";

/**
 * エンチャント名を設定
 * @param enchantName エンチャント名
 * @param enchantName2 エンチャント別名
 * @returns
 */
export function createEnchantName( enchantName: string, enchantName2: string ) {
    if ( enchantName2 == '' ) return enchantName;

    return enchantName + ' / ' + enchantName2
}


/**
 * エンチャントの英名を加工し返却
 * @param enchantNameEn エンチャント英名
 * @param positionCode 位置コード
 * @returns エンチャント英名
 */
export function createEnchantNameEn( enchantNameEn: string, positionCode: string ) {
    if ( enchantNameEn == '' ) return ''

    switch ( positionCode ) {
        case '1':
            // 接頭
            return enchantNameEn;
        case '2':
            // 接尾
            return 'Of ' + enchantNameEn;
        default:
            // デフォルト
            return enchantNameEn;
    }
}

/**
 * サブタイトルのスタイル
 */
export function subTitleStyle() {
    return css( {
        color: '#aaa'
    } );
}
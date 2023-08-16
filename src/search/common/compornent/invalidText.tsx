import { css } from "@emotion/react";
/** @jsxImportSource @emotion/react */

/**
 * 貼付不可文字列表示コンポーネント
 * @param props { string }
 * @returns InvalidText { JSX.Element }
 */
export const InvalidText = (props: { invalidTargetFlg: string }) => {
    const red = css({
        color: '#f00',
        fontWeight: 'bold'
    });

    return (
        <>
            {
                props.invalidTargetFlg == '1' &&
                <small css={ red }>
                      貼付不可
                </small>
            }
        </>
    );
};
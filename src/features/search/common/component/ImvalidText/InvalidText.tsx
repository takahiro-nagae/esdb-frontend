/** @jsxImportSource @emotion/react */
import { invalid } from "./style/InvalidTextStyle";

/**
 * 貼付不可文字列表示コンポーネント
 * @param props { string }
 * @returns InvalidText { JSX.Element }
 */
export const InvalidText = (props: { invalidTargetFlg: string }) => {
    return (
        <>
            {
                props.invalidTargetFlg == '1' &&
                <small css={ invalid }>
                      貼付不可
                </small>
            }
        </>
    );
};
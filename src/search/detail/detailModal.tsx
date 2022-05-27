/** @jsxImportSource @emotion/react */

/** ローカルライブラリ */
import { Detail } from "./detail";
import { ModalContainer } from "../../common/modalContainer";

/**
 * 詳細モーダル表示用コンテナコンポーネント
 * @param props { string, number }
 * @returns { JSX.Element }
 */
export const DetailModal = ( props: { enchant_id: string, count: number } ) => {
    return (
        <>
            <ModalContainer
                buttonMsgEl={ <a><small>&#187;{ props.count }件省略しました</small></a> }
                height={ 80 }
                openComponent={ <Detail enchant_id={ props.enchant_id }/> }
                width={ 95 }
            />
        </>
    );
}
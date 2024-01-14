/** @jsxImportSource @emotion/react */

/** ローカルライブラリ */
import { Detail } from "../Detail";
import { ModalContainer } from "../../../../../../common/modalContainer";
import { EnchantData } from "../../../interface/enchantData";

/**
 * 詳細モーダル表示用コンテナコンポーネント
 * @param props { string, number }
 * @returns { JSX.Element }
 */
export const DetailModal = ( props: { enchant: EnchantData, count: number } ) => {
    if(props.count <= 0) return (<></>);
    return (
        <>
            <ModalContainer
                buttonMsgEl={ <a><small>&#187;{ props.count }件省略しました</small></a> }
                height={ 80 }
                openComponent={ <Detail enchant={ props.enchant }/> }
                width={ 95 }
            />
        </>
    );
};
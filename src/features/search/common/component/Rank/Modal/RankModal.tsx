import { Rank } from "../Rank";
import { ModalContainer } from "../../../../../../common/modalContainer";

/**
 * ランクモーダルコンテナコンポーネント
 * @param props
 * @returns RankModal { JSX.Element }
 */
export const RankModal = ( props: { rank: string } ) => {
    return (
        <>
            <ModalContainer
                buttonMsgEl={ props.rank }
                height={ 70 }
                openComponent={ <Rank rank={ props.rank }/> }
                width={ 85 }
            />
        </>
    );
};
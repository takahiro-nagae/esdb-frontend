import { MultiplexAd } from '../adsense/multiplexAd';
import { SearchFormContainer } from '../form/searchFormContainer';

/**
 * トップ画面コンポーネント
 * @param props { any, any } // TODO: anyの型付けを変更
 * @returns Home　{ JSX.Element }
 */
export const Home = (props: {
    mq: any,
    maxWidth: any
}) => {
    return(
        <>
            <SearchFormContainer
                maxWidth={props.maxWidth}
                mq={props.mq}
            />
            <MultiplexAd />
        </>
    )
}
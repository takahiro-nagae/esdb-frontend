import {MultiplexAd} from '../adsense/multiplexAd';
import {SearchFormContainer} from '../form/searchFormContainer';

/**
 * トップ画面コンポーネント
 * @returns Home { JSX.Element }
 */
export const Home = () => {
    return (
        <>
            <SearchFormContainer/>
            <MultiplexAd/>
        </>
    )
}
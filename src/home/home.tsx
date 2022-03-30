/** ローカルライブラリ */
import { Multiplex } from '../adsense/multiplex';
import { SearchFormContainer } from '../form/searchFormContainer';

/**
 * トップ画面
 */
export const Home = (props: {mq: any, maxWidth: any}) => {
    return(
        <>
            <SearchFormContainer mq={props.mq} maxWidth={props.maxWidth} />
              <Multiplex />
        </>
    )
}
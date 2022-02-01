import React from 'react';
import { SearchForm } from '../form/searchForm';

/**
 * トップ画面
 */
export const Home = (props: {mq: any, maxWidth: any}) => {
    return(
        <SearchForm mq={props.mq} maxWidth={props.maxWidth} />
    )
}
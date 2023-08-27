import { hitCount, result } from "../searchListStyle";

type SearchResultType = {
    dispCount: number;
    count: number;
    effectName: string;
};

const Compornent = (props: SearchResultType) => {
    return (
        <>
            {props.dispCount < 1 && (
                <p css={result}>検索結果は0件です</p>
            )}
            {props.dispCount >= 1 && (
                <p css={result}>
                    <span css={hitCount}>{props.count}</span>件ヒットしました
                    {props.effectName != '' && (
                        <>
                            <br />
                            <span>値：{props.effectName}</span>
                        </>
                    )}
                </p>
            )}
        </>
    );
};

export const SearchResult = Compornent;
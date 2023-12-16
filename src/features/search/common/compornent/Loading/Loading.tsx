/** @jsxImportSource @emotion/react */
import ReactLoading from "react-loading";
import { loadingContainerStyle, verticalCenterStyle } from "./style/LoadingStyle";

/**
 * ローディングの共通コンポーネント
 * @param props { boolean, string? }
 * @returns Loading { JSX.Element }
 */
export const Loading = (props: {
    isLoading: boolean
}) => {
    return (
        <>
            {!props.isLoading &&
                <div
                    css={loadingContainerStyle}
                    data-testid='loading'
                >
                    <ReactLoading css={verticalCenterStyle} type="bubbles"/>
                </div>

            }
        </>
    );
};
import ReactLoading from "react-loading";
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

/**
 * ローディングの共通コンポーネント
 * @param props { boolean, string? }
 * @returns Loading { JSX.Element }
 */
export const Loading = (props: {
    isLoading: boolean,
    backGroundColorStr?: string
}) => {

    const defaultColor = '#27292D';

    /** ローディング外周の要素 */
    const loadingContainerStyle = css({
        backgroundColor: props.backGroundColorStr ? props.backGroundColorStr : defaultColor,
        height: '100%',
        width: '100%',
        position: 'fixed',
        zIndex: 999
    });

    /** ローディングの表示位置 */
    const verticalCenterStyle = css({
        position: 'absolute',
        left: '50%',
        top: '50%',
    });

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
}
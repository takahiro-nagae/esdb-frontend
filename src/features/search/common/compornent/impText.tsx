import { css } from "@emotion/react";

/** @jsxImportSource @emotion/react */

export const ImpText = (props: { impFlg: string }) => {
    const red = css({
        color: '#f00',
        fontWeight: 'bold'
    });

    return (
        <>
            {
                props.impFlg == '0' &&
                <small css={red}>
                    未実装
                </small>
            }
        </>
    );
};
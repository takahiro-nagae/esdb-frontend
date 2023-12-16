/** @jsxImportSource @emotion/react */
import { notImped } from "./style/ImptextStyle";

export const ImpText = (props: { impFlg: string }) => {
    return (
        <>
            {
                props.impFlg == '0' &&
                <small css={notImped}>
                    未実装
                </small>
            }
        </>
    );
};
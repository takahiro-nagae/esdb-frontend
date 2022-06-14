import effectColorFunction from "../function/effectColorFunction";
/** @jsxImportSource @emotion/react */

/**
 * 検索一覧の効果コンポーネント
 * @param props { string, string }
 * @returns EffectList { JSX.Element }
 */
export const EffectList = (props: {
    effectKbn: string,
    effectName: string
}) => {
    /** 効果区分を配列化 */
    const effectKbnArray: "" | string[] = props.effectKbn && props.effectKbn.split('@');
    /** 効果名を配列化 */
    const effectNameArray: "" | string[] = props.effectName && props.effectName.split('@');

    return (
        <>
            {effectKbnArray && effectKbnArray.map((effectKbn, index) =>
                <p
                    css={effectColorFunction(effectKbn)}
                    data-testid='effect'
                    key={index}
                >
                    {effectNameArray[index]}
                </p>
            )}
        </>
    );
}
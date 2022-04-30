/** @jsxImportSource @emotion/react */
import { UseFormRegister } from "react-hook-form";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { formMarginStyle, labelStyle, selectBoxStyle } from "../common/style/formStyle";
import { FormType } from '../common/type/formType';
import { Dispatch, SetStateAction } from "react";

/**
 * 位置コンポーネント
 * @param props { string, UseFormRegister<FormType>, Dispatch<SetStateAction<string>> }
 * @returns Position { EmotionJSX.Element }
 */
export const Position = (props: {
        potision: string,
        register: UseFormRegister<FormType>,
        setPosition: Dispatch<SetStateAction<string>>
    }) => {

    /** 位置の値変更時のハンドラ */
    // TODO: formのonChangeを共通化する
    const handlePosition = (
        _event: React.MouseEvent<HTMLElement>,
        newAlignment: string | null,
      ) => {
        if (newAlignment !== null) {
            props.setPosition(newAlignment);
        }
    };

    return(
        <>
            <label css={labelStyle}>
                <small>位置</small>
            </label>
            <ToggleButtonGroup
                css={formMarginStyle}
                exclusive
                fullWidth
                id='position'
                onChange={handlePosition}
                size='small'
                value={props.potision}
            >
                <ToggleButton
                    aria-label='0'
                    css={selectBoxStyle}
                    value='0'
                >
                    <span>指定無し</span>
                </ToggleButton>
                <ToggleButton
                    css={selectBoxStyle}
                    value='1'
                    aria-label='1'
                >
                    <span>接頭</span>
                </ToggleButton>
                <ToggleButton
                    css={selectBoxStyle}
                    value='2'
                    aria-label='2'
                >
                    <span>接尾</span>
                </ToggleButton>
            </ToggleButtonGroup>
        </>
    );
}
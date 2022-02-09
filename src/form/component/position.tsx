/** サードパーティーライブラリ */
/** @jsxImportSource @emotion/react */
import { UseFormRegister } from "react-hook-form";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";

/** ローカルライブラリ */
import { formMargin, labelStyle, selectBox } from "../common/formStyle";
import { FormData } from './../common/formData';

/**
 * 位置のコンポーネント
 */
export const Position = (props: { register: UseFormRegister<FormData>, potision: string, setPosition: any }) => {

    /** 位置の選択変更 */
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
            <label css={labelStyle}><small>位置</small></label>
            <ToggleButtonGroup
                fullWidth
                exclusive
                size='small'
                css={formMargin}
                onChange={handlePosition}
                value={props.potision}
                id='position'
            >
                <ToggleButton
                    css={selectBox}
                    value='0'
                    aria-label='0'
                >
                    <span>指定無し</span>
                </ToggleButton>
                <ToggleButton
                    css={selectBox}
                    value='1'
                    aria-label='1'
                >
                    <span>接頭</span>
                </ToggleButton>
                <ToggleButton
                    css={selectBox}
                    value='2'
                    aria-label='2'
                >
                    <span>接尾</span>
                </ToggleButton>
            </ToggleButtonGroup>
        </>
    );
}
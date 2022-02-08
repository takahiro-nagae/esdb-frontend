/** @jsxImportSource @emotion/react */

import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { useState } from "react";
import { UseFormRegister } from "react-hook-form";
import { formMargin, labelStyle, selectBox } from "../common/formStyle";
import { FormData } from './../common/formData';

/**
 * 位置のコンポーネント
 */
export const Position = (props: { register: UseFormRegister<FormData> }) => {
    /** 位置の現在地：初期値は指定無し */
    const [potision, setPosition] = useState('0');

    /** 位置の選択変更 */
    const handlePosition = (
        _event: React.MouseEvent<HTMLElement>,
        newAlignment: string | null,
      ) => {
        if (newAlignment !== null) {
            setPosition(newAlignment);
            props.register('position');
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
                value={potision}
                id='position'
                { ...props.register('position') }
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
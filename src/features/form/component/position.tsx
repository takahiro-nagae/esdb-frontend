/** @jsxImportSource @emotion/react */
import { UseFormRegister } from 'react-hook-form';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import { formMarginStyle, labelStyle, selectBoxStyle } from '../common/style/formStyle';
import { SearchFormInterface } from '../common/interface/searchFormInterface';
import React, { Dispatch, SetStateAction } from 'react';

/**
 * 位置コンポーネント
 * @param props { string, UseFormRegister<SearchFormInterface>, Dispatch<SetStateAction<string>> }
 * @returns Position { EmotionJSX.Element }
 */
export const Position = (props: {
    position: string,
    register: UseFormRegister<SearchFormInterface>,
    setPosition: Dispatch<SetStateAction<string>>
}) => {

    /** 位置の値変更時のハンドラ */
    const handlePosition = (
        _event: React.MouseEvent<HTMLElement>,
        newAlignment: string | null
    ) => {
        if ( newAlignment !== null ) {
            props.setPosition(newAlignment);
        }
    };

    return (
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
                value={props.position}
            >
                <ToggleButton
                    aria-label='0'
                    css={selectBoxStyle}
                    value='0'
                >
                    <span>指定無し</span>
                </ToggleButton>
                <ToggleButton
                    aria-label='1'
                    css={selectBoxStyle}
                    value='1'
                >
                    <span>接頭</span>
                </ToggleButton>
                <ToggleButton
                    aria-label='2'
                    css={selectBoxStyle}
                    value='2'
                >
                    <span>接尾</span>
                </ToggleButton>
            </ToggleButtonGroup>
        </>
    );
};
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useState } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

/**
 * 位置検索コンポーネント
 */
export const PositionForm = (props: {formMargin: any, selectBox: any, labelStyle: any}) => {
    /** 位置の現在地：初期値は指定無し */
    const [positionValue, setPositionValue] = useState('0');

    const handleAlignment = (
        event: React.MouseEvent<HTMLElement>,
        newAlignment: string | null,
      ) => {
        if (newAlignment !== null) {
            setPositionValue(newAlignment);
        }
    };

    return (
        <>
            <label css={props.labelStyle}><small>位置</small></label>
            <ToggleButtonGroup
                fullWidth
                exclusive
                size='small'
                css={props.formMargin}
                onChange={handleAlignment}
                value={positionValue}
                aria-label="position"
            >
                <ToggleButton
                    css={props.selectBox}
                    value="0"
                    aria-label="0"
                >
                    <span>指定無し</span>
                </ToggleButton>
                <ToggleButton
                    css={props.selectBox}
                    value="1"
                    aria-label="1"
                >
                    <span>接頭</span>
                </ToggleButton>
                <ToggleButton
                    css={props.selectBox}
                    value="2"
                    aria-label="2"
                >
                    <span>接尾</span>
                </ToggleButton>
            </ToggleButtonGroup>
        </>
    );
}
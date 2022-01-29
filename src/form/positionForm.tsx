import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useState } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

/**
 * 位置検索コンポーネント
 */
export const PositionForm = (props: {formMargin: any, selectBox: any, labelStyle: any}) => {
    const [alignment, setAlignment] = useState('left');

    const handleAlignment = (
        event: React.MouseEvent<HTMLElement>,
        newAlignment: string | null,
      ) => {
        if (newAlignment !== null) {
          setAlignment(newAlignment);
        }
    };

    return (
        <>
            <label css={props.labelStyle}><small>位置</small></label>
            <ToggleButtonGroup
                value={alignment}
                exclusive
                size='small'
                onChange={handleAlignment}
                fullWidth
                aria-label="text alignment"
                css={props.formMargin}
            >
            <ToggleButton
                value="left"
                aria-label="left aligned"
                css={props.selectBox}
                >
                    <span>指定無し</span>
            </ToggleButton>
            <ToggleButton
                value="center"
                aria-label="centered"
                css={props.selectBox}>
                    <span>接頭</span>
            </ToggleButton>
            <ToggleButton
                value="right"
                aria-label="right aligned"
                css={props.selectBox}>
                    <span>接尾</span>
            </ToggleButton>
            </ToggleButtonGroup>
        </>
    );
}
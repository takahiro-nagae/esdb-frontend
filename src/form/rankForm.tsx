import { Grid, TextField } from "@material-ui/core";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useState } from "react";
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export const RankForm = (props: {formMargin: any, selectBox: any, labelStyle: any}) => {
    const [alignment, setAlignment] = useState('left');
    const handleAlignment = (
        event: React.MouseEvent<HTMLElement>,
        newAlignment: string | null,
      ) => {
        if (newAlignment !== null) {
          setAlignment(newAlignment);
        }
    };

    return(
        <>
            <label css={props.labelStyle} ><small>ランク</small></label>
            <Grid container css={props.formMargin}>
                <Grid item xs={4}>
                    <TextField
                    css={props.formMargin}
                    size="small"
                    variant="outlined"
                    select
                    fullWidth
                    />
                </Grid>
                <Grid item xs={1} />
                <Grid item xs={7}>
                    <ToggleButtonGroup
                        value={alignment}
                        exclusive
                        size="small"
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
                            <span>一致</span>
                    </ToggleButton>
                    <ToggleButton
                        value="center"
                        aria-label="centered"
                        css={props.selectBox}>
                            <span>以上</span>
                    </ToggleButton>
                    <ToggleButton
                        value="right"
                        aria-label="right aligned"
                        css={props.selectBox}>
                            <span>以下</span>
                    </ToggleButton>
                    </ToggleButtonGroup>
                </Grid>
            </Grid>
        </>
    );
}
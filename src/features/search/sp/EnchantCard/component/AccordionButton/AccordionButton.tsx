/** @jsxImportSource @emotion/react */
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { accIcon } from "./style/AccordionButton";
import { Dispatch, SetStateAction } from "react";
import { IconButton } from '@mui/material';

export const AccordionButton = (props: {open: boolean, setOpen: Dispatch<SetStateAction<boolean>>}) => {
    return (
        <IconButton
            aria-label='expand row'
            css={accIcon}
            onClick={() => props.setOpen(!props.open)}
        >
            {props.open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
        </IconButton>
    );
};
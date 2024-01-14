/** @jsxImportSource @emotion/react */
import { KeyboardDoubleArrowUp } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { animateScroll } from "react-scroll/modules";
import { topIcon } from "./style/ScrollTopButtonStyle";

export const ScrollTopButton = () => {
    return (
        <IconButton
            aria-label="scroll to top"
            color="secondary"
            css={topIcon}
            onClick= {() => animateScroll.scrollToTop()}
        >
            <KeyboardDoubleArrowUp sx={{ fontSize: 40 }}/>
        </IconButton>
    );
};
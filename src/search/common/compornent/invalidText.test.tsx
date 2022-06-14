import renderComponent from "../../../tesetLib/render";
import React from "react";
import { InvalidText } from "./invalidText";
import { screen } from "@testing-library/react";

const rendering = (invalidTargetFlg: string) => renderComponent(<InvalidText invalidTargetFlg={invalidTargetFlg}/>);

describe('invalidText', () => {

    const nonInvalid = '0';
    const invalid = '1';

    const expectMessage = '貼付不可'

    test('貼付可能', () => {
        rendering(nonInvalid);
        expect(screen.queryByText(expectMessage)).toBeNull();
    });

    test('貼付不可', () => {
        rendering(invalid);

        const result = screen.getByText(expectMessage);

        expect(result).toBeInTheDocument();
        expect(result).toHaveStyle('color:#f00;fontWeight:bold');
    });
});

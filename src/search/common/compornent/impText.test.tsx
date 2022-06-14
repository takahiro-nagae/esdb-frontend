import renderComponent from "../../../tesetLib/render";
import React from "react";
import { ImpText } from "./impText";
import { screen } from "@testing-library/react";

const rendering = (impFlg: string) => renderComponent(<ImpText impFlg={impFlg}/>);

describe('impText', () => {

    const notImpVal = '0';
    const impVal = '1';

    const expectMessage = '未実装'

    test('エンチャントが実装されていない', () => {
        rendering(notImpVal);

        const result = screen.getByText(expectMessage);

        expect(result).toBeInTheDocument();
        expect(result).toHaveStyle('color:#f00;fontWeight:bold');
    });

    test('エンチャントが実装されている', () => {
        rendering(impVal);
        expect(screen.queryByText(expectMessage)).toBeNull();
    });
});

import renderComponent from "../../../tesetLib/render";
import React from "react";
import { Loading } from "./loading";
import { screen } from "@testing-library/react";


const rendering = (isLoading: boolean, backGroundColorStr?: string) => {
    renderComponent(<Loading isLoading={isLoading} backGroundColorStr={backGroundColorStr}/>);
};

describe('loading', () => {

    const testId = 'loading';

    test('ローディング完了時の確認', () => {
        rendering(true, undefined);
        expect(screen.queryByTestId('loading')).toBeNull();
    });

    test('デフォルトスタイルのローディング', () => {
        rendering(false, undefined);

        const result = screen.getByTestId(testId);

        expect(result).toBeInTheDocument();
        expect(result).toHaveStyle('background-color:#27292D;');
    });


    test('カラーを指定したローディング', () => {
        const colorCode = '#f00'

        rendering(false, colorCode);

        const result = screen.getByTestId(testId);

        expect(result).toBeInTheDocument();
        expect(result).toHaveStyle(`background-color:${colorCode};`);
    });
});


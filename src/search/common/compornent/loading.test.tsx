import renderComponent from "../../../tesetLib/render";
import React from "react";
import { Loading } from "./loading";
import { screen } from "@testing-library/react";
import { loadingCheck, notExistTestForTestId } from "../../../tesetLib/commonTesting";


const rendering = (isLoading: boolean, backGroundColorStr?: string) => {
    renderComponent(<Loading isLoading={isLoading} backGroundColorStr={backGroundColorStr}/>);
};

describe('loading', () => {

    const testId = 'loading';

    test('ローディング完了時の確認', () => {
        rendering(true, undefined);
        notExistTestForTestId(testId);
    });

    test('デフォルトスタイルのローディング', () => {
        rendering(false, undefined);

        const result = screen.getByTestId(testId);

        loadingCheck(testId, '#27292D');
    });


    test('カラーを指定したローディング', () => {
        const colorCode = '#f00'

        rendering(false, colorCode);

        loadingCheck(testId, colorCode);
    });
});


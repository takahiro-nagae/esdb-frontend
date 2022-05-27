import React from "react";
import TestRenderer from 'react-test-renderer';
import { SearchFormContainer } from "./searchFormContainer";
import { BrowserRouter } from "react-router-dom";
import renderComponent from "../tesetLib/render";
import { testingInputInitialValForGetByLabelText, testingInputValForGetByLabelText } from "../tesetLib/commonTesting";
import { screen } from "@testing-library/react";

const rendering = () => {
    renderComponent(<BrowserRouter><SearchFormContainer/></BrowserRouter>);
};

test('snapshot test', () => {
    const ss = TestRenderer.create(<BrowserRouter><SearchFormContainer/></BrowserRouter>).toJSON();
    expect(ss).toMatchSnapshot();
});

describe('component test', () => {
    describe('エンチャント名', () => {
        const labelName = 'エンチャント名';

        test('初期値の確認', () => {
            rendering();
            testingInputInitialValForGetByLabelText(labelName, '');
        });

        test('なんでも入力できるか確認', () => {
            rendering();
            testingInputValForGetByLabelText(
                labelName,
                '1１@＃Qdあイｳ江🌍',
                '1１@＃Qdあイｳ江🌍'
            );
        });
    });

    describe('効果', () => {
        // 通信していないので値の変更確認が行えない
        // 将来的にはテストしたいが値が入ってるかどうかは手動でもよさそう
        const testID = 'effect';

        test('初期値の確認', () => {
            rendering();
            const sourceInput = screen.getByTestId(testID).childNodes[0].childNodes[0];
            expect(sourceInput.textContent).toBe('効果');
        });
    });

    describe('値', () => {
        const labelName = '値';

        test('初期値の確認', () => {
            rendering();
            testingInputInitialValForGetByLabelText(labelName, '');
        });

        test('入力は数値のみ可能であるか確認', () => {
            rendering();
            testingInputValForGetByLabelText(
                labelName,
                '1１@＃Qdあイｳ江🌍',
                '1'
            );
        });
    });
});



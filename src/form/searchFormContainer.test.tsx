import React from "react";
import TestRenderer from 'react-test-renderer';
import { SearchFormContainer } from "./searchFormContainer";
import { BrowserRouter } from "react-router-dom";
import renderComponent from "../tesetLib/render";
import { selectValName, testingInputValForGetByLabelText } from "../tesetLib/commonTesting";

const rendering = () => {
    return renderComponent(<BrowserRouter><SearchFormContainer/></BrowserRouter>);
};

const BUTTON_INDEX = {
    Effect: 0,
    Range: 1,
    PositionNone: 2,
    PositionPrefix: 3,
    PositionSuffix: 4,
    Rank: 5,
    RankEqual: 6,
    RankGreaterThan: 7,
    RankLessThan: 8,
    Target: 9
} as const;

test('snapshot test', () => {
    const ss = TestRenderer.create(<BrowserRouter><SearchFormContainer/></BrowserRouter>).toJSON();
    expect(ss).toMatchSnapshot();
});

describe('component test', () => {
    describe('エンチャント名', () => {
        const labelName = 'エンチャント名';

        test('なんでも入力できるか確認', async () => {
            rendering();
            await testingInputValForGetByLabelText(
                labelName,
                '1１@＃Qdあイｳ江🌍',
                '1１@＃Qdあイｳ江🌍'
            );
        });
    });

    describe('値', () => {
        const labelName = '値';

        test('入力は数値のみ可能であるか確認', async () => {
            rendering();
            await testingInputValForGetByLabelText(
                labelName,
                '1１@＃Qdあイｳ江🌍',
                '1'
            );
        });
    });

    describe('効果の範囲', () => {
        const buttonTestID = 'range';
        const inputTestId = 'rangeInput'

        test('1番目の値を選択', async () => {
            rendering();

            await selectValName(
                BUTTON_INDEX.Range,
                inputTestId,
                buttonTestID,
                '',
                '​',
                0
            );
        });

        test('2番目の値を選択', async () => {
            rendering();

            await selectValName(
                BUTTON_INDEX.Range,
                inputTestId,
                buttonTestID,
                '1',
                '以上',
                1
            );
        });

        test('3番目の値を選択', async () => {
            rendering();

            await selectValName(
                BUTTON_INDEX.Range,
                inputTestId,
                buttonTestID,
                '2',
                '以下',
                2
            );
        });
    });
});



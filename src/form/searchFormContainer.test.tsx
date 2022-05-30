import React from "react";
import TestRenderer from 'react-test-renderer';
import { SearchFormContainer } from "./searchFormContainer";
import { BrowserRouter } from "react-router-dom";
import renderComponent from "../tesetLib/render";
import { testingInputInitialValForGetByLabelText, testingInputValForGetByLabelText } from "../tesetLib/commonTesting";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const rendering = () => {
    return renderComponent(<BrowserRouter><SearchFormContainer/></BrowserRouter>);
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

    describe('効果の範囲', () => {
        const testID = 'range';

        test('初期値の確認', () => {
            rendering();
            const sourceInput = screen.getByTestId(testID).childNodes[0].childNodes[0];
            // ゼロ幅スペースを消したい・・・
            expect(sourceInput.textContent).toBe('​');
        });

        test('1番目の値を選択', async () => {
            rendering();

            const vatSelectTextField = screen.getAllByRole('button')[1] as HTMLDivElement;

            setTimeout(async () => {
                userEvent.click(vatSelectTextField);
                const options = await screen.findAllByRole('option');
                userEvent.click(options[0]);

                const vatSelectInput = screen.getByTestId('rangeInput') as HTMLInputElement;
                const sourceInput = screen.getByTestId(testID).childNodes[0].childNodes[0];

                expect(vatSelectInput.value).toEqual('');
                expect(sourceInput.textContent).toBe('指定なし');
            }, 10);
        });

        test('2番目の値を選択', async () => {
            rendering();

            const vatSelectTextField = screen.getAllByRole('button')[1] as HTMLDivElement;

            setTimeout(async () => {
                userEvent.click(vatSelectTextField);
                const options = await screen.findAllByRole('option');
                userEvent.click(options[1]);

                const vatSelectInput = screen.getByTestId('rangeInput') as HTMLInputElement;
                const sourceInput = screen.getByTestId(testID).childNodes[0].childNodes[0];

                expect(vatSelectInput.value).toEqual('1');
                expect(sourceInput.textContent).toBe('以上');
            }, 10);
        });

        test('3番目の値を選択', async () => {
            rendering();

            const vatSelectTextField = screen.getAllByRole('button')[1] as HTMLDivElement;

            setTimeout(async () => {
                userEvent.click(vatSelectTextField);
                const options = await screen.findAllByRole('option');
                userEvent.click(options[2]);

                const vatSelectInput = screen.getByTestId('rangeInput') as HTMLInputElement;
                const sourceInput = screen.getByTestId(testID).childNodes[0].childNodes[0];

                expect(vatSelectInput.value).toEqual('2');
                expect(sourceInput.textContent).toBe('以下');
            }, 10);
        });
    });
});



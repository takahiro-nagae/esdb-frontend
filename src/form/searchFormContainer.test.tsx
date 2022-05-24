import React from "react";
import TestRenderer from 'react-test-renderer';
import { SearchFormContainer } from "./searchFormContainer";
import { BrowserRouter } from "react-router-dom";
import { screen } from "@testing-library/react";
import renderComponent from "../tesetLib/render";
import userEvent from "@testing-library/user-event";

test('snapshot test', () => {
    const ss = TestRenderer.create(<BrowserRouter><SearchFormContainer/></BrowserRouter>).toJSON();
    expect(ss).toMatchSnapshot();
});

const rendering = () => {
    renderComponent(<BrowserRouter><SearchFormContainer/></BrowserRouter>);
};

/**
 * @param labelText { string }
 * @param expected { string }
 */
const testingInputInitialValForGetByLabelText = (labelText: string, expected: string) => {
    const input: HTMLInputElement = screen.getByLabelText(labelText);
    expect(input.value).toBe(expected);
}

/**
 * @param labelText { string }
 * @param types { string }
 * @param expected { string }
 */
const testingInputValForGetByLabelText = async (labelText: string, types: string, expected: string) => {
    const input: HTMLInputElement = screen.getByLabelText(labelText);
    userEvent.type(input, types);
    expect(input.value).toBe(expected);
}

test('エンチャント名', () => {
    testingInputInitialValForGetByLabelText('エンチャント名', '');

});

test('aa', () => {
    testingInputValForGetByLabelText(
        'エンチャント名',
        '1１@＃Qdあイｳ江🌍',
        '1１@＃Qdあイｳ江🌍'
    );
});

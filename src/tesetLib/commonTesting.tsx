import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

/**
 * ラベルに紐づく要素の初期値を確認
 * @param labelText { string }
 * @param expected { string }
 */
export const testingInputInitialValForGetByLabelText = (labelText: string, expected: string) => {
    const input: HTMLInputElement = screen.getByLabelText(labelText);
    expect(input.value).toBe(expected);
}

/**
 * @param labelText { string }
 * @param types { string }
 * @param expected { string }
 */
export const testingInputValForGetByLabelText = (labelText: string, types: string, expected: string) => {
    const input: HTMLInputElement = screen.getByLabelText(labelText);
    userEvent.type(input, types);
    expect(input.value).toBe(expected);
}


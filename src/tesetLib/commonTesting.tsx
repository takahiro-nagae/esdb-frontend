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
export const testingInputValForGetByLabelText = async (labelText: string, types: string, expected: string) => {
    const input: HTMLInputElement = screen.getByLabelText(labelText);
    await userEvent.type(input, types);
    expect(input.value).toBe(expected);
}

/**
 * セレクトボックスの内部値と表示値を確認する
 * opt_clickOptionIndexにインデックスを指定するとoptionを選択した状態を確認できる
 * @param buttonIndex { number }
 * @param inputTestId { string }
 * @param buttonTestID { string }
 * @param expectedVal { string } 内部値の期待値
 * @param expectedName { string } 表示値の期待値
 * @param opt_clickOptionIndex { number | undefined } クリックするオプションのインデックス（未選択はクリック無）
 */
export const selectValName = async (
    buttonIndex: number,
    inputTestId: string,
    buttonTestID: string,
    expectedVal: string,
    expectedName: string,
    opt_clickOptionIndex?: number
) => {
    screen.findAllByRole('button').then((callback) => userEvent.click(callback[buttonIndex]));

    if ( opt_clickOptionIndex ) {
        const options = await screen.findAllByRole('option');
        await userEvent.click(options[opt_clickOptionIndex]);
    }

    const selectInput = screen.getByTestId(inputTestId) as HTMLInputElement;
    expect(selectInput.value).toEqual(expectedVal);

    selectedName_(buttonTestID, expectedName);
}

/**
 * セレクトボックスに設定されている表示値を確認
 * @param testId { string }
 * @param expected { string }
 */
const selectedName_ = (testId: string, expected: string) => {
    const sourceInput = screen.getByTestId(testId).childNodes[0].childNodes[0];
    expect(sourceInput.textContent).toBe(expected);
}

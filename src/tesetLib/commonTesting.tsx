import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

/**
 * 各コンポーネントからtesting-libraryの依存度を下げるためのヘルパークラス
 */

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
 * 初期の押されているか判定及び、クリック後正常に押された判定が動作していることを確認
 * @param buttonIndex { string }
 * @param initialPressed { boolean }
 * @param labelText { string }
 */
export const initialPressedAndAfterClickPressed = async (buttonIndex: number, initialPressed: boolean, labelText: string) => {
    const button = screen.getAllByRole('button')[buttonIndex];

    expect(button.getAttribute('aria-pressed')).toBe(initialPressed.toString());
    expect(button.textContent).toBe(labelText)

    await userEvent.click(button);

    expect(button.getAttribute('aria-pressed')).toBe('true');
}

/**
 * 要素が存在しないことをtestIdで確認
 * @param testId { string }
 */
export const notExistTestForTestId = (testId: string) => {
    expect(screen.queryByTestId(testId)).toBeNull();
}

/**
 * 要素が存在しないことをテキストで確認
 * @param text { string }
 */
export const notExistTestForText = (text: string) => {
    expect(screen.queryByText(text)).toBeNull();
}

/**
 * 赤太文字のメッセージの表示確認
 * @param text { string }
 */
export const dispRedBoldMessage = (text: string) => {
    dispMessage(text);

    const result = screen.getByText(text);
    expect(result).toHaveStyle('color:#f00;fontWeight:bold');
}

export const loadingCheck = (testId: string, colorCode: string) => {
    const result = screen.getByTestId(testId);

    expect(result).toBeInTheDocument();
    expect(result).toHaveStyle(`background-color:${colorCode};`);
};

export const dispTestId = (testID: string) => {
    expect(screen.getByTestId(testID)).toBeInTheDocument();
}

export const dispTestIdExpectText = (testId: string, expected: string) => {
    expect(screen.getByTestId(testId).textContent).toBe(expected);
}

export const dispMessage = (text: string) => {
    expect(screen.getByText(text)).toBeInTheDocument();
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


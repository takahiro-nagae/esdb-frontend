import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

/**
 * 各コンポーネントからtesting-libraryの依存度を下げるためのヘルパークラス
 */

/**
 * 初期の押されているか判定及び、クリック後正常に押された判定が動作していることを確認
 * @param buttonIndex { string }
 * @param initialPressed { boolean }
 * @param labelText { string }
 */
export const initialPressedAndAfterClickPressed = async (
  buttonIndex: number,
  initialPressed: boolean,
  labelText: string,
) => {
  const button = screen.getAllByRole('button')[buttonIndex];

  expect(button.getAttribute('aria-pressed')).toBe(initialPressed.toString());
  expect(button.textContent).toBe(labelText);

  await userEvent.click(button);

  expect(button.getAttribute('aria-pressed')).toBe('true');
};

/**
 * 要素が存在しないことをtestIdで確認
 * @param testId { string }
 */
export const notExistTestForTestId = (testId: string) => {
  expect(screen.queryByTestId(testId)).toBeNull();
};

/**
 * 要素が存在しないことをテキストで確認
 * @param text { string }
 */
export const notExistTestForText = (text: string) => {
  expect(screen.queryByText(text)).toBeNull();
};

/**
 * 赤太文字のメッセージの表示確認
 * @param text { string }
 */
export const dispRedBoldMessage = (text: string) => {
  dispMessage(text);

  const result = screen.getByText(text);
  expect(result).toHaveStyle('color:#f00;fontWeight:bold');
};

export const loadingCheck = (testId: string, colorCode: string) => {
  const result = screen.getByTestId(testId);

  expect(result).toBeInTheDocument();
  expect(result).toHaveStyle(`background-color:${colorCode};`);
};

export const dispTestId = (testID: string) => {
  expect(screen.getByTestId(testID)).toBeInTheDocument();
};

export const dispTestIdExpectText = (testId: string, expected: string) => {
  expect(screen.getByTestId(testId).textContent).toBe(expected);
};

export const dispMessage = (text: string) => {
  expect(screen.getByText(text)).toBeInTheDocument();
};

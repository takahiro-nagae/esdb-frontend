import React from 'react';
import { SearchFormContainer } from './searchFormContainer';
import { BrowserRouter } from 'react-router-dom';
import renderComponent from '../../tesetLib/render';
import { initialPressedAndAfterClickPressed } from '../../tesetLib/commonTesting';

const rendering = () => {
  return renderComponent(
    <BrowserRouter>
      <SearchFormContainer />
    </BrowserRouter>,
  );
};

/**
 * テストに使用するボタンのインデックス番号のみ記載
 */
const BUTTON_INDEX = {
  Range: 1,
  PositionNone: 2,
  PositionPrefix: 3,
  PositionSuffix: 4,
  RankEqual: 6,
  RankGreaterThan: 7,
  RankLessThan: 8,
} as const;

describe('component test', () => {
  describe('位置', () => {
    test('1番目の値を選択', () => {
      rendering();
      initialPressedAndAfterClickPressed(
        BUTTON_INDEX.PositionNone,
        true,
        '指定無し',
      );
    });

    test('2番目の値を選択', () => {
      rendering();
      initialPressedAndAfterClickPressed(
        BUTTON_INDEX.PositionPrefix,
        false,
        '接頭',
      );
    });

    test('3番目の値を選択', () => {
      rendering();
      initialPressedAndAfterClickPressed(
        BUTTON_INDEX.PositionSuffix,
        false,
        '接尾',
      );
    });
  });

  describe('ランクの範囲', () => {
    test('1番目の値を選択', () => {
      rendering();
      initialPressedAndAfterClickPressed(BUTTON_INDEX.RankEqual, true, '一致');
    });

    test('2番目の値を選択', () => {
      rendering();
      initialPressedAndAfterClickPressed(
        BUTTON_INDEX.RankGreaterThan,
        false,
        '以上',
      );
    });

    test('3番目の値を選択', () => {
      rendering();
      initialPressedAndAfterClickPressed(
        BUTTON_INDEX.RankLessThan,
        false,
        '以下',
      );
    });
  });
});

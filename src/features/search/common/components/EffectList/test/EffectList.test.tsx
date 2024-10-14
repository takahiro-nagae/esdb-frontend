import React from 'react';
import * as stories from '../stories/EffectList.stories';
import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/react';
import {
  allItemsData,
  decreaseItemData,
  designatedItemData,
  increaseItemData,
  otherItemData,
} from '../stories/EffectListStoryData';

const {
  NoItems,
  IncreaseItem,
  DecreaseItem,
  DesignatedItem,
  OthersItem,
  AllItems,
} = composeStories(stories);

describe('EffectList', () => {
  const testId = 'effect';

  test('値が全て空', () => {
    render(<NoItems />);
    expect(screen.queryByTestId(testId)).toBeNull();
  });

  test('増加効果の時', () => {
    render(<IncreaseItem />);
    const screenEffect = screen.getByTestId(testId);
    expect(screenEffect.textContent).toBe(increaseItemData.effectName);
  });

  test('減少効果の時', () => {
    render(<DecreaseItem />);
    const screenEffect = screen.getByTestId(testId);
    expect(screenEffect.textContent).toBe(decreaseItemData.effectName);
  });

  test('専用効果の時', () => {
    render(<DesignatedItem />);
    const screenEffect = screen.getByTestId(testId);
    expect(screenEffect.textContent).toBe(designatedItemData.effectName);
  });

  test('その他効果の時', () => {
    render(<OthersItem />);
    const screenEffect = screen.getByTestId(testId);
    expect(screenEffect.textContent).toBe(otherItemData.effectName);
  });

  test('複数の値が渡ってきた時', async () => {
    render(<AllItems />);

    const effectNameArray = allItemsData.effectName.split('@');

    screen.getAllByTestId(testId).map((screenEffect, index) => {
      expect(screenEffect.textContent).toBe(effectNameArray[index]);
    });
  });
});

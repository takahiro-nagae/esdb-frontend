import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { describe, expect, it } from 'vitest';

import * as stories from '../stories/EffectList.stories';
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

  it('値が全て空', () => {
    render(<NoItems />);
    expect(screen.queryByTestId(testId)).toBeNull();
  });

  it('増加効果の時', () => {
    render(<IncreaseItem />);
    const screenEffect = screen.getByTestId(testId);
    expect(screenEffect.textContent).toBe(increaseItemData.name);
  });

  it('減少効果の時', () => {
    render(<DecreaseItem />);
    const screenEffect = screen.getByTestId(testId);
    expect(screenEffect.textContent).toBe(decreaseItemData.name);
  });

  it('専用効果の時', () => {
    render(<DesignatedItem />);
    const screenEffect = screen.getByTestId(testId);
    expect(screenEffect.textContent).toBe(designatedItemData.name);
  });

  it('その他効果の時', () => {
    render(<OthersItem />);
    const screenEffect = screen.getByTestId(testId);
    expect(screenEffect.textContent).toBe(otherItemData.name);
  });

  it('複数の値が渡ってきた時', async () => {
    render(<AllItems />);

    const effectNameArray = allItemsData.effects.map(effect => effect.name);

    screen.getAllByTestId(testId).map((screenEffect, index) => {
      expect(screenEffect.textContent).toBe(effectNameArray[index]);
    });
  });
});

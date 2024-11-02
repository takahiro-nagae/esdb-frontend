import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import * as stories from '../stories/Loading.stories';

describe('Loading', () => {
  const testId = 'loading';

  it('ローディング完了時の確認', () => {
    const { LoadingComplete } = composeStories(stories);
    render(<LoadingComplete />);

    // ローディング完了時は何も表示されない
    expect(screen.queryByTestId(testId)).toBeNull();
  });

  it('ローディング中', () => {
    const { LoadingNow } = composeStories(stories);
    render(<LoadingNow />);

    // ローディング中はローディングが表示される
    expect(screen.getByTestId(testId)).toBeTruthy();
  });
});

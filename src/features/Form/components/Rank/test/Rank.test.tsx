import { composeStories } from '@storybook/react';
import * as stories from '../stories/Rank.stories';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

describe('Rank Component', () => {
  const { Default } = composeStories(stories);

  it('コンポーネントの確認', () => {
    render(<Default />);

    expect(screen.getByText('ランク')).toBeInTheDocument();
  });
});

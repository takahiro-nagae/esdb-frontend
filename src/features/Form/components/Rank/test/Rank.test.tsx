import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import * as stories from '../stories/Rank.stories';

describe('Rank Component', () => {
  const { Default } = composeStories(stories);

  it('コンポーネントの確認', () => {
    render(<Default />);

    expect(screen.getByText('ランク')).toBeInTheDocument();
  });
});

import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';
import * as stories from '../stories/Footer.stories';
import { expect, test } from 'vitest';

test('フッターの文字列確認', async () => {
  const { Default } = composeStories(stories);
  render(<Default />);

  expect(
    screen.getByText('© 2022Kumario All rights reserved'),
  ).toBeInTheDocument();
});

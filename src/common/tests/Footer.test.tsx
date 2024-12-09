import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';

import * as stories from '../stories/Footer.stories';

test('フッターの文字列確認', async () => {
  const { Default } = composeStories(stories);
  render(<Default />);

  expect(
    screen.getByText('© 2022Kumario All rights reserved'),
  ).toBeInTheDocument();
});

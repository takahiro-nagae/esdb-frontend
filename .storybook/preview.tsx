import React from 'react';
import { ThemeProvider } from '@mui/material';

import type { Preview } from '@storybook/react';
import { Theme } from '../src/common/theme/theme';
import { DefaultGlobalStyles } from '../src/common/theme/DefaultGlobalStyles';
import '../src/index.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    Story => (
      <ThemeProvider theme={Theme}>
        <DefaultGlobalStyles />
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default preview;

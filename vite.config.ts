import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default ({ mode }) => {
    return defineConfig({
      plugins: [
        react(),
      ],
      esbuild: {
        jsxInject: `import React from 'react';`,
      },
      build: {
        sourcemap: mode !== 'prod' ? true: false,
      },
      server: {
        port : 3000
      },
    });
  };

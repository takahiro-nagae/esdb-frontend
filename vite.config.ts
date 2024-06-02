import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import env from "vite-plugin-env-compatible";

export default ({ mode }) => {
    return defineConfig({
      plugins: [
        react(),
        env({ prefix: "VITE",  mountedPath: "process.env" })
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

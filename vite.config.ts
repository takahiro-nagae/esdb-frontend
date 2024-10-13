import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import env from 'vite-plugin-env-compatible';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    env({ prefix: 'VITE', mountedPath: 'process.env' }),
    tsconfigPaths(),
  ],
  build: {
    sourcemap: mode !== 'prod' ? true : false,
  },
  server: {
    port: 3000,
  },
}));

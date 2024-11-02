import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
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
  test: {
    globals: true,
    environment: 'happy-dom',
    setupFiles: ['./vitest-setup.ts'],
    include: ['src/**/*.test.{ts,tsx}', 'tests/**/*.test.{ts,tsx}'],
    outputFile: 'test-report/index.html',
    reporters: ['html', 'dot'],
    coverage: {
      enabled: true,
      include: ['src/**/*.{ts,tsx}'],
      exclude: ['**/*.stories.tsx'],
      reportsDirectory: 'test-report/coverage',
      reporter: ['html'],
    },
  },
}));

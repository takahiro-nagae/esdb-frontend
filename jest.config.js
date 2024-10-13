import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  testEnvironment: 'jsdom',
  rootDir: path.resolve(__dirname, './'),
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  transform: {
    '.*\\.(ts)$': 'ts-jest',
    '.*\\.(tsx)$': 'ts-jest',
    '^.+\\.js$': 'babel-jest',
    '^.+\\.jsx$': 'babel-jest',
    '^.+\\.(css)$': 'jest-transform-stub',
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
};

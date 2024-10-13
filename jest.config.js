const path = require('path');

module.exports = {
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

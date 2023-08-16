const path = require('path')

module.exports = {
  testEnvironment: 'jsdom',
  rootDir: path.resolve(__dirname, './'),
  moduleFileExtensions: [
    'js',
    'jsx',
    'ts',
    'tsx'
  ],
  transform: {
    '.*\\.(ts)$': 'ts-jest',
    '.*\\.(tsx)$': 'ts-jest',
    '^.+\\.js$': 'babel-jest',
    '^.+\\.jsx$': 'babel-jest'
  },
  setupFilesAfterEnv: [
    "@testing-library/jest-dom/extend-expect"
  ]
}
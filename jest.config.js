module.exports = {
  bail: 1,
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: [
    'src/pages/**/*.tsx',
    '!src/pages/**/_app.tsx',
    '!src/pages/**/_document.tsx'
  ],
  coverageDirectory: '__tests__/coverage',
  coverageReporters: ['text', 'lcov'],
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy'
  },
  testMatch: ['**/__tests__/**/*.spec.tsx', '**/__tests__/**/**/*.spec.ts'],
  transform: {
    '.(js|jsx|ts|tsx)': 'babel-jest'
  }
}

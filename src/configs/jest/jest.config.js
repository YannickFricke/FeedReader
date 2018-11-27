module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverage: true,
  collectCoverageFrom: [
    'src/ts/**/*.{ts,tsx}',
    '!**/node_modules/**',
    '!**/vendor/**'
  ],
  coverageDirectory: './code-cov/'
};

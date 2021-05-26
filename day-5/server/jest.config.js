
module.exports = {
  verbose: true,
  collectCoverage: false,
  coveragePathIgnorePatterns: ['<rootDir>/src/__tests__/', '<rootDir>/node_modules'],
  coverageReporters: ['json', 'html', 'text'],
  coverageDirectory: 'coverage',
  testRegex: 'src/spec/.*\\.spec\\.js$',
};

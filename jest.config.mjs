export default {
  testEnvironment: 'node',
  transform: {},                 // ESM sin Babel
  collectCoverage: true,         // asegura cobertura siempre
  coverageDirectory: 'coverage',
  coverageReporters: ['json-summary', 'text', 'lcov'] // <-- genera coverage-summary.json
};

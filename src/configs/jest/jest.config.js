module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'node',
	collectCoverage: true,
	collectCoverageFrom: [
		'<rootDir>/src/ts/**/*.{ts,tsx}',
		'!<rootDir>/**/node_modules/**',
		'!<rootDir>/**/vendor/**',
		'!<rootDir>/**/*.stories.tsx'
	],
	coverageDirectory: '<rootDir>/code-cov/',
	rootDir: '../../../',
	roots: [
		'<rootDir>/src/ts/'
	],
	setupFiles: [
		'<rootDir>/src/configs/jest/test-setup.ts',
		'<rootDir>/src/configs/jest/test-shim.js'
	],
	snapshotSerializers: ["enzyme-to-json"],
	testPathIgnorePatterns: [
		'__mocks__/',
		'__stories__'
	]
};

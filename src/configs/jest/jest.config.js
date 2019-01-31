module.exports = {
	preset             : 'ts-jest',
	testEnvironment    : 'node',
	collectCoverage    : true,
	collectCoverageFrom: [
		'<rootDir>/src/ts/**/*.{ts,tsx}',
		'!<rootDir>/src/ts/**/*.story.{ts,tsx}',
		'!<rootDir>/**/node_modules/**',
		'!<rootDir>/**/vendor/**',
		'!<rootDir>/**/*.stories.tsx'
	],
	coverageDirectory: '<rootDir>/code-cov/',
	moduleNameMapper : {
		'electron': '<rootDir>/__mocks__/electron.js'
	},
	rootDir: '../../../',
	roots  : [
		'<rootDir>/src/ts/'
	],
	setupFiles: [
		'<rootDir>/src/configs/jest/test-shim.js'
	],
	setupTestFrameworkScriptFile: 'jest-enzyme',
	testEnvironment             : 'enzyme',
	testEnvironmentOptions      : {
		'enzymeAdapter': 'react16'
	},
	snapshotSerializers   : ['enzyme-to-json'],
	testPathIgnorePatterns: [
		'__mocks__/',
	]
};

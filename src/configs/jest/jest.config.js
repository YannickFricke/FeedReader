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
	testEnvironment             : 'enzyme',
	testEnvironmentOptions      : {
		'enzymeAdapter': 'react16'
	},
	snapshotSerializers   : ['enzyme-to-json/serializer'],
	testPathIgnorePatterns: [
		'__mocks__/',
	],
	transform: {
		'\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/__mocks__/fileTransformer.js'
	}
};

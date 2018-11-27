module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'node',
	collectCoverage: true,
	collectCoverageFrom: [
		'src/ts/**/*.{ts,tsx}',
		'!**/node_modules/**',
		'!**/vendor/**'
	],
	coverageDirectory: './code-cov/',
	setupFiles: [
		'./src/configs/jest/test-setup.ts',
		'./src/configs/jest/test-shim.js'
	],
	snapshotSerializers: ["enzyme-to-json"]
};

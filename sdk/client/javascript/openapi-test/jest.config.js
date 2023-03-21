/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
    verbose: true,
    collectCoverage: true,
    testEnvironment: 'node',
    testRegex: '/test/.*\\.(test|spec)?\\.(js)$',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    "testPathIgnorePatterns": [
        "<rootDir>/test/eth/"
    ]
};

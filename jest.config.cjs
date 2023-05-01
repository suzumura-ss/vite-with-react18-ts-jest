/** @type {import('ts-jest').JestConfigWithTsJest} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const TSConfig = require('tsconfig');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { pathsToModuleNameMapper } = require('ts-jest');
const { compilerOptions } = TSConfig.loadSync('./tsconfig.json').config;
const paths = pathsToModuleNameMapper(compilerOptions.paths, {
  prefix: '<rootDir>/'
});

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  coverageProvider: 'v8',
  moduleNameMapper: {
    '.+\\.(css|style|less|sass|scss)$': 'identity-obj-proxy',
    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/__mocks__/file-mock.js',
    ...paths
  }
};

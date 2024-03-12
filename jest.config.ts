const path = require('node:path')

import type { Config } from 'jest'

const { compilerOptions } = require('./tsconfig')
// const { pathsToModuleNameMapper } = require('ts-jest')

const config: Config = {
  preset: 'ts-jest',
  rootDir: path.resolve(__dirname, '.'),

  modulePaths: [compilerOptions.baseUrl],
  // moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths),
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },

  clearMocks: true,

  moduleFileExtensions: ['js', 'ts', 'json', 'vue'],

  testEnvironment: 'jest-environment-jsdom',
  testEnvironmentOptions: {
    customExportConditions: ['node', 'node-addons']
  },

  testMatch: ['<rootDir>/src/**/*.spec.(js|ts)'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
    '^.+\\.vue$': '@vue/vue3-jest'
  },

  coverageDirectory: '<rootDir>/test/coverage',
  collectCoverageFrom: ['src/views/**/*.{ts,vue}', 'src/components/**/*.{ts,vue}', '!src/**/*.d.ts']
}

export default config

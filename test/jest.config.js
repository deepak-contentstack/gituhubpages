const rootDir = process.cwd()

module.exports = {
  verbose: true,
  rootDir,
  roots: [
    '<rootDir>/src/components'
  ],
  setupFilesAfterEnv: ['<rootDir>/test/jest.setup.ts'],
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  testPathIgnorePatterns: ['node_modules/'],
  modulePathIgnorePatterns: ['__mocks__'],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  collectCoverage: true,
  coverageDirectory: 'coverage',
  collectCoverageFrom: [
    
    '<rootDir>/src/components/**/*.{js,jsx,ts,tsx}',
    //TODO: Change scope of testing in RTE
    '<rootDir>/src/components/RichTextEditor/SuperChargedRte/elements/utils/pasteHtml/deserializer/*.{js,jsx,ts,tsx}',
    '!<rootDir>/src/**/*.stories.tsx',
    '!**/node_modules/**',
    '<rootDir>/src/components/RichTextEditor/SuperChargedRte/elements/Element/align/alignCenter/*.{js,jsx,ts,tsx}',
    '!**/vendor/**'
  ],
  coverageReporters: ['lcov'],
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 60,
      statements: 0
    }
  },
  // coverageReporters: [
  //   "json",
  //   "html"
  // ],
  // testRegex: ['/__tests__/.*.test.(j|t)sx?$', '/.*.test.(j|t)sx?$'],
  testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[tj]s?(x)'],
  moduleNameMapper: {
    // Mocks out all these file formats when tests are run.
    '\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': 'identity-obj-proxy',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '@react-registry': '<rootDir>/src/utils/react-registry/src',
    'components/JsonRTE/lib/requestModule': '<rootDir>/src/components/JsonRTE/lib/requestModule',
    'utils/hooks/depricatedPropsHoc': '<rootDir>/src/utils/hooks/depricatedPropsHoc'
  }
}

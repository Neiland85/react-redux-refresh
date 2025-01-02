export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  moduleNameMapper: {
    '\\.(css|scss|less)$': 'identity-obj-proxy', 
    '\\.(svg|jpg|jpeg|png|gif)$': '<rootDir>/__mocks__/fileMock.ts', 
  },
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
};


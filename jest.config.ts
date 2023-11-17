module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleDirectories: ['node_modules', 'src'],
  transform: {
    '.+\\.ts$': 'ts-jest',
  },
  testMatch: ['<rootDir>/tests/*.(test|spec).ts', '<rootDir>/tests/**/*.(test|spec).ts'],
  moduleNameMapper: {
    '@configs/(.*)': '<rootDir>/src/configs/$1',
    '@routers/(.*)': '<rootDir>/src/routers/$1',
    '@controllers/(.*)': '<rootDir>/src/controllers/$1',
    '@services/(.*)': '<rootDir>/src/services/$1',
    '@repositories/(.*)': '<rootDir>/src/repositories/$1',
    '@middlewares/(.*)': '<rootDir>/src/middlewares/$1',
    '@schemas/(.*)': '<rootDir>/src/schemas/$1',
    '@errors/(.*)': '<rootDir>/src/errors/$1',
    '@utils/(.*)': '<rootDir>/src/utils/$1',
    '@protocols/(.*)': '<rootDir>/src/protocols/$1',
    '@src/(.*)': '<rootDir>/src/$1',
    '@tests/factories/(.*)': ['<rootDir>/tests/factories/$1'],
  },
};

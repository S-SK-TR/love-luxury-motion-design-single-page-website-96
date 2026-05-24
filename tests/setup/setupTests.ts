import '@testing-library/jest-dom';
import { beforeAll, afterEach, afterAll } from 'vitest';
import { cleanup } from '@testing-library/react';
import * as matchers from '@testing-library/jest-dom/matchers';

// Vitest için jest-dom matchers'ı genişlet
declare module 'vitest' {
  interface Assertion<T = any> extends jest.Matchers<void, T> {}
  interface AsymmetricMatchersContaining extends jest.AsymmetricMatchers {
    not: jest.AsymmetricMatchers
  }
}

expect.extend(matchers);

// Her testten sonra DOM'u temizle
afterEach(() => {
  cleanup();
});

// Eğer mock server gibi global setup/teardown gerekirse buraya eklenebilir.
// beforeAll(() => {});
// afterAll(() => {});

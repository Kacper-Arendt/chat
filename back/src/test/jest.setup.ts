import { sleep } from './helperTest';

jest.setTimeout(60000); // in milliseconds

// you can even use the setup/teardown methods
beforeAll(async () => {
  await sleep(3);
});
beforeEach(() => {
  // your code
});
afterEach(() => {
  // your code
});
afterAll(() => {
  // your code
});

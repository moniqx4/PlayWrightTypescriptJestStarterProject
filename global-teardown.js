import { globalTeardown as playwrightGlobalTeardown } from "jest-playwright-preset";

module.exports = async function globalTeardown(globalConfig) {
  // Your global teardown
  await playwrightGlobalTeardown(globalConfig);
};

// mytest.spec.js
// 1. Import 'test' from your custom fixtures file, NOT the default one
const { test, expect } = require('../lib/fixtures'); 

test('Simple Login Test', async ({ loginPage }) => {
  // Look! No 'const loginPage = new LoginPage(page)' anymore.
  // Playwright injected it automatically!

  // 2. Go to the website
  await loginPage.goto();

  // 3. Do the login
  await loginPage.doLogin('diwas@gmail.com', 'dfaasdfsdaf'); 

  // 4. Check if the error appeared
  await expect(loginPage.errorMsg).toBeVisible();
});
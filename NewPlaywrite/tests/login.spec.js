// mytest.spec.js
const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage'); // Import your remote control

test('Simple Login Test', async ({ page }) => {
  test.setTimeout(100000);
  // 1. Switch on the remote
  const loginPage = new LoginPage(page);

  // 2. Go to the website
  await loginPage.goto();

  // 3. Do the login (pass the email and password here)
  await loginPage.doLogin('diwas@gmail.com', 'dfaasdfsdaf');
  // 4. Check if the error appeared
  await expect(loginPage.errorMsg).toBeVisible();
});


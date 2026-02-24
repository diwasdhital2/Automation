// lib/fixtures.js
const base = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');

// 1. Extend the base test to include our Page Objects
exports.test = base.test.extend({
  // Define a fixture name 'loginPage'
  loginPage: async ({ page }, use) => {
    // 2. Set up the fixture (The "Before" part)
    const loginPage = new LoginPage(page);
    
    // 3. Provide the fixture to the test
    await use(loginPage);
    
    // (Optional) You can add "After" logic here if needed
  },
});

exports.expect = base.expect;
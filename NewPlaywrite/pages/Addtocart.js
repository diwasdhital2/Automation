const { expect } = require('@playwright/test');
exports.Addtocart = class Addtocart {
    constructor (page) {
        this.page = page ;

        this.product=page.getByRole('link', { name: ' Products' });
        this.selectproduct= page.await page.getByRole('link', { name: '(6) Polo' });
        this.addcart= page.getByRole('link', { name: ' Add to cart' });
    }
}




// import { test, expect } from '@playwright/test';
// test('test', async ({ page }) => {
//   await page.goto('https://automationexercise.com/');
//   await page.getByRole('link', { name: ' Products' }).click();
//   await page.locator('.panel-heading').first().click();
//   await page.getByRole('link', { name: '(6) Polo' }).click();
//   await page.getByRole('link', { name: ' Add to cart' }).nth(3).click();
//   await expect(page.getByText('Your product has been added')).toBeVisible();
//   await expect(page.getByRole('button', { name: 'Continue Shopping' })).toBeVisible();
// });



//
const { expect } = require('@playwright/test');

exports.LoginPage = class LoginPage {
 
  constructor(page) {
    this.page = page;
    
    // 1. Define your "Buttons" (Locators) here
    this.locationBtn = page.getByRole('button', { name: 'Kathmandu' });
    this.signInBtn = page.getByRole('button', { name: 'Sign in' });
    this.emailBox = page.getByRole('textbox', { name: 'Email' });
    this.passwordBox = page.getByRole('textbox', { name: 'Password' });
    this.submitBtn = page.getByRole('button', { name: 'Sign In' });
    this.errorMsg = page.getByText('please click here to sign up');
  }

  // 2. Define your "Actions" (Methods) here
  async goto() {
    await this.page.goto('https://www.qfxcinemas.com/');
    // waitUntil: 'networkidle'
  }

  async doLogin(email, password) {
    // We group these steps together because they usually happen together
    await this.locationBtn.click();
    await this.signInBtn.click();
    await this.emailBox.fill(email);
    await this.passwordBox.fill(password);
    await this.submitBtn.click();
  }
};
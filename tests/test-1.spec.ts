import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://automationexercise.com/');
  await page.getByRole('link', { name: ' Products' }).click();
  await page.locator('.panel-heading').first().click();
  await page.getByRole('link', { name: '(6) Polo' }).click();
  await page.getByRole('link', { name: ' Add to cart' }).nth(3).click();
  await expect(page.getByText('Your product has been added')).toBeVisible();
  await expect(page.getByRole('button', { name: 'Continue Shopping' })).toBeVisible();
});
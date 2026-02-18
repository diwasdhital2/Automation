import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.qfxcinemas.com/');
  await page.getByRole('button', { name: 'Kathmandu' }).click();
  await page.getByRole('button', { name: 'Sign in' }).click();
  await expect(page.getByRole('dialog').getByText('Sign in', { exact: true })).toBeVisible();
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('d');
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('diwas@gmail.com');
  await page.getByRole('textbox', { name: 'Email' }).press('Enter');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('dfaasdfsdaf');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByRole('button', { name: 'Sign In' }).click();
  await expect(page.getByText('please click here to sign up')).toBeVisible();
  // await expect(page.getByText('Login failed')).toBeVisible();
});
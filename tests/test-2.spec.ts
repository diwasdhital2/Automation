import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://remoteaxle.com/');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('textbox', { name: 'Email' }).dblclick();
  await page.getByRole('textbox', { name: 'Email' }).fill('example@test.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('aaaab');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByText('StudentTeacher').click();
  await page.getByRole('button', { name: 'Log in' }).click();
  await expect(page.getByLabel('Student').getByText('Do not have an account yet?')).toBeVisible();
});
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.qfxcinemas.com/');
  
  await page.getByRole('button', { name: 'Kathmandu' }).click();
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.getByText('SIGN UP').click();
  await page.getByPlaceholder('Enter your phone number').click();
  await page.getByPlaceholder('Enter your phone number').fill('9847110033');
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('bhumee@gmail.com');
  await page.getByRole('textbox', { name: 'Date Of Birth' }).fill('2004-02-14');
  await page.getByRole('textbox', { name: 'First Name' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).fill('Bhumee');
  await page.getByRole('textbox', { name: 'Last Name' }).click();
  await page.getByRole('textbox', { name: 'Last Name' }).fill('Aryal');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('button', { name: 'Confirm' }).click();
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('hhhhhhhhhhhhhhhh');
  await page.getByRole('checkbox', { name: 'I agree to all Terms &' }).check();
  await page.getByRole('button', { name: 'Confirm' }).click();
});
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.qfxcinemas.com/');
  await page.getByRole('button', { name: 'Kathmandu' }).click();
  await page.getByText('Buy NowU').nth(2).click();
  await page.getByText('All').nth(1).click();
  await page.getByRole('article').filter({ hasText: /^Rising Mall$/ }).click();
  await page.getByText('City Square Mall').click();
  await page.getByText('Civil Mall').click();
  await page.getByText('Labim Mall').click();
  await page.getByText('Chhaya Center').click();
  await page.getByText('Bhatbhateni Bhaktapur').click();
  await page.getByText('Nepali', { exact: true }).click();
  await page.getByText('03:30 PM').click();
  await page.locator('tr:nth-child(7) > td:nth-child(2) > table > tr > td:nth-child(8) > .seat_cell > img').click();
  await page.locator('td:nth-child(8) > .seat_cell > img').first().click();
  await page.locator('td:nth-child(10) > .seat_cell').first().click();
  await page.getByRole('main').getByRole('button', { name: 'Buy Now' }).click();
  await page.getByRole('checkbox', { name: 'I agree to the terms and' }).check();
});
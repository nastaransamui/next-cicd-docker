import { test, expect } from '@playwright/test';
test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:7000');
});
test('Hero visible elements', async ({ page }) => {
  await expect(
    page.getByRole('heading', { name: "Let's travel and explore" })
  ).toBeVisible();
  await expect(page.getByText('Discover amazing places at')).toBeVisible();
  await expect(page.getByText('KeywordDestinationWhere to?')).toBeVisible();
  await expect(page.getByText('Keyword')).toBeVisible();
  await expect(page.getByText('Destination', { exact: true })).toBeVisible();
  await expect(page.getByText('Check in - Check out')).toBeVisible();
  await expect(
    page.getByPlaceholder('Type your keyword here...')
  ).toBeVisible();
  await expect(
    page
      .locator('div')
      .filter({ hasText: /^DestinationWhere to\?Where to\?$/ })
      .getByRole('combobox')
  ).toBeVisible();
  await expect(
    page
      .locator('div')
      .filter({ hasText: /^Check in - Check out12$/ })
      .getByRole('combobox')
  ).toBeVisible();
  await expect(
    page.locator('.main-wrapper > .hero-section > .absolute > .object-cover')
  ).toBeVisible();
});

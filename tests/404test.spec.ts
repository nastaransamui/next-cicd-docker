import { test, expect } from '@playwright/test';
import { getCookie } from 'cookies-next';

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:7000/notfount');
});

test.describe('All elements of 404 page should visible and can go back home', () => {
  test('If show cookies should close', async ({ page }) => {
    if (typeof getCookie('acceptCookies') == 'undefined') {
      await page.getByTestId('close-cookies').click();
    }
    await expect(page.locator('header').first()).toBeVisible();
    await expect(
      page
        .locator('section')
        .filter({ hasText: 'Error 404Home>Error' })
        .locator('div')
        .first()
    ).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Error' })).toBeVisible();
    await expect(page.getByText('Home>Error')).toBeVisible();
    await expect(
      page
        .locator('section')
        .filter({ hasText: "404Oops! It looks like you're" })
        .locator('img')
    ).toBeVisible();
    await expect(
      page.getByRole('heading', { name: '404', exact: true })
    ).toBeVisible();
    await expect(
      page.getByRole('heading', { name: "Oops! It looks like you're" })
    ).toBeVisible();
    await expect(page.getByText("The page you're looking for")).toBeVisible();
    await page.getByRole('link', { name: 'Go back to Home' }).first().click();
    await page.waitForTimeout(1000);
    await expect(page).toHaveURL(/.*en/);
  });
});

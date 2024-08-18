import { test, expect } from '@playwright/test';
import { getCookie } from 'cookies-next';

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:7000');
});
test.describe('Footer have all elements and on click should go to correct link', () => {
  test('Footer has visible elements', async ({ page }) => {
    if (typeof getCookie('acceptCookies') == 'undefined') {
      await page.getByTestId('close-cookies').click();
      await page.waitForTimeout(1000);
    }
    await expect(page.locator('.inline-block')).toBeVisible();
    await expect(page.getByTestId('footer-subtitle')).toBeVisible();
    await expect(page.locator('.w-8').first()).toBeVisible();
    await expect(page.locator('li:nth-child(2) > .w-8')).toBeVisible();
    await expect(page.locator('li:nth-child(3) > .w-8')).toBeVisible();
    await expect(page.locator('li:nth-child(4) > .w-8')).toBeVisible();
    await expect(page.getByTestId('quick-links')).toBeVisible();
    await expect(page.getByTestId('footer-contact-header')).toBeVisible();
    await expect(page.getByTestId('footer-gallery-header')).toBeVisible();
    await expect(
      page.locator('li').filter({ hasText: 'About Us' })
    ).toBeVisible();
    await expect(
      page.getByRole('contentinfo').locator('li').filter({ hasText: 'Tour' })
    ).toBeVisible();
    await expect(
      page
        .getByRole('contentinfo')
        .locator('li')
        .filter({ hasText: 'Destinations' })
    ).toBeVisible();
    await expect(
      page.getByRole('contentinfo').locator('li').filter({ hasText: 'Blog' })
    ).toBeVisible();
    await expect(
      page.locator('li').filter({ hasText: 'Contact Us' })
    ).toBeVisible();
    await expect(
      page.getByRole('heading', { name: 'Contact Us' })
    ).toBeVisible();
    await expect(page.getByTestId('footer-address')).toBeVisible();
    await expect(page.getByTestId('footer-tell')).toBeVisible();
    await expect(page.getByTestId('footer-email')).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Gallery' })).toBeVisible();
    await expect(page.locator('.grid > div > .absolute').first()).toBeVisible();
    await expect(page.locator('div:nth-child(2) > .absolute')).toBeVisible();
    await expect(page.locator('div:nth-child(3) > .absolute')).toBeVisible();
    await expect(page.locator('div:nth-child(4) > .absolute')).toBeVisible();
    await expect(
      page.locator('.grid > div:nth-child(5) > .absolute')
    ).toBeVisible();
    await expect(page.locator('div:nth-child(6) > .absolute')).toBeVisible();
    await expect(page.locator('div:nth-child(7) > .absolute')).toBeVisible();
    await expect(page.locator('div:nth-child(8) > .absolute')).toBeVisible();
  });

  test('Footer links should work', async ({ page }) => {
    if (typeof getCookie('acceptCookies') == 'undefined') {
      await page.getByTestId('close-cookies').click();
      await page.waitForTimeout(1000);
    }
    await page.getByTestId('footer-about').click();
    await expect(page).toHaveURL(/.*about/);
    await page.getByTestId('footer-tour').click();
    await expect(page).toHaveURL(/.*tour/);
    await page.getByTestId('footer-destination').click();
    await expect(page).toHaveURL(/.*destination/);
    await page.getByTestId('footer-blog').click();
    await expect(page).toHaveURL(/.*blog/);
    await page.getByTestId('footer-contact').click();
    await expect(page).toHaveURL(/.*contact/);
    await page.locator('.grid > div > .absolute').first().click();
    await expect(page).toHaveURL(/.*gallery/);
    await page.locator('div:nth-child(2) > .absolute').first().click();
    await expect(page).toHaveURL(/.*gallery/);
    await page.locator('div:nth-child(3) > .absolute').first().click();
    await expect(page).toHaveURL(/.*gallery/);
    await page.locator('div:nth-child(4) > .absolute').first().click();
    await expect(page).toHaveURL(/.*gallery/);
    await page.locator('.grid > div:nth-child(5) > .absolute').first().click();
    await expect(page).toHaveURL(/.*gallery/);
    await page.locator('div:nth-child(6) > .absolute').first().click();
    await expect(page).toHaveURL(/.*gallery/);
    await page.locator('div:nth-child(7) > .absolute').first().click();
    await expect(page).toHaveURL(/.*gallery/);
    await page.waitForTimeout(1000);
    await page.locator('div:nth-child(8) > .absolute').first().click();
    await expect(page).toHaveURL(/.*gallery/);
  });
});

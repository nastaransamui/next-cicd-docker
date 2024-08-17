import { test, expect } from '@playwright/test';
import { getCookie } from 'cookies-next';
test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:7000');
});

test.describe('Top Destination visible and link', () => {
  test('Top Destination visible elements', async ({ page }) => {
    await expect(
      page.getByRole('heading', { name: 'Top destinations' })
    ).toBeVisible();
    await expect(page.locator('#subtitle')).toBeVisible();
    await expect(page.locator('#firstTour')).toBeVisible();
    await expect(page.locator('#secondTour')).toBeVisible();
    await expect(page.locator('#thirdTour')).toBeVisible();
    await expect(page.locator('#forthTour')).toBeVisible();
    await expect(page.locator('#fifthTour')).toBeVisible();
    await expect(page.locator('#sixthTour')).toBeVisible();
  });

  test("Click on destination link and redirect to '/destination-details' ", async ({
    page,
  }) => {
    if (typeof getCookie('acceptCookies') == 'undefined') {
      await page.getByTestId('close-cookies').click();
      await page.waitForTimeout(1000);
    }
    await page.locator('#firstTour').locator('a').click();
    await expect(page).toHaveURL(/.*destination-details/);
    await page.goto('http://localhost:7000');
    await page.getByTestId('submit-newsletter').click();
    await page.waitForTimeout(1000);
    await page.locator('#secondTour').locator('a').click();
    await expect(page).toHaveURL(/.*destination-details/);
    await page.goto('http://localhost:7000');
    await page.locator('#thirdTour').locator('a').click();
    await expect(page).toHaveURL(/.*destination-details/);
    await page.goto('http://localhost:7000');
    await page.locator('#forthTour').locator('a').click();
    await expect(page).toHaveURL(/.*destination-details/);
    await page.goto('http://localhost:7000');
    await page.locator('#fifthTour').locator('a').click();
    await expect(page).toHaveURL(/.*destination-details/);
    await page.goto('http://localhost:7000');
    await page.locator('#sixthTour').locator('a').click();
    await page.waitForTimeout(500);
    await expect(page).toHaveURL(/.*destination-details/);
  });
});

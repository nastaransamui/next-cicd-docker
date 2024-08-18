import { test, expect } from '@playwright/test';
import { getCookie } from 'cookies-next';
test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:7000');
});

test.describe('Test for first narrow header', () => {
  test('Url should redirect ot current language that is Englishg', async ({
    page,
  }) => {
    await expect(page).toHaveURL(/.*en/);
  });
  test('should have follow us', async ({ page }) => {
    await expect(
      page.locator('div').filter({ hasText: 'Follow us:+66 870 62' }).first()
    ).toBeVisible();
  });

  test('should have facebook icon', async ({ page }) => {
    await expect(
      page
        .locator('div')
        .filter({ hasText: /^Follow us:$/ })
        .getByRole('link')
        .first()
    ).toBeVisible();
  });

  test('should have instagram icon', async ({ page }) => {
    await expect(
      page
        .locator('div')
        .filter({ hasText: /^Follow us:$/ })
        .getByRole('link')
        .nth(1)
    ).toBeVisible();
  });
  test('should have youtube icon', async ({ page }) => {
    await expect(
      page
        .locator('div')
        .filter({ hasText: /^Follow us:$/ })
        .getByRole('link')
        .nth(2)
    ).toBeVisible();
  });

  test('should have contact phone', async ({ page }) => {
    await expect(page.getByRole('link', { name: '+66 870 62' })).toBeVisible();
    await expect(
      page.locator('ul').filter({ hasText: 'English' }).locator('#language')
    ).toBeVisible();
  });

  test('should have language button with English', async ({ page }) => {
    await expect(
      page.locator('ul').filter({ hasText: 'English' }).locator('#language')
    ).toBeVisible();
  });
  test('should have language login button', async ({ page }) => {
    await expect(page.getByRole('link', { name: 'Login' })).toBeVisible();
  });
});

test.describe('Test for main Header', () => {
  test('should have main logo', async ({ page }) => {
    await expect(page.locator('.max-w-\\[150px\\]')).toBeVisible();
  });
  test('should have Home', async ({ page }) => {
    await expect(
      page.getByRole('link', { name: 'Home', exact: true })
    ).toBeVisible();
  });
  test('should have About', async ({ page }) => {
    await expect(page.getByTestId('header-about')).toBeVisible();
  });
  test('should have Destinations', async ({ page }) => {
    await expect(page.getByTestId('header-destination')).toBeVisible();
  });
  test('should have Tour', async ({ page }) => {
    await expect(page.getByTestId('headerTourLink')).toBeVisible();
  });
  test('should have Blog', async ({ page }) => {
    await expect(page.getByTestId('header-blog')).toBeVisible();
  });
  test('should have Hotels', async ({ page }) => {
    await expect(page.getByRole('link', { name: 'Hotels' })).toBeVisible();
  });
  test('should have Pages', async ({ page }) => {
    await expect(page.getByRole('link', { name: 'Pages' })).toBeVisible();
  });
  test('should have Contact', async ({ page }) => {
    await expect(page.getByTestId('header-contact')).toBeVisible();
  });
  test('should have Search icon', async ({ page }) => {
    await expect(page.locator('.search-icon > .bg-primary-900')).toBeVisible();
  });
});

test.describe('Test 3 language', () => {
  test('should click on English Language button open the 3 language', async ({
    page,
  }) => {
    if (typeof getCookie('acceptCookies') == 'undefined') {
      await page.getByTestId('close-cookies').click();
      await page.waitForTimeout(1000);
    }
    await page.locator('ul').locator('div').locator('#language').click();
    await expect(page.locator('#en-button')).toHaveClass(/en-button-active/);
    await expect(page.locator('#cn-button')).toHaveClass(/cn-button-active/);
    await expect(page.locator('#th-button')).toHaveClass(/th-button-active/);
  });
  test('should click on chines button and url change to /cn', async ({
    page,
  }) => {
    if (typeof getCookie('acceptCookies') == 'undefined') {
      await page.getByTestId('close-cookies').click();
      await page.waitForTimeout(1000);
    }
    await page.locator('ul').locator('div').locator('#language').click();
    await page.locator('#cn-button').click();
    await page.waitForTimeout(1000);
    await expect(page).toHaveURL(/.*cn/);
  });

  test('should click on thai button and url change to /th', async ({
    page,
  }) => {
    if (typeof getCookie('acceptCookies') == 'undefined') {
      await page.getByTestId('close-cookies').click();
      await page.waitForTimeout(1000);
    }
    await page.locator('ul').locator('div').locator('#language').click();
    await page.locator('#th-button').click();
    await page.waitForTimeout(1000);
    await expect(page).toHaveURL(/.*th/);
  });
  test('should click on English button and url change to /en', async ({
    page,
  }) => {
    if (typeof getCookie('acceptCookies') == 'undefined') {
      await page.getByTestId('close-cookies').click();
      await page.waitForTimeout(1000);
    }
    await page.locator('ul').locator('div').locator('#language').click();
    await page.locator('#en-button').click();
    await page.waitForTimeout(1000);
    await expect(page).toHaveURL(/.*en/);
  });
});

test.describe('Check cookie acceptance', () => {
  test('if acceptCookies is undefined should show', async ({ page }) => {
    if (typeof getCookie('acceptCookies') == 'undefined') {
      await expect(page.locator('.mfp-content').first()).toBeVisible();
      await page.waitForTimeout(1000);
      await page.getByTestId('close-cookies').click();
      await page.reload();
      await expect(page.locator('.mfp-content').first()).toBeHidden();
    }
  });
});

test.describe('Check newletter popup', () => {
  test('if acceptNewsletter is undefined should show the popup', async ({
    page,
  }) => {
    if (typeof getCookie('acceptCookies') == 'undefined') {
      await page.getByTestId('close-cookies').click();
      await page.waitForTimeout(1000);
      await page.reload();
    }
    if (typeof getCookie('acceptNewsletter') == 'undefined') {
      await expect(page.locator('#newsletter-popup').first()).toBeVisible();
    }
  });

  test('if acceptNewsletter is defined should not show the popup', async ({
    page,
  }) => {
    if (typeof getCookie('acceptCookies') == 'undefined') {
      await page.getByTestId('close-cookies').click();
      await page.waitForTimeout(1000);
      await page.reload();
    }
    if (typeof getCookie('acceptNewsletter') == 'undefined') {
      await expect(page.locator('#newsletter-popup').first()).toBeVisible();
      await page.waitForTimeout(1000);
      await page.getByTestId('submit-newsletter').click();
      await page.reload();
      await expect(page.locator('#newsletter-popup').first()).toBeHidden();
    }
  });
});

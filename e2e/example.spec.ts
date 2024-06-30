import { test, expect } from '@playwright/test';
import dotenv from "dotenv";

dotenv.config({
  path: `.env.${process.env.TEST_ENV}`,
});
console.log(process.env.NEETO_CI_JOB_ID);
console.log(process.env.TAG);
test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

/* eslint-disable testing-library/prefer-screen-queries */
import { test, expect } from '@playwright/test';

test('Happy path', async ({ page }) => {
	await page.goto('http://localhost:3000');

	// Expect a title "to contain" a substring.
	await expect(page).toHaveTitle(/Sleepio/);
	// await expect(page.getByTestId('durationInBed'));

	await page.getByTestId('durationInBed').click();
	await page.getByText('06:00').click();

	await page.getByTestId('durationAsleep').click();
	await page.getByText('03:00').click();

	await page.getByTestId('calculate').click();

	await expect(page.getByText('Loading')).toBeVisible();
	await expect(page.getByText('50')).toBeVisible();
});

test('Sad path', async ({ page }) => {
	await page.goto('http://localhost:3000');

	// Expect a title "to contain" a substring.
	await expect(page).toHaveTitle(/Sleepio/);
	// await expect(page.getByTestId('durationInBed'));

	await page.getByTestId('toggleSwitch').click();

	await page.getByTestId('durationInBed').click();
	await page.getByText('06:00').click();

	await page.getByTestId('durationAsleep').click();
	await page.getByText('03:00').click();

	await page.getByTestId('calculate').click();

	await expect(page.getByText('Loading')).toBeVisible();
	await expect(
		page.getByText('Something went wrong. Please try again.')
	).toBeVisible();
});

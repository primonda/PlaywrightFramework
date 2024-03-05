import {expect} from '@playwright/test';

const currentWeatherDataPageHeaderXpath = "//h1[text()='Current weather data']";

export const verifyCurrentWeatherDataPageHeader = async (testAttributes) =>
    await expect(testAttributes.page.locator(currentWeatherDataPageHeaderXpath)).toBeVisible();
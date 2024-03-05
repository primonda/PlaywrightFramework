import {expect} from '@playwright/test'

const pageHeaderXpath = "//h1[text() = 'Weather API']";
const currentWeatherDataApiDocButtonXpath = "//h3[text()='Current Weather Data']/../a[text() = 'API doc']";

export const navigateToHomePage = async (testAttributes) => 
    await testAttributes.page.goto(testAttributes.envConfig[testAttributes.env]["url"]);

export const verifyHomePageHeader = async (testAttributes) => 
    await expect(testAttributes.page.locator(pageHeaderXpath)).toBeVisible();

export const navigateToCurrentWeatherAppApiDocPage = async (testAttributes) => 
    await testAttributes.page.locator(currentWeatherDataApiDocButtonXpath).click();


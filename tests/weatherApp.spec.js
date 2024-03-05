import { test } from '../fixtures/commonFixture';
import * as homePage from '../pages/homePage';
import * as currentWeaterAppPage from '../pages/currentWeatherDataPage';
import * as weatherAppTestData from '../testSpecificData/waeatherAppTestData';
import * as currentWeaterStepDef from '../apiTestsStepDefs/currentWeatherStepDef';

test.describe("UI Tests - Weather App" , () => {

  test('verify Home Page header', async ({ testAttributes }) => {
    await homePage.navigateToHomePage(testAttributes);
    await homePage.verifyHomePageHeader(testAttributes);
  });

  test('verify current weather App Page header', async ({ testAttributes }) => {
    await homePage.navigateToHomePage(testAttributes);
    await homePage.navigateToCurrentWeatherAppApiDocPage(testAttributes);
    await currentWeaterAppPage.verifyCurrentWeatherDataPageHeader(testAttributes);
  });

})

test.describe("API Tests - Weather App" , () => {

  test('verify Unauthorized user for current weather api', async ({ testAttributes }) => {
    weatherAppTestData.getCurrentWeatherAppTestData(testAttributes);
    await currentWeaterStepDef.getCurrentWeatherData(testAttributes);
    currentWeaterStepDef.verifyCurrrentWeatherApiStatusCodeAsUnAuthorized(testAttributes);
  });
})


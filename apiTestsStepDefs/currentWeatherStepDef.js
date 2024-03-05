import {expect} from '@playwright/test';
import {getRequest} from '../testHelpers/apiReqAndRespHandler';

export const getCurrentWeatherData = async (testAttributes) => 
    testAttributes.getCurrentWeatherDataResp = await getRequest(testAttributes.url);

export const verifyCurrrentWeatherApiStatusCodeAsUnAuthorized = (testAttributes) => {
    expect(testAttributes.getCurrentWeatherDataResp.status()).toBe(401);
}

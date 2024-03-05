export const getCurrentWeatherAppTestData = (testAttributes) =>{
    testAttributes.lat = 44.34;
    testAttributes.lon = 10.99;
    testAttributes.appId = testAttributes.userData.apiKey;
    testAttributes.resource = "/data/2.5/weather";
    testAttributes.url = `${testAttributes.baseUrl}/${testAttributes.resource}?lat=${testAttributes.lat}&lon=${testAttributes.lon}`;
    console.log(testAttributes.url);
}
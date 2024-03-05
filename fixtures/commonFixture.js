const base = require('@playwright/test');
const envConfig = require("../envConfig.json");
const env = process.env.ENV;
const userData = JSON.parse(JSON.stringify(`../seedData/${envConfig[env]}[seedData]`));

console.log(envConfig, env)
const testAttributes = {
    envConfig: envConfig,
    env: env,
    userData: userData,
    baseUrl: envConfig[env]["baseUrl"]
}

exports.test = base.test.extend({
    testAttributes: async ({ page }, use) => {
        testAttributes.page = page;
        await use(testAttributes);
    }
})
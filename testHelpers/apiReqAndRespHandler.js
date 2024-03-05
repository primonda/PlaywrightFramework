import { request } from "@playwright/test";

export const getRequest = async (url) => {
    const apiContext = await request.newContext();
    const response = await apiContext.get(url);
    console.log(JSON.stringify(response));
    return response;
}
import test, { expect } from "@playwright/test";

test('Login', async({page})=>{
    await page.goto('https://www.saucedemo.com/v1/')
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('#login-button').click();
    const elreal = await page.locator('.product_label');
    await expect(elreal).toBeVisible();
    await page.waitForTimeout(1000);


})
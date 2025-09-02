import test, { expect } from "@playwright/test";
import { CommonPageMethods } from "../pages/common-page/common-page.methods";
import { LoginPageMethods } from "../pages/login-page/login-page.methods";
test('Login', async({page})=>{
    const commonPageMethods = new CommonPageMethods(page)
    const loginPageMethods = new LoginPageMethods(page)
    await commonPageMethods.navegarPrincipal();
    await loginPageMethods.insertarcredenciales('standard_user','secret_sauce')
    await loginPageMethods.iniciarSesion()
    const elreal = await page.locator('.product_label');
    await expect(elreal).toBeVisible();
    await page.waitForTimeout(1000);


})
import test, { expect } from "@playwright/test";
import { CommonPageMethods } from "../pages/common-page/common-page.methods";
import { LoginPageMethods } from "../pages/login-page/login-page.methods";
import { LoginPageData } from "../pages/login-page/login-page.data";
const usuariosCredenciales = LoginPageData.credenciales;

test('Login', async({page})=>{
    const commonPageMethods = new CommonPageMethods(page)
    const loginPageMethods = new LoginPageMethods(page)
    await commonPageMethods.navegarPrincipal();
    await loginPageMethods.insertarcredenciales(usuariosCredenciales.user.standardUser,usuariosCredenciales.passw)
    await loginPageMethods.iniciarSesion()
    const elreal = await page.locator('.product_label');
    await expect(elreal).toBeVisible();
    await commonPageMethods.abrirMenu();
    await commonPageMethods.abrirAllItemns();
    await commonPageMethods.abrirMenu();
    await commonPageMethods.abrirAbout();
    await commonPageMethods.abrirMenu();
    await commonPageMethods.abrirLogOut();
    await commonPageMethods.abrirMenu();
    await commonPageMethods.abrirResetApp();
    await page.waitForTimeout(1000);


})
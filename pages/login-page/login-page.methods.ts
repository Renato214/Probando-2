import { Page } from "@playwright/test"
import { LoginPageElements } from "./login-page.elements"
import { Logger } from "../../support/logger"

export class LoginPageMethods{
    private page : Page
    private loginPageElements : LoginPageElements

    constructor(page : Page){
        this.page = page
        this.loginPageElements = new LoginPageElements(page)
    }

    async insertarcredenciales( user: string,passw: string){
        await Logger.logStep("llenando Usuario con "+user)
        await this.loginPageElements.TextBoxes.user.fill(user)
        await Logger.logStep("llenando Usuario con "+passw)
        await this.loginPageElements.TextBoxes.passw.fill(passw)

    }
    async iniciarSesion(){
        await Logger.logStep("clikeando iniciar secion")
        await this.loginPageElements.buttons.botoninicio.click()

    }

}
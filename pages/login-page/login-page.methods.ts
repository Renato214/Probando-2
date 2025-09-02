import { Page } from "@playwright/test"
import { LoginPageElements } from "./login-page.elements"

export class LoginPageMethods{
    private page : Page
    private loginPageElements : LoginPageElements

    constructor(page : Page){
        this.page = page
        this.loginPageElements = new LoginPageElements(page)
    }

    async insertarcredenciales( user: string,passw: string){
        await this.loginPageElements.TextBoxes.user.fill(user)
        await this.loginPageElements.TextBoxes.passw.fill(passw)

    }
    async iniciarSesion(){
        await this.loginPageElements.buttons.botoninicio.click()

    }

}
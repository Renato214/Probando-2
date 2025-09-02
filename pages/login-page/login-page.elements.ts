import { Page } from "@playwright/test"

export class LoginPageElements{
    private page : Page
    constructor(page : Page){
            this.page = page
        }
    get TextBoxes(){
        return{
            user: this.page.locator('[data-test="username"]'),
            passw: this.page.locator('[data-test="password"]'),
        }

    }
    get buttons(){
        return{
            botoninicio: this.page.locator('#login-button'),
        }

    }
}
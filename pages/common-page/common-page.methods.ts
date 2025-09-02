import { Page } from "@playwright/test"
import { CommonPageElements } from "./common-page.elements"

export class CommonPageMethods{
    private page : Page
    private commonPageElemenst : CommonPageElements
    constructor(page : Page){
            this.page = page
            this.commonPageElemenst = new CommonPageElements(page)
        }
    async navegarPrincipal(){
        
        await this.page.goto('https://www.saucedemo.com/v1/')

    }
    async abrirMenu(){
        await this.commonPageElemenst.buttons.openMenu.click()
    }
}
import { Page } from "@playwright/test"
import { CommonPageElements } from "./common-page.elements"

export class CommonPageMethods{
    private page : Page
    private commonPageElements : CommonPageElements
    constructor(page : Page){
            this.page = page
            this.commonPageElements = new CommonPageElements(page)
        }
    async navegarPrincipal(){
        
        await this.page.goto('https://www.saucedemo.com/v1/')

    }
    async abrirMenu(){
        await this.commonPageElements.buttons.openMenu.click()
    }
    async abrirAllItemns(){
        await this.commonPageElements.letMenu.allItems.click()
    }
    async abrirAbout(){
        await this.commonPageElements.letMenu.about.click()
    }
    async abrirLogOut(){
        await this.commonPageElements.letMenu.logout.click()
    }
    async abrirResetApp(){
        await this.commonPageElements.letMenu.resetApp.click()
    }
}
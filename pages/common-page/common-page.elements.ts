import { Page } from "@playwright/test"

export class CommonPageElements{
    private page : Page
    constructor(page : Page){
            this.page = page
        }
    get letMenu(){
        return{
            allItems: this.page.locator('[id="inventory_sidebar_link"]'),
            about: this.page.locator('[id="about_sidebar_link"]'),
            logout: this.page.locator('[id="logout_sidebar_link"]'),
            resetApp: this.page.locator('[id="reset_sidebar_link"]'),
        }

    }
    get buttons(){
        return{
            openMenu: this.page.locator('.bm-burger-button button'),
        }

    }
}
import { LoginPageData } from "./login-page.data";

export interface User {
    username: string,
    password : string
}
export const standardUser:User = {
    username: LoginPageData.credenciales.user.standardUser,
    password: LoginPageData.credenciales.passw
 }
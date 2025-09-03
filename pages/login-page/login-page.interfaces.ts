import { LoginPageData } from "./login-page.data";

export interface User {
    username: string,
    password : string
}
export const standardUser:User = {
    username: LoginPageData.credenciales.user.standardUser,
    password: LoginPageData.credenciales.passw
}
export const lockedOutUser:User = {
    username: LoginPageData.credenciales.user.lockedOutUser,
    password: LoginPageData.credenciales.passw
}
export const problemUser:User = {
    username: LoginPageData.credenciales.user.problemUser,
    password: LoginPageData.credenciales.passw
}
export const performanceGlitchUser:User = {
    username: LoginPageData.credenciales.user.performanceGlitchUser,
    password: LoginPageData.credenciales.passw
}
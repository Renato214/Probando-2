import {step} from 'allure-js-commons'
export class Logger{
    static async logStep(descripccion:string){
        await step("Step - "+descripccion, ()=>{});
    }
    static async logVerificacion(descripccion:string){
        await step("Verificacion - "+descripccion, ()=>{});
    }
    static async logVPrecondicion(descripccion:string){
        await step("Precondicion - "+descripccion, ()=>{});
    }
    static async logPostCondicion(descripccion:string){
        await step("PostCondicion - "+descripccion, ()=>{});
    }
}
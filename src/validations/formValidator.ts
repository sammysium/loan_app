import { isEmpty } from "validator"
import isEmail from "validator/lib/isEmail"

export const isValidEmail =(input: string): boolean  =>{
    return isEmail(input)
}

export const hasNoValue = (input: string): boolean => {
    return isEmpty(input.trim())
}

export const isValidMoney = (input: number, min: number, max:number): boolean => {
   
    if (isNaN(input) || !isFinite(input)) {
        return false;
    }
    return input >= min && input <= max;
    
   return true
}
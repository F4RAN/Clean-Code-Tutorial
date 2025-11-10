
const phoneNumberRegex = new RegExp("[0-9]\g")
export default class PhoneNumber{
    constructor(public value){
        if(!(value instanceof String)){
            throw new Error("Phone Number must be a string")
        }
        if(!value.match(phoneNumberRegex)){
            throw new Error("Phone Number must be included by digits")
        }
        if(value.length != 10){
            throw new Error("Phone Number length must be 10")
        }
    }
}
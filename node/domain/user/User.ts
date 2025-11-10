import ID from './ID'
import Sex from './Sex'
import PhoneNumber from './PhoneNumber'
import Role from './Role'
import Age from './Age'
export default class User {
    id: ID;
    phoneNumber: PhoneNumber;
    sex: Sex;
    role: Role;
    age: Age;
    constructor({id, phoneNumber, sex, role, age}){
        if(!id) throw new Error("User must have id")
        this.phoneNumber = phoneNumber
        this.sex = sex
        this.role = role
        this.age = age
    }
}
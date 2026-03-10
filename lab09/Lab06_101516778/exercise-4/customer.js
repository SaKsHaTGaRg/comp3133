export class Customer {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this._age = age;
    }
    greeter() {
        console.log(`Hello ${this.firstName} ${this.lastName}`);
    }
    GetAge() {
        console.log(`Age: ${this._age}`);
        return this._age;
    }
}

class Customer {
    greeter() {
        console.log(`Hello ${this.firstName} ${this.lastName}`);
    }
}
let customer = new Customer();
customer.firstName = "Sakshat";
customer.lastName = "Garg";
customer.greeter();

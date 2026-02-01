const assert = require('assert') // like a true or false statement 
const ArithmeticOps = require('../Arithmetic');
const {describe} = require('mocha') // to describe the output



describe("Validate Arithmetic Operations", () =>{
    // all test cases will go here
    it("square of (3) should be 9", () =>{
        assert.equal(ArithmeticOps.square(3), 9);
    });
    it("percentage of 25% of 200 should be 50", () =>{
        assert.equal(ArithmeticOps.percentage(25, 200), 50);
    }); 
    // lets fail a test
    it("square of (4) should be 20", () =>{
        assert.equal(ArithmeticOps.square(4), 20);
    });

});


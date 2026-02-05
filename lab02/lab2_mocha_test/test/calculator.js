const { expect } = require("chai");


const calculator = require("../app/calculator");

const add = calculator.add || calculator;
const sub = calculator.sub;
const mul = calculator.mul;
const div = calculator.div;


function runWithMessage({ opName, a, b, expected }) {
  const actual = calculator[opName](a, b);
  const ok = actual === expected;

  const msg = `${opName}(${a}, ${b}) expected ${expected} => ${ok ? "PASS ✅" : "FAIL ❌"} (actual ${actual})`;
  console.log(msg);

  expect(actual).to.equal(expected); // Mocha PASS/FAIL
}

describe("Calculator Tests (Mocha + Chai)", function () {
  // --- ADD ---
  it("ADD: should PASS (add(5,2) = 7)", function () {
    runWithMessage({ opName: "add", a: 5, b: 2, expected: 7 });
  });

  it("ADD: should FAIL (add(5,2) != 8)", function () {
    runWithMessage({ opName: "add", a: 5, b: 2, expected: 8 });
  });

  // --- SUB ---
  it("SUB: should PASS (sub(5,2) = 3)", function () {
    runWithMessage({ opName: "sub", a: 5, b: 2, expected: 3 });
  });

  it("SUB: should FAIL (sub(5,2) != 5)", function () {
    runWithMessage({ opName: "sub", a: 5, b: 2, expected: 5 });
  });

  // --- MUL ---
  it("MUL: should PASS (mul(5,2) = 10)", function () {
    runWithMessage({ opName: "mul", a: 5, b: 2, expected: 10 });
  });

  it("MUL: should FAIL (mul(5,2) != 12)", function () {
    runWithMessage({ opName: "mul", a: 5, b: 2, expected: 12 });
  });

  // --- DIV ---
  it("DIV: should PASS (div(10,2) = 5)", function () {
    runWithMessage({ opName: "div", a: 10, b: 2, expected: 5 });
  });

  it("DIV: should FAIL (div(10,2) != 2)", function () {
    runWithMessage({ opName: "div", a: 10, b: 2, expected: 2 });
  });
});

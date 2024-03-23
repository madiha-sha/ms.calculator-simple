#! /usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
// step 1
var answers = await inquirer_1.default.prompt([
    { type: "number",
        name: "numberOne",
        message: "Enter your first number"
    },
    { type: "number",
        name: "numberTwo",
        message: "Enter your second number"
    },
    { type: "list",
        name: "operator",
        message: "Enter your operator",
        choices: ["+", "-", "*", "/"] }
]);
// step 2
var numberOne = answers.numberOne, numberTwo = answers.numberTwo, operator = answers.operator;
var result;
switch (operator) {
    case "+":
        result = numberOne + numberTwo;
        break;
    case "-":
        result = numberOne - numberTwo;
        break;
    case "*":
        result = numberOne * numberTwo;
        break;
    case "/":
        result = numberOne / numberTwo;
        break;
    default:
        console.log("invalid operator");
}
console.log("".concat(numberOne, " ").concat(operator, " ").concat(numberTwo, " = ").concat(result));

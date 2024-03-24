#! /usr/bin/env node
import inquirer from "inquirer";
console.log("\n\nSimple CLI Calculator - by Channayousif\n\n");
const input = await inquirer.prompt([
    { message: "Enter first number", type: "number", name: "Num1" },
    { message: "Enter 2nd number", type: "number", name: "Num2" },
    {
        message: "Select operation to be performed",
        type: "list",
        name: "operation",
        choices: ["addition", "substraction", "multiplication", "division", "square of first num"],
    }
]);
console.log("\n\tR E S U L T\n");
console.log(input);
if (input.operation == "addition") {
    console.log(input.Num1 + input.Num2);
}
else if (input.operation == "substraction") {
    console.log(input.Num1 - input.Num2);
}
else if (input.operation == "multiplication") {
    console.log(input.Num1 * input.Num2);
}
else if (input.operation == "division") {
    console.log(input.Num1 / input.Num2);
}
else if (input.operation == "square of first num") {
    console.log(input.Num1 * input.Num1);
}
console.log("Thanks for using my calculator!");

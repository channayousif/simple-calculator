#! usr/dev/bin node
import inquirer from "inquirer";

const input = await inquirer.prompt([
  { message: "Enter first number", type: "number", name: "Num1" },
  { message: "Enter 2nd number", type: "number", name: "Num2" },
  {
    message: "Select operation to be performed",
    type: "list",
    name: "operation",
    choices: ["addition", "substraction", "multiplication", "division","square of first num"],
  }
]);
console.log(input)
if (input.operation=="addition"){
    console.log(input.Num1+input.Num2)
}
else if (input.operation=="substraction"){
    console.log(input.Num1 - input.Num2)
}
else if (input.operation=="multiplication"){
    console.log(input.Num1*input.Num2)
}
else if (input.operation=="division"){
    console.log(input.Num1/input.Num2)
}
else if (input.operation=="square of first num"){
    console.log(input.Num1 * input.Num1)
}
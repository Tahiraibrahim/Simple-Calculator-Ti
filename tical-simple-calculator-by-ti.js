#! /usr/bin/env node
import inquirer from "inquirer";
const ans = await inquirer.prompt([{
        type: "number",
        name: "first_number",
        message: "Enter your First Number: ",
    },
    {
        type: "number",
        name: "second_number",
        message: "Enter your Second Number: ",
    },
    {
        type: "list",
        name: "operator",
        message: "Please select operation type: ",
        choices: ["Additio", "Subtraction", "Multiplication", "Division"]
    }
]);
if (ans.operator === "Addition") {
    console.log(ans.first_number + ans.second_number);
}
if (ans.operator === "Subtraction") {
    console.log(ans.first_number - ans.second_number);
}
if (ans.operator === "Multiplication") {
    console.log(ans.first_number * ans.second_number);
}
else {
    console.log(ans.first_number / ans.second_number);
}

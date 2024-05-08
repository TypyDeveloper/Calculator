import inquirer from "inquirer";
let condition = true;
while (condition) {
    let options = await inquirer.prompt([
        {
            name: "Menu",
            message: "Choose your operation",
            type: "list",
            choices: ["Addition", "Subtraction", "Multiplication", "Division"]
        },
        {
            name: "first",
            message: "Enter First value",
            type: "number",
        },
        {
            name: "second",
            message: "Enter second value",
            type: "number",
        },
    ]);
    if (options.Menu === "Addition") {
        let addition = options.first + options.second;
        console.log(`The answer of ${options.first} + ${options.second} = ${addition}`);
    }
    else if (options.Menu === "Subtraction") {
        let subtraction = options.first - options.second;
        console.log(`The answer of ${options.first} - ${options.second} = ${subtraction}`);
    }
    else if (options.Menu === "Multiplication") {
        let multiplication = options.first * options.second;
        console.log(`The answer of ${options.first} * ${options.second} = ${multiplication}`);
    }
    else if (options.Menu === "Division") {
        let division = options.first / options.second;
        console.log(`The answer of ${options.first} / ${options.second} = ${division}`);
    }
}

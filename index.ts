import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "enter first number", type: "number", name: "firstnumber" },
  { mesage: "second number ", type:"number", name:"secondnumber" },
  {
    message: "select operators to perform operations",
    type: "list",
    name: "operators",
    choices: ["addition","substraction","multiplication","division"],
  },
]);


// conditional statement

 if (answer.operators === "addition") {
  console.log(answer.firstnumber + answer.secondnumber);
} else if (answer.operators === "substraction") {
  console.log(answer.firstnumber - answer.secondnumber);
} else if (answer.operators === "multiplicaton") {
  console.log(answer.firstnumber * answer.secondnumber);
} else if (answer.operators === "division") {
  console.log(answer.firstnumber / answer.secondnumber);
} else {
  console.log("please select valid operator");
}
let num1 = prompt("son kiriting");
let calc = prompt("amalni kiriting");
let num2 = prompt("son kiriting");

if (calc == "+") {
  console.log(+num1 + +num2);
} else if (calc == "-") {
  console.log(num1 - num2);
} else if (calc == "*") {
  console.log(num1 * num2);
} else if (calc == "/") {
  console.log(num1 / num2);
} else if (calc == "%") {
  console.log(num1 % num2);
} else {
  console.log("error");
}

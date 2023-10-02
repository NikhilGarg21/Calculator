let userInput = ""; // Variable to store user input as a string
let result = null; // Variable to store the evaluated result

function evaluateExpression(expression) {
  try {
    console.log(expression);
    const res = math.evaluate(expression);
    return res;
  } catch (error) {
    return "Error: Invalid Expression";
  }
}

const buttons = document.querySelectorAll(".btn");
const inputVal = document.querySelector("input");

document.addEventListener("DOMContentLoaded", function () {
  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      const buttonValue = e.target.innerHTML;
      if (buttonValue === "=") {
        if (userInput !== "") {
          result = evaluateExpression(userInput);
          inputVal.value = result;
          userInput = result.toString(); // Store the result as the new user input
        }
      } else if (buttonValue === "C") {
        userInput = "";
        result = null;
        inputVal.value = userInput;
      } else if (buttonValue === "√") {
        userInput += "sqrt(";
        inputVal.value = userInput;
      } else if (buttonValue === "π") {
        userInput += "*3.14";
        inputVal.value = userInput;
      } else if (buttonValue === "°") {
        userInput += "deg";
        inputVal.value = userInput;
      } else if (buttonValue === "+M") {
        userInput = userInput.slice(0, userInput.length - 1) + "-" + userInput.slice(userInput.length - 1);
        inputVal.value = userInput;
      } else if (buttonValue === "-M") {
        userInput = userInput.slice(0, userInput.length - 1) + "-" + userInput.slice(userInput.length - 1);
        inputVal.value = userInput;
      } else {
        userInput += buttonValue;
        inputVal.value = userInput;
      }
    });
  });
});

crossButton = document.querySelector(".cross");
crossButton.addEventListener("click", () => {
  userInput = userInput.slice(0, userInput.length - 1);
  inputVal.value = userInput;
});

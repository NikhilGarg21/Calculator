let string = "";
function evaluateExpression(expression) {
  try {
    console.log(expression);
    const result = math.evaluate(expression);
    return result;
  } catch (error) {
    return "Error: Invalid Expression";
  }
}

const buttons = document.querySelectorAll(".btn");
const inputval = document.querySelector("input");

document.addEventListener("DOMContentLoaded", function () {
  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      val = inputval.value;
      const buttonValue = e.target.innerHTML;
      if (buttonValue === "=") {
        if (string == "") {
          string = evaluateExpression(val);
          inputval.value = string;
        }
         else {
          string = evaluateExpression(string);
          inputval.value = string;
        }
      } else if (buttonValue === "C") {
        string = "";
        userinput = ""
        inputval.value = string;
      } else if (buttonValue === "√") {
        string += "sqrt(";
        inputval.value = string;
      } else if (buttonValue === "π") {
        string += "*3.14";
        inputval.value = string;
      } else if (buttonValue === "°") {
        string += "deg";
        inputval.value = string;
      } else if (buttonValue === "+M") {
        string = "+" + string;
        inputval.value = string;
      } else if (buttonValue === "-M") {
        string = "-" + string;
        inputval.value = string;
      } else {
        string += buttonValue;
        inputval.value = string;
      }
    });
  });
});

crossButton = document.querySelector(".cross");
crossButton.addEventListener("click", () => {
  string = string.slice(0, string.length - 1);
  inputval.value = string;
});

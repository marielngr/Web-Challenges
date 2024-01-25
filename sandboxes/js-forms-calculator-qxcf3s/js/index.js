console.clear();

const form = document.querySelector('[data-js="form"]');
const resultOutput = document.querySelector('[data-js="result"]');

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let result;

  // --v-- write your code here --v--
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  console.log(data);

  if (data.operator === "addition") {
    result = Number(data.numberA) + Number(data.numberB);
    console.log(result);
  }
  if (data.operator === "subtraction") {
    result = subtract(Number(data.numberA), Number(data.numberB));
    console.log(result);
  }
  if (data.operator === "multiplication") {
    result = multiply(Number(data.numberA), Number(data.numberB));
    console.log(result);
  }
  if (data.operator === "division") {
    result = divide(Number(data.numberA), Number(data.numberB));
    console.log(result);
  }

  // --^-- write your code here --^--

  resultOutput.textContent = result;
});

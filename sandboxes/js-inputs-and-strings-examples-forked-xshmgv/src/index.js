// part 1: Event Listener Syntax Recap
const button = document.querySelector('[data-js="button"]');
const anotherButton = document.querySelector('[data-js="another-button"]');
const output = document.querySelector('[data-js="output"]');
button.addEventListener("click", onClick);
anotherButton.addEventListener("click", onClick);

let count = 0;

function onClick() {
  console.log("onClick");
  count = count + 1;
  output.textContent = `Clicked ${count} times`;
}

// part 2: Password Strength Checker
const input = document.querySelector('[data-js="password-input"]');
const passwordOutput = document.querySelector('[data-js="password-output"]');
const minPasswordLength = 5;

input.addEventListener("input", (event) => {
  // To see what has been typed so far:
  // console.log(event.target.value);
  // since the input is already selected, you can do also:
  // console.log(input.value);
  if (event.target.value.length < minPasswordLength) {
    passwordOutput.textContent = `Password must be longer than ${minPasswordLength} chars`;
  } else {
    passwordOutput.textContent = "Password is fine!";
  }
});

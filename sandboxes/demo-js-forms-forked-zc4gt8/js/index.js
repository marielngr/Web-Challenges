console.clear();

const form = document.querySelector('[data-js="form"]');
const messageInput = document.querySelector('[data-js="personal-message"]');
const characterDisplay = document.querySelector(
  '[data-js="remaining-characters"]',
);

form.addEventListener("submit", (event) => {
  // prevent the default browser behavior (reloading the page)
  event.preventDefault();

  // event target
  // console.log(event.target);
  const formData = new FormData(event.target); // returns a Map
  const data = Object.fromEntries(formData); // turns the Map into an Object

  console.log(data);
});

messageInput.addEventListener("input", (event) => {
  //   const currentValue = event.target.value;
  //   event.target.value = currentValue.toUpperCase();

  const currentCharacterCount = event.target.value.length;
  characterDisplay.textContent = 150 - currentCharacterCount;
});

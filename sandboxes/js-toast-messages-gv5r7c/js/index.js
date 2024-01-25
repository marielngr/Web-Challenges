console.clear();

const toastContainer = document.querySelector('[data-js="toast-container"]');
const addButton = document.querySelector('[data-js="add-button"]');
const clearButton = document.querySelector('[data-js="clear-button"]');

addButton.addEventListener("click", () => {
  toastContainer.innerHTML = "";

  const newMessage = document.createElement("li");
  newMessage.classList.add(".toast-container__message");
  newMessage.innerHTML = "I'm a new entry!";

  toastContainer.append(newMessage);
});

clearButton.addEventListener("click", () => {
  toastContainer.innerHTML = "";
});

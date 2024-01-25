console.clear();

const bodyElement = document.querySelector('[data-js="body"]');

const dark = document.querySelector('[data-js="dark-mode-button"]');
dark.addEventListener("click", () => {
  bodyElement.classList.add("dark");
});

const light = document.querySelector('[data-js="light-mode-button"]');
light.addEventListener("click", () => {
  bodyElement.classList.remove("dark");
});

const toggle = document.querySelector('[data-js="toggle-button"]');

toggle.addEventListener("click", () => {
  bodyElement.classList.toggle("dark");
});

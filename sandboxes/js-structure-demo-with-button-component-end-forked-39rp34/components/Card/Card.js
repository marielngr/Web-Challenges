import { caesarCipher13 } from "../../utils/cipher.js";
import Button from "../Button/Button.js";

export function Card(props) {
  const card = document.createElement("article");
  card.className = "card";

  const title = document.createElement("h2");
  title.className = "card__title";
  title.textContent = props.name;

  const text = document.createElement("p");
  text.className = "card__text";
  text.textContent = caesarCipher13(props.text);

  const buttonComponent = Button(handleDecipherButtonClick);

  card.append(title, text, buttonComponent);

  function handleDecipherButtonClick() {
    text.textContent = props.text;
    buttonComponent.setAttribute("disabled", "");
    card.classList.add("card--deciphered");
  }

  return card;
}

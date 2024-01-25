import { caesarCipher13 } from "../../utils/cipher";
import Button from "../Button/Button";

export function Header() {
  const headlineText = "Classical Authors";

  const header = document.createElement("header");
  header.className = "header";

  const headline = document.createElement("h1");
  headline.textContent = caesarCipher13(headlineText);

  const buttonComponent = Button(handleDecipherHeadlineButtonClick);
  buttonComponent.className = "header__button";

  header.append(headline, buttonComponent);

  function handleDecipherHeadlineButtonClick() {
    headline.textContent = headlineText;
    buttonComponent.setAttribute("disabled", "");
  }
  return header;
}

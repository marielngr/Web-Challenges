import { authors } from "./utils/authors.js";
import { Header } from "./components/Header/Header.js";
import { Card } from "./components/Card/Card.js";

/** Get root element */
const root = document.querySelector("#root");

/** Header */
const headerComponent = Header();
root.append(headerComponent);

/** Main: Author Cards */
authors.forEach((author) => {
  const cardComponent = Card(author);
  root.append(cardComponent);
});

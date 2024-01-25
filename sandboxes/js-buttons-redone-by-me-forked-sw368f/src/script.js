//Ziel 'First Post' wird auf Click gelb.//

//Vorgehen
//Erstens: eine Variable für den Button erstellen
//Zweitens: eine Variable für den First Post erstellen
//Drittens: einen ClickListener zum Button adden
//Viertens: die Funktion zuweisen, dass dem First Post die Klasse "important" zur classList hinzugefügt werden soll

const button = document.querySelector("button");
console.log(button);

const firstPost = document.querySelector(".blog-post");
console.log(firstPost);

button.addEventListener("click", () => {
  firstPost.classList.add("important");
  console.log("Currywurst!");
});

//Alternative:
//anstelle der Element- und Klassenselektoren (die CSS verwendet) sollten in HTML zusätzlich die data*-Attribut-Selektoren aufgeschrieben werden.

//<button data-js="button">
const buttonMitDataAttribut = document.querySelector('[data-js="button"]');
console.log(buttonMitDataAttribut);

//- Wie kann ich alle oder den mittleren/ letzten Post mit dem querySelector ansprechen?
const lastPost = document.querySelector(".blog-post:last-child");
console.log(lastPost);

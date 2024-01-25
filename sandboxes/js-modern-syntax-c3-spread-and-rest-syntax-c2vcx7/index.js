console.clear();

// EXERCISE 1
// a) Destructure the "person" object, extract the variables "age" and "contact".
// b) Use the rest parameter to collect the values of "name", "email", and "phone"
// and put them into "contact".
// c) Make sure to export your variable as in the example below to make the tests work.

const person = {
  name: "Jane Doe",
  age: 32,
  email: "jane@doe.com",
  phone: "12345",
};

const { age, ...contact } = person;
console.log(age, contact);
export const { name, email, phone } = contact;
console.log(name, email, phone);

//Der Restparameter wird so direkt in contact umbenannt, damit spart man sich den Schritt der Umbenennung
//const contact = rest

function destructure1({
  age,
  birthday = "ich kann  hier einfach noch beliebige Variablen zufügen",
  ...contact
}) {
  console.log(age, contact, birthday);
}
destructure1(person, "hi");

// example: export const {value 1} = myObject;

// EXERCISE 2
// Use array destructuring to extract the variables "first" and "second";
// all other items should go into a variable called "restOfList".

const list = ["one", "two", "three", "four", "five"];

export const [first, second, ...restOfList] = list;
console.log(first, second, restOfList);

// EXERCISE 3
// a) The `add` function does not work because it needs an array as argument.
// b) Use the rest syntax with the `allNumbers` parameter to fix it.

// c) Make sure you understand what the rest syntax does here.

//--> reduce ist eine Array-Funktion, daher muss der PArameter allNumbers ein Array sein, sonst funktioniert es nicht.
//wenn man eine FUNktionsdefinition hat, bedeutet ...Variablenname, dass alle übergebenen Parameter in ein Array Variablenname
// gegeben werden. So ist es möglich FUnktionen zu definieren, die eine beliebige ANzahl von Argumenten haben.

// d) Note that the optional chaining `?.` is used to prevent an error to happen.
//allNumbers ist immer ein Array - entweder leer oder mit Zahlen, daher kann es nicht null oder undefined sein und daher ist
// diese Funktion immer vorhanden - unklar, welchen SInn ?. an dieser Stelle machen

function add(...allNumbers) {
  console.log(allNumbers);
  return allNumbers.reduce?.((a, b) => a + b);
}

export const sum = add(3, 2, 3, 2, 1, 2, 3, 4);
console.log(sum);

// EXERCISE 4
// a) Below, the `add` function is called with an array as argument.
// b) Use the spread syntax with the `numbers` argument to fix this.
// c) Make sure you understand what the spread syntax does here.

const numbers = [3, 2, 1];
export const result = add(...numbers);
console.log(result);
const number2 = [...numbers]; //
const number3 = [3, 2, 1, ...numbers, ...number2];

// EXERCISE 5
// a) Create a variable `allFruits` which contains `anotherFruit` and `fruits`
// as a plain array (and in this order).
// b) Use the spread syntax to achieve this.
// c) Remember to export `allFruits`.

const fruits = ["apple", "banana", "orange", "papaya"];
const anotherFruit = "cherry";
export const allfruits = [anotherFruit, ...fruits];
console.log(allfruits);

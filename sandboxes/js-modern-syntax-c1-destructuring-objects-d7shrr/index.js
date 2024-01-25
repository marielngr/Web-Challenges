console.clear();

// EXERCISE 1
// Extract only the course name from the company object.
// Make sure to export your variable as in the example below to make the tests work.

const company = {
  name: "neuefische",
  course: "Web Development",
  location: "Hamburg",
};

// const { name } = company;
// console.log(name, "hi");

function getCourseName({ course }) {
  console.log(course);
}

// getCourseName(company);

// example: export const {value1} = myObject;
export const { course } = company;
console.log(course, "ho");
//wozu export???

// EXERCISE 2
// We have an object called 'user'.
// Write the destructuring assignment that reads:
//  2.1: 'name' property into the variable 'name'.
//  2.2: 'years' property into the variable 'age'.
//  2.3: 'isAdmin' property into the variable 'isAdmin' (false, if no such property exists)

const user = { name: "John", years: 30 };

const { name, years: age, isAdmin = false } = user;
console.log(name, age, isAdmin);

// const user = { name: "John", years: 30 };
function getNameAgeIsAdmin({ name, years: age, isAdmin = false }) {
  console.log("2", name, age, isAdmin);
}

getNameAgeIsAdmin(user);

// EXERCISE 3
// Extract the variables from the dog object and
// rename them like "dogName", "dogBreed", and "dogAge", respectively.

const dog = {
  name: "Pluto",
  breed: "husky",
  age: 5,
};

const { name: dogName, breed: dogBreed, age: dogAge } = dog;
console.log(dogName, dogBreed, dogAge);

function getDogData({ name: dogName, breed: dogBreed, age: dogAge }) {
  console.log(`Name: ${dogName}, Breed: ${dogBreed}, Age: ${dogAge}`);
}

getDogData(dog);

// EXERCISE 4
// Extract the 'lastName' property from the person object as "personLastName".
// Store all other properties in an object called "moreInformation".

const person = {
  lastName: "Main",
  age: 24,
  firstName: "Alex",
};

const { lastName: personLastName, ...allOtherProps } = person;
console.log(personLastName, allOtherProps);

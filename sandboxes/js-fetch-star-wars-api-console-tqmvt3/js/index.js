console.clear();

const url = "https://swapi.dev/api/people";

async function fetchData(name) {
  const response = await fetch(url);

  const data = await response.json();
  console.log(data);
  console.log(data.results);

  const person = data.results.find((person) => {
    return person.name.includes(name);
  });
  console.log(person.eye_color);

  const allNames = data.results.map((person) => {
    return person.name;
    // return { name: person.name };
  });

  const luke = data.results.find((person) => {
    return person.name.includes("Luke");
  });

  console.log(allNames);
  console.log(luke.hair_color);
}
fetchData("R2-D2");

// Exercise 1

const myCountry = {
  id: 1,
  name: "Italy",
  population: "60.000.000",
  weather: "sunny",
};

function logCountry(country) {
  console.log(`My country is called ${country.name}`);
  console.log(`It has ${country.population} people`);
  console.log(`The weather is usually ${country.weather}`);
}

logCountry(myCountry);

function logCountry2(country) {
  const { name, population, weather } = country;
  console.log(`2 My country is called ${name}`);
  console.log(`2 It has ${population} people`);
  console.log(`2 The weather is usually ${weather}`);
}

logCountry2(myCountry);

function logCountry3({ name, population, weather }) {
  console.log(`3 My country is called ${name}`);
  console.log(`3 It has ${population} people`);
  console.log(`3 The weather is usually ${weather}`);
}

logCountry3(myCountry);

// Exercise 2

const myAlbum = {
  id: 1,
  artist: "Jimi Hendrix",
  title: "Are You Experienced",
  year: 1967,
};

function logAlbum(album) {
  console.log(
    `1 ${album.title} by ${album.artist} was recorded in ${album.year}`
  );
}

logAlbum(myAlbum);

function logAlbum3({ title, artist, year }) {
  console.log(`3 ${title} by ${artist} was recorded in ${year}`);
}

logAlbum3(myAlbum);

// Teil 1
const ewanMcGregor = {
  geburtsjahr: 1971,
  wohnort: "Schottland",
  geschlecht: "männlich",
  letzterFilm: "The Birthday Cake",
};

const charlizeTheron = {
  geburtsjahr: 1975,
  wohnort: "South Africa",
  geschlecht: "weiblich",
  letzterFilm: "The Old Guard",
};

const zendaya = {
  geburtsjahr: 1996,
  wohnort: "USA",
  geschlecht: "weiblich",
  letzterFilm: "Dune",
};

// Teil 2 - Möglichkeit 1:
let schauspieler = [ewanMcGregor, charlizeTheron, zendaya];
console.log("Schauspieler:", schauspieler);

// Teil 2 - Möglichkeit 2:
let schauspieler2 = [];
schauspieler2.push(ewanMcGregor);
schauspieler2.push(charlizeTheron);
schauspieler2.push(zendaya);
console.log("Schauspieler2:", schauspieler);

"use strict";

// const numberOfNews = +prompt("Siz qancha yangilik ko`rdiz?");

const personalNewsDB = {
  // count: numberOfNews,
  news: {},
  actors: {},
  genres: [],
  shop: {},
  privat: false,
};

// const a = prompt("Oxirgi ko`rgan yangiliklarizdan bir?"),
//       b = prompt("Unga qancha baho bergan bo`lar ediz?");

const product = prompt("Nima xarid qilmoqchisiz?"),
      number = +prompt("Nechta xarid qilmoqchisiz?");

personalNewsDB.shop[product] = number;

alert(`Sotib olganlariz narxi: ${number * 5000} so'm`);

// personalNewsDB.news[a] = b;

console.log(personalNewsDB);
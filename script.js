"use strict";

const numberOfNews = +prompt("Siz qancha yangilik ko`rdiz?");

const personalNewsDB = {
  count: numberOfNews,
  news: {},
  actors: {},
  genres: [],
  privat: false,
};

const a = prompt("Oxirgi ko`rgan yangiliklarizdan bir?"),
      b = prompt("Unga qancha baho bergan bo`lar ediz?");

personalNewsDB.news[a] = b;

console.log(personalNewsDB);
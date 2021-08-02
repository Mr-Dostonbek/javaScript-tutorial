"use strict";

let numberOfNews;

function startProject() {
  numberOfNews = +prompt("Siz qancha yangilik ko`rdiz?");
  while( numberOfNews == "" || numberOfNews == null || isNaN(numberOfNews)){
    numberOfNews = +prompt("Siz qancha yangilik ko`rdiz?");
  }
}

startProject();

const personalNewsDB = {
  count: numberOfNews,
  news: {},
  actors: {},
  genres: [],
  shop: {},
  privat: false,
};

// For method

function rememberNews() {
  for(let i = 0; i < 1; i++) {
    const a = prompt("Oxirgi ko`rgan yangiliklarizdan bir?"),
          b = prompt("Unga qancha baho bergan bo`lar ediz?");
  
          if( a != null && b != null && a != "" && b != "" && a.length < 50) {
            personalNewsDB.news[a] = b;
            console.log("Tayyor");
          } else{
            console.log("Error !");
            i--;
          }
  }  
}

rememberNews();

// While method

// let x = 0;

// while (x < 1) {
//   const a = prompt("Oxirgi ko`rgan yangiliklarizdan bir?"),
//     b = prompt("Unga qancha baho bergan bo`lar ediz?");

//   if (a != null && b != null && a != "" && b != "" && a.length < 50) {
//     console.log("Tayyor !");
//   } else {
//     console.log(`Error !`);
//     x--;
//   }
//   x++;
// }

// // Do While method

// let y = 0;

// do {
//   const a = prompt("Oxirgi ko`rgan yangiliklarizdan bir?"),
//     b = prompt("Unga qancha baho bergan bo`lar ediz?");

//   y++;

//   if (a != null && b != null && a != "" && b != "" && a.length < 50) {
//     console.log("Tayyor");
//   } else {
//     console.log("Error !");
//     y--;
//   }
// } while (y < 1);

function showPersonalLevel() {
  if (personalNewsDB.count < 10) {
    console.log(`Xabarni kam oqibsiz`);
  } else if (personalNewsDB.count > 10 && personalNewsDB.count < 30) {
    console.log(`Siz klassik tomoshabinsiz!`);
  } else if (personalNewsDB.count > 30) {
    console.log(`Siz yangiliklar ishqibozisiz!`);
  } else {
    console.log(`Xatolik yuz berdi!`);
  }  
}

showPersonalLevel();

function showMyDb(hidden) {
  if( !hidden ) {
    console.log(personalNewsDB);
  }
}

showMyDb(personalNewsDB.privat);

function writeYourGeneres() {
  for(let i = 1; i <= 3; i++) {
    personalNewsDB.genres[i - 1] = prompt(`Sizning yqotirgan janringiz nomer ${i}`);
  }
}

writeYourGeneres();
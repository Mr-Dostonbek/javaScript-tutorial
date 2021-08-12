"use strict";

const personalNewsDB = {
  count: 0,
  news: {},
  actors: {},
  genres: [],
  shop: {},
  privat: false,
  startProject: function () {
    personalNewsDB.count = +prompt("Siz qancha yangilik ko`rdiz?");
    while (
      personalNewsDB.count == "" ||
      personalNewsDB.count == null ||
      isNaN(personalNewsDB.count)
    ) {
      personalNewsDB.count = +prompt("Siz qancha yangilik ko`rdiz?");
    }
  },
  rememberNews: function () {
    for (let i = 0; i < 2; i++) {
      const a = prompt("Oxirgi ko`rgan yangiliklarizdan bir?"),
        b = prompt("Unga qancha baho bergan bo`lar ediz?");

      if (a != null && b != null && a != "" && b != "" && a.length < 50) {
        personalNewsDB.news[a] = b;
        console.log("Tayyor");
      } else {
        console.log("Error !");
        i--;
      }
    }
  },
  showPersonalLevel: function () {
    if (personalNewsDB.count < 10) {
      console.log(`Xabarni kam oqibsiz`);
    } else if (personalNewsDB.count > 10 && personalNewsDB.count < 30) {
      console.log(`Siz klassik tomoshabinsiz!`);
    } else if (personalNewsDB.count > 30) {
      console.log(`Siz yangiliklar ishqibozisiz!`);
    } else {
      console.log(`Xatolik yuz berdi!`);
    }
  },
  showMyDb: function (hidden) {
    if (!hidden) {
      console.log(personalNewsDB);
    }
  },
  toggleVisibleMyDb: function () {
    if (personalNewsDB.privat) {
      personalNewsDB.privat = false;
    } else {
      personalNewsDB.privat = true;
    }
  },
  writeYourGeneres: function () {

    for(let i = 1; i < 2; i++){
      let gener = prompt("Sizning yoqtirgan janringiz nomi, verguldan foydalanib yozing");
      if( gener == "" || gener == null ) {
        console.log("Siz notogri malumot kiritdingiz");
        i--;
      } else {
        personalNewsDB.genres = gener.split(", ");
        personalNewsDB.genres.sort();
      }
    }
    personalNewsDB.genres.forEach((item, index) => {
      console.log(`Sizning yoqtirgan janringiz nomeri ${index + 1} bu ${item}`);
    });

    // 1-usul 
    // for (let i = 1; i < 2; i++) {
    //   let gener = prompt(`Sizning yoqtirgan janringiz nomer ${i}`);
    //   if (gener == "" || gener == null) {
    //     console.log("Siz notog`ri malumot kiritdingiz");
    //     i--;
    //   } else {
    //     personalNewsDB.genres[i - 1] = gener;
    //   }
    // }
    // personalNewsDB.genres.forEach((item, index) => {
    //   console.log(`Sizning sevimli janringiz nomer ${index + 1} bu ${item}`);
    // });
},
};
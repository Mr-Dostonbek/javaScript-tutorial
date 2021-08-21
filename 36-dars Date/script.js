"use strict";

// misol uchun bitta funksiya yozib uni necha sekund ishlaganini sorasa manashu kod yoziladi

const startDate = new Date();
console.log(startDate.getTime());

for(let i = 0; i < 9989898; i++) {
  let a = i ** 3;
}

const endDate = new Date();
console.log(endDate.getTime());

alert(`Tsikl ${endDate - startDate} ishladi`);
"use strict";

// const bmw = {
//   color: "black",
//   isBuy: false
// };

// // Object ni funksiya orqali kopirovat qilish

// // function copyObj(obj) {
// //   let objCopy = {};
// //   for(let key in obj){
// //     objCopy[key] = obj[key];
// //   }
// //   return objCopy;
// // }

// // const NexiaR3 = {
// //   color: "red",
// //   isBuy: true,
// // }

// // let spark = copyObj(NexiaR3);
// // spark.color = "yellow";
// // console.log(spark);
// // console.log(NexiaR3);


// const nexia2 = {
//   color: "red",
//   isBuy: true,
// }

// const extra = {
//   shum: 100
// }

// // Object ni birlashtirish
// console.log(Object.assign(nexia2, extra));

// // Object ni kopirovka qilish formula orqali
// const matiz = Object.assign({}, nexia2);
// matiz.color = "blue";
// console.log(matiz);
// console.log(nexia2);


// // massivlsrni kopirovka qilish

// const arr = [1,23,45,5,45,4];

// function sortArr(a,b) {
//   return a-b;
// }
// const newArr = arr.sort(sortArr).slice();
// newArr[2] = 33;
// console.log(arr);
// console.log(newArr);

// Massivlarda sprid operatorini ishlatish

// const cars = ["nexia", "malibu", "gentra"],
//       planes = ["German", "UzbAirwayes", "Turkish"],
//       technologies = [...cars, ...planes];

// console.log(technologies);

const number = [1,5,6,8,9,7];

function func(a,b,c, ...d) {
  console.log(a);
  console.log(b);
  console.log(c);
  console.log(d);
}

func(...number);
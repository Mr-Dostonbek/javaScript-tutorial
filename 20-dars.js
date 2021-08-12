"use strict";

const array = [1,2,3,4,5,6,7];

// for(let i = 0; i < array.length; i++){
//   console.log(array[i]);
// }

// for(let key of array){
//   console.log(key);
// }


// const colors = [ "red", "yellow", "black" ];

// colors.forEach(function (color, orni, arr) {
//   console.log(color, orni);
// })


// const questions = prompt("Ozizni tanishtiring", "");

// const answers = questions.split(" ");

// console.log(answers);

// console.log(answers.join(" "));

// answers.forEach( function (item, index, arr) {
//   console.log(item, index);
// })

const number = [ 2,10,25,13,1,27 ];

number.sort(sortArr);
console.log(number);

function sortArr(a,b) {
  return a-b;
}
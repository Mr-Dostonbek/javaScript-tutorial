"use strict";

// Suxbatda tushadigan savollar

// 1. Qanday qiymat korsatilinadi? let x = 3; alert(x++);

// let x = 3;
// alert(x++); // alert birinchi x ni chiqaradi
// alert(x); //keyingi qiymatda x 1ga oshib chiqadi

// 2. let, var va const ning qanday farqi bor?

// 3. Null va undefined malumot turlariga kiradimi? javob: ha

// 4. Ushbu kod nimani chiqaradi? let y = 4; let x = y = 8; alert(x);

// let y = 4;
// let x = (y = 8);
// console.log(x); // javobi 8 chiqadi

// 5. [] + 1 + 2 yig`indisi nimaga teng?

// console.log(typeof( 1)); // javobi 12 chiqadi chunki massivning typei object tipda bunga number tipi qo`shilsa string tipiga otadi string tipida esa 1 ga 2 ni qo`shsa 12 boladi.

// 6. Ushbu kod nimani chiqaradi? alert("1"[0]);
// alert("1"[0]); // bunda 1 string tipida [0] bu esa elementning 0chi indexsi 1da 1ta element bolganligi sababli 1 ni chiqaradi

// 7. 2 && 1 && null && 0 && undefined: nimaga teng?

// console.log(2 && 1 && null && 0 && undefined); 
// javobi null chiqadi chunki 2 va 1 true qiymatda null va undefined esa false qiymatda && operatori 1 false chiqgunicha qidiradi null kelganda false chiqadi va amalni ushetning ozida to'xtatadi

// 8. Taqqoslash tog`rimi: ''Olma" > "yolbars";

// console.log("Olma" > "yolbars"); // javob false

// 9. Ushbu kod nimani chiqaradi? alert(+ 'infinity');

// alert(+'infinity'); //NaN chiqadi chunki infinity string tipida

// 10. a=[1,2,3]; b[1,2,3]; a va b tengmi (a==b) ?

let a = [1, 2, 3];
let b = [1, 2, 3];

console.log(a==b);

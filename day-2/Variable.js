// Variable in javascript

/* 
  1. var merupakan Variable global
	2. let adalah variable yang bisa di kembalikan nilai
*/

// 1 var
var a = 1;
console.log(a); 

// 2 let
let b =1;
b=2;
console.log(b);

// 3 const
const name = 'Wiliam';
console.log(name);

// Validate var as global & let, const in local
if(a===1){
	var c=2; // bisa di panggil di luar statment function atau kondisi
  let d; // hanya bisa di panggil di local
	const e=5; // hanya bisa di panggil di local
}
console.log(c); // result 2
console.log(d); // result error
console.log(e); // result error


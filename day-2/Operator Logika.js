// Operator logika

// || (OR
console.log(true || false); // true
console.log(true || true); //true
console.log(false || true);//true
console.log(false || false); // false

if( 5 || 10){
	console.log('Benar');
}

let nilai = 100;
let nilaiHuruf = 'A';

if(nilai <100 || nilaiHuruf === 'A'){
	console.log('Grade A');
}

console.log(undefined || 1);

// && (AND)
console.log(true && false); // false
console.log(true && true); //true
console.log(false && true);//false
console.log(false && false); // false

if( 5 && 10){
	console.log('Benar');
}

const x =1;
if(x>0) console.log('Yes');
(x>0) && console.log('Yes');

const jamDatang = '09.00';
const seragam = 'Batik';

if(jamDatang === '09.00' && seragam !== 'Batik') {
	console.log('Boleh Masuk');
}else{
	console.log('Tidak Boleh Masuk');
}

// !NOT 
const nilai = true;
console.log(!nilai);


let nilai = true;
do {
	if(!nilai){
   console.log('1');
	}else{
   console.log('x');
	}
	// nilai = false;
} while (nilai);
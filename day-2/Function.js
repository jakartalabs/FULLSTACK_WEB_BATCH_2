// Function in javascript
function showMessage(message1, message2){
	console.log('Hallo' , message1 + message2);
	console.log(`Hallo  ${message1} ${message2}`);
}

showMessage('julio', 'coach');

//function as variable 
const showMessage1 = function (){
	console.log('Hallo');
}

showMessage('julio', 'coach');
console.log(showMessage1());

//arrow function
let func1 =()=>console.log('data');

func1();

let func2 =(a)=>{console.log(a); console.log(a);};

func2(1);


// parser parameter
function jumlah(a, b){
	if(a && b){
		console.log(a+b)
	}
	console.log('Not Valid');
}


function main() {
 jumlah(1,2);
 console.log([['a', 'b', 'c'], ['1']]);
}

main();
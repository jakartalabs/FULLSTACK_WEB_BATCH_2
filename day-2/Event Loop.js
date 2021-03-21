let i =0;
let start =Date.now();

function count(){
	for(let j=0; j<10; j++){
		i++;
		console.log(i);
	}
	console.log('Habis ' + (Date.now()-start)+'ms');
}
count();
// Array in javascript
// cara declarasi
// let arr = [];
// let array = new Array();

// select array by index
let arr = [['a', 'b', 'c'], ['1']];
console.log(arr[0]);
console.log(arr[2]);

// ambil panjang array
console.log(arr.length)

// store array
arr.push('x')
console.log(arr.length)

// pop in array
arr.pop();
console.log(arr.length)

// shift in array
arr.shift();
console.log(arr)

// unshift in array
arr.unshift('a');
console.log(arr)

loop array
for(let ar of arr){
	console.log(ar);
}

for(let i=0; i< arr.length; i++){
	console.log(arr[i]);
}

for(let key in arr){
	console.log(arr[key])
}

arr.forEach(element => {
  console.log(element)
});


let user = {
	name: 'joko',
	age: 30
};


console.log(user);
console.log(user.name);
console.log(user.age);

// length
// user = [{
// 	name: 'joko',
// 	age: 30
// }];
// console.log(user.length);

for(let key in user){
 console.log(key);
 console.log(user[key]);
}

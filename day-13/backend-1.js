// callsrack

// function penjumlahan(a,b){
//   return a+b;
// }

// function perkalian(a, b) {
//   return a * b;
// }
// const a=10, b=5;

// function main() {
//   const c= penjumlahan(a, b);
//   const d= perkalian(a, b);
//   console.log(c);
//   console.log(d);
// }

// main();


//event loop

function satu() {
  console.log('1');
}


function dua() {
  setTimeout(() => {
    console.log('2');
  }, (0));
}


function tiga() {
  console.log('3');
}

// satu();
// tiga();
// dua();

// callback
// function notif() {
//   console.log('OK');
// }

function highOrder(pesan, callback){
  console.log(pesan);
  console.log(callback);
  callback();
}

// highOrder('sudah masuk', notif);

//Callbackhell

function asyncPro(args, callback){
  if(!args){
    return callback(new Error('Error nih'));
  }else{
    return setTimeout(() => callback(null, { body: `data ${args}`}))
  }
}
const fs = require('fs');

// function hell(){
//   asyncPro('First', function first(err, res){
//     if(err){
//       console.log(err);
//       return;
//     }
//     console.log(res);
//     asyncPro('Second', function second(err, res){
//       if (err) {
//         console.log(err);
//         return;
//       }
//       console.log(res)
//       asyncPro(null, function third(err, res){
//         if (err) {
//           console.log(err);
//           return;
//         }
//         console.log(res)
//       })
//     })
//   })
// }
// hell();
const data1 = new Promise((resolve, reject) =>{
  asyncPro('First', function first(err, res) {
    if(err){
      // console.log(err);
      // return;
      return reject(err);
    }
    // console.log(res)
    var files = [];
    for (var i = 0; i < 100; ++i) {
      const data = new Uint8Array(Buffer.from('Hello Node.js'));
      files.push(fs.writeFile(`message${i}.txt`, data, (err) => {
        if (err) throw err;
      }));
    }
    return resolve(res);
  })
})

// const data2 = new Promise((resolve, reject) => {
//   asyncPro('Second', function first(err, res) {
//     if (err) {
//       console.log(err);
//       return;
//     }
//     // console.log(res)
//     setTimeout(() => console.log('kirim data ke server lain'), 2000)
//     resolve(res);
//   })
// })

// const data3 = new Promise((resolve, reject) => {
//   asyncPro('Thrid', function first(err, res) {
//     if (err) {
//       // console.log(err);
//       return;
//     }
//     // console.log(res)
//     resolve(res);
//   })
// })
const exAsync = new Promise((resolve, reject) => {
    for (var i = 0; i < 100; ++i) {
      console.log(setTimeout(()=>console.log(i), 200))
    }
    resolve('sedangDiproses');
});

async function mainPromise() {
  // first();
  console.log(exAsync);
  // console.log(await data3);
}
mainPromise();
// var files = [];
// for (var i = 0; i < 100; ++i) {
//   const data = new Uint8Array(Buffer.from('Hello Node.js'));
//   files.push(fs.writeFile(`message${i}.txt`, data, (err) => {
//     if (err) throw err;
//   }));
// }
// Promise.all(files).then(function () {
//   console.log("all the files were created");
// });
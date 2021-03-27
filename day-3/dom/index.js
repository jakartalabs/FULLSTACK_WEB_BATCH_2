//  basic manipulation dom
const list = document.getElementById('list');
const div = document.createElement('div');

// list.firstElementChild.classList.add('active');
// div.innerHTML = "New Div";
// div.classList.add('drag')
// list.appendChild(div);
// list.prepend(div);

const clone = list.cloneNode(true);
// clone.firstElementChild.classList.addx('active');
const parent = list.parentNode;

const siblings = [].slice.call(parent.children).filter(function(child) {
  return child !== list;
})

console.log(siblings)
// console.log(clone);


// Counter text in text area
const pesanElement = document.getElementById('pesan');
const counterElement = document.getElementById('counter');

pesanElement.addEventListener('input', function(event) {
  const target = event.target;
  const maxLength = target.getAttribute('maxLength');
  const currentLength = target.value.length;
  counterElement.innerHTML ='Panjang text' + currentLength+ 'dari' + 'maxLength'
})

const fileElement = document.getElementById('fileInput');
const previewElement = document.getElementById('preview');


fileElement.addEventListener('change' , function(event) {
  const file = event.target.files[0];
  // Cara 1
  const url = URL.createObjectURL(file);
  previewElement.src = url;
  //  Cara 1
  // const reader = new FileReader();
  // reader.addEventListener('load', function() {
  //   previewElement.src=reader.result;
  // })
  // reader.readAsDataURL(file);
})

const listElementInput = document.getElementById('list-text');
const buttonElement = document.getElementById('add-input');



buttonElement.addEventListener('click', function(){
  const _input = document.createElement('input');
  _input.type='text';
  _input.name = 'satu';
  _input.value = 'satu';

  listElementInput.appendChild(_input);
  console.log('click');
})






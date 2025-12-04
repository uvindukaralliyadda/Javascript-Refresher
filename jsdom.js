//Single Element
/*
console.log(document.getElementById(`my-form`));
console.log(document.querySelector(`h1`));

//Multiple Element

console.log(document.querySelectorAll(`.item`));
console.log(document.getElementsByClassName(`item`));

*/
/*

const items=document.querySelectorAll(`.item`);
items.forEach((item) => console.log(item));

*/

/* queries by class

const ul= document.querySelector(`.items`);

ul.firstElementChild.textContent=`Hello`;
ul.children[1].innerText=`Brad`;
ul.lastElementChild.innerHTML=`<h1>Hello</h1>`;


const btn=document.querySelector('.btn');
btn.style.background=`red`;

*/

//Event listener

const btn =document.querySelector(`.btn`);
btn.addEventListener(`click`, (e) =>{
    e.preventDefault();
    console.log(e);
});


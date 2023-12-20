const btn = document.querySelector('#generator');
const person = document.querySelector('#name');
const person1 = document.querySelector('#name1');
const image = document.querySelector('.image');
const un = document.querySelector('#username');
const email = document.querySelector('#email');
const web = document.querySelector('#website');
const apiURL = 'https://jsonplaceholder.typicode.com/users';



async function RandomPortfolio(){
    console.log("dfjnvidx");
    const res = await fetch(apiURL);
    const json = await res.json();
    person.innerText = json[0].name;
    person1.innerText = json[0].name;
    un.innerText = json[0].username;
    email.innerText = json[0].email;
    web.innerText = json[0].website;
}


btn.addEventListener('click',RandomPortfolio);

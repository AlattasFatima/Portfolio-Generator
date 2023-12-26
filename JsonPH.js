const btn = document.querySelector('#generator');
const person = document.querySelector('#name');
const person1 = document.querySelector('#name1');
const image = document.querySelector('.image');
const un = document.querySelector('#username');
const email = document.querySelector('#email');
const web = document.querySelector('#website');
const apiURL = 'https://jsonplaceholder.typicode.com/users';



async function RandomPortfolio(){
    const res = await fetch(apiURL);
    const json = await res.json();

    let random = Math.floor(Math.random() * json.length);
    person.innerText = json[random].name;
    person1.innerText = ("Name : "+json[random].name);
    un.innerText = ("Username : "+json[random].username);
    email.innerText = ("Email : "+json[random].email);
    web.innerText = ('Website : '+json[random].website);
}

btn.addEventListener('click',RandomPortfolio);

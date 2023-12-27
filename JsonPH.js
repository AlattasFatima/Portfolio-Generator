const btn = document.querySelector('#generator');
const person = document.querySelector('#name');
const person1 = document.querySelector('#name1');
const image1 = document.querySelector('#image1');
const image2 = document.querySelector('#image2');
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
    switch (random){
        case 0:
            image1.src = 'https://academicminute.org/wp-content/uploads/2020/11/leanne_dzubinski01-684x1024.jpg';
            image2.src = 'https://academicminute.org/wp-content/uploads/2020/11/leanne_dzubinski01-684x1024.jpg';        
        break;
        case 1:
            image1.src = 'https://huskers.com/imgproxy/Sdr4Nn6mlIQGwAuRUiMMW0FGC0U6OMWPPd01E_aFT5c/rs:fit:1980:0:0:g:ce/q:90/aHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL2h1c2tlcnMtY29tLXByb2QvMjAyMy8wNi8zMC9JTnJqanR4b0tKVThjVGl2UlZ3MEs0alpyTThPaFl5WGpTYlN1b25aLmpwZw.jpg'
            image2.src = 'https://huskers.com/imgproxy/Sdr4Nn6mlIQGwAuRUiMMW0FGC0U6OMWPPd01E_aFT5c/rs:fit:1980:0:0:g:ce/q:90/aHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL2h1c2tlcnMtY29tLXByb2QvMjAyMy8wNi8zMC9JTnJqanR4b0tKVThjVGl2UlZ3MEs0alpyTThPaFl5WGpTYlN1b25aLmpwZw.jpg'
        break;
        case 2:
            image1.src ='https://www.shutterstock.com/image-photo/head-shot-profile-photo-portrait-260nw-1831529317.jpg'
            image2.src ='https://www.shutterstock.com/image-photo/head-shot-profile-photo-portrait-260nw-1831529317.jpg'
        break;
        case 3:
            image1.src = 'https://images.squarespace-cdn.com/content/v1/5f0ceb84e6ecb31d19857da2/5a6b383d-f15a-4e34-b599-a7e5a2159cc1/Personal+Branding+Fotograf+in+Innsbruck+Tirol.jpg?format=1500w'
            image2.src = 'https://images.squarespace-cdn.com/content/v1/5f0ceb84e6ecb31d19857da2/5a6b383d-f15a-4e34-b599-a7e5a2159cc1/Personal+Branding+Fotograf+in+Innsbruck+Tirol.jpg?format=1500w'
        break;
        case 4:
            image1.src = 'https://www.paralympic.org/sites/default/files/2019-10/Chelsey%20Gotell.jpg'
            image2.src = 'https://www.paralympic.org/sites/default/files/2019-10/Chelsey%20Gotell.jpg'
        break;
        case 5:
            image1.src = 'https://emilykylephotography.com/wp-content/uploads/sites/21905/2021/07/Detroit_Personal_Brand_Photographer_0001-1.jpg'
            image2.src = 'https://emilykylephotography.com/wp-content/uploads/sites/21905/2021/07/Detroit_Personal_Brand_Photographer_0001-1.jpg'
        break;
        case 6:
            image1.src = 'https://www.hbl.com/assets/images/HBL_PERSONALLOAN_2.png'
            image2.src = 'https://www.hbl.com/assets/images/HBL_PERSONALLOAN_2.png'
        break;
        case 7:
            image1.src = 'https://images.financebuzz.com/446x235/filters:quality(75)/images/2019/10/30/borrow_low_interest_personal_loans.jpg'
            image2.src = 'https://images.financebuzz.com/446x235/filters:quality(75)/images/2019/10/30/borrow_low_interest_personal_loans.jpg'
        break;
        case 8:
            image1.src = 'https://i.pinimg.com/736x/a7/d9/90/a7d9906e32415c8124e8c98f6cdbb16f.jpg'
            image2.src = 'https://i.pinimg.com/736x/a7/d9/90/a7d9906e32415c8124e8c98f6cdbb16f.jpg'
        break;
        case 9:
            image1.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGzYJorb32UYQ5HvclpXHxsLRZBZn1aHQEPPtHHjZoorkmChC1dQn6IzYfE6LAskNs4Jc&usqp=CAU'
            image2.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGzYJorb32UYQ5HvclpXHxsLRZBZn1aHQEPPtHHjZoorkmChC1dQn6IzYfE6LAskNs4Jc&usqp=CAU'
        break;
        }//switch
        
    
}

btn.addEventListener('click',RandomPortfolio);

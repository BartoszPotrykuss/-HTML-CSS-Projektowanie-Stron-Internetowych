let month = document.querySelector('#month');
let year = document.querySelector('#year');
let main = document.querySelector('main');
let kalendarz = document.querySelector('h1');
let data = new Date();
let newMonth = data.toLocaleString(navigator.language, {month:'long'});
let newYear = data.toLocaleString(navigator.language, {year: 'numeric'});
month.innerText = newMonth;
year.innerText = newYear;
newMonth = data.getMonth()+1;

kalendarz.addEventListener('click', () => {
    for (let index = 0; index < 30; index++) {
        let box = document.createElement('div');
        box.classList.add('box');
        box.id = `box${index + 1}`;
        box.innerText = `${newYear}-${newMonth}-${parseInt(index+1)}`
        main.appendChild(box);
    }
})

function dodajWpis() {
    let wpis = document.querySelector("#text").value;
    let dzienMiesiaca = document.querySelector("#day").value;
    let box = document.querySelector(`#box${dzienMiesiaca}`);
    let wpisP = document.createElement('p');
    wpisP.innerText= wpis;
    box.appendChild(wpisP);
}

function usunWpis() {
    let dzienMiesiaca = document.querySelector("#day").value;
    let elementy = document.querySelector(`#box${dzienMiesiaca}`).innerHTML="";
    
}
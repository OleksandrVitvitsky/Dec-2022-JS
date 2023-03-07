// Стоврити форму з трьома полями для name,sruname,age та кнопкою.
// При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ.
// Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом
const form1 = document.forms.form1;
let name  = document.forms.form1.name;
let surname = document.forms.form1.surname;
let age = document.forms.form1.age;

form1.onsubmit = function (event) {
    event.preventDefault();
    if (name !=='' && surname !== '' && age !== 0) {
        let user = {};
        user.name = name.value;
        user.surname = surname.value;
        user.age = age.value;

        let boxTask1 = document.getElementById('task1');
         let resultBox = document.createElement('div');
        resultBox.classList.add('resultBox');
         resultBox.innerHTML = `<p> <b>User: ${user.name} ${user.surname} (${user.age}) created!!!</b></p>`;
         boxTask1.appendChild(resultBox);
    } else {
        alert('Enter all the fields!!!');
    }
}


// ==========================
// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1
const ourBox = document.getElementsByClassName('boxTask2');
let lsData = localStorage.getItem('increm');
if (!lsData){
    localStorage.setItem('increm',JSON.stringify({value: 1}));
} else {
    let lsValue = JSON.parse(lsData);
    lsValue.value++;
    console.log(lsValue);
    localStorage.setItem('increm', JSON.stringify(lsValue));
}
ourBox[0].innerText = `${JSON.parse(localStorage.getItem('increm')).value}`;

const btnRefresh = document.getElementById('refreshTask2');
btnRefresh.onclick = function () {
    location.reload();
}


// ==========================
// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessions зберігається інформація про дату та час відвідування сторінки. Є ще сторінка sessions.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію

let arrSessions = JSON.parse(localStorage.getItem('sessions')) || [];
arrSessions.push(new Date());
localStorage.setItem('sessions', JSON.stringify(arrSessions));
// зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
// При натисканні next виводяться настпні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів
let arrObjects = [];
for (let i = 1; i <= 100; i++) {
    arrObjects.push({name: "Object: " + i});
}

let arrayElementsBox = document.getElementById('arrayElements');
let table = document.createElement('table');
table.setAttribute('id', 'table');
let counters = 1;
for (let r = 1; r <= 5;r++){
    let row = document.createElement('tr');
    row.setAttribute('id', `row${r}`);
    for (let cl = 1; cl <= 2; cl++) {
        let col = document.createElement('td');
        col.setAttribute('id', `col${counters}`);
        row.appendChild(col);
        counters++;
    }
    table.appendChild(row);
}
arrayElementsBox.appendChild(table);

let startIndex = 0;
let maxIndex = 9;

function Show10Elements(){

  for (let i = startIndex; i<=maxIndex; i++) {
      let numberCol = i+1;
      if (i >= 10) {
          numberCol = (i+1)%10;
          if (numberCol === 0) {numberCol+=10}
      }
      let cell = document.getElementById(`col${numberCol}`)
      cell.innerHTML = `<b>${arrObjects[i].name}</b>`;
  }
}
Show10Elements();

let btnPrev = document.getElementById('prev');
btnPrev.addEventListener('click',function (){
    if (startIndex > 0){
        maxIndex -= 10;
        startIndex -= 10;
        Show10Elements();
    }
})
let btnNext = document.getElementById('next');
btnNext.addEventListener('click',function (){
    if (maxIndex < arrObjects.length-1){
        maxIndex += 10;
        startIndex += 10;
        Show10Elements();
    }
})

// *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)


let boxTable = document.createElement('div');
boxTable.classList.add('form_task2');
let formTable = document.createElement('form');
let breakLine1 = document.createElement('br');
let breakLine2 = document.createElement('br');
let breakLine3 = document.createElement('br');
let row = document.createElement('input');
row.name = 'rowQuantity';
row.type = 'number';
row.placeholder = 'enter row quantity';
row.min = 0;
row.value = 3;
let column = document.createElement('input');
column.name = 'columnQuantity';
column.type = 'number';
column.placeholder = 'enter column quantity';
column.min = 0;
column.value = 4;
let contents = document.createElement('input');
contents.name = 'typeOfContents';
contents.type = 'text';
contents.placeholder = 'enter your table contens';
contents.value = '';
let button = document.createElement('button');
button.type = 'button';
button.innerText = 'Create table';
button.addEventListener('click', (e) => {
    let rows = formTable.rowQuantity.value;
    let columns = formTable.columnQuantity.value;
    let strContents = formTable.typeOfContents.value.trim();
    if (rows === 0 || columns === 0
        || strContents === '') {
        return alert('Enter all the fields!!!');
    } else {
        let table = document.createElement('table');
        table.setAttribute('id', 'table1');
        for (let i = 0; i < rows; i++) {
            let rowTable = document.createElement('tr');

            for (let j = 0; j < columns; j++) {
                let columnTable = document.createElement('td');
                columnTable.innerText = strContents;
                rowTable.appendChild(columnTable);
            }
            table.appendChild(rowTable);
        }
        boxTable.appendChild(table);
    }
});
formTable.appendChild(row);
formTable.appendChild(breakLine1);
formTable.appendChild(column);
formTable.appendChild(breakLine2);
formTable.appendChild(contents);
formTable.appendChild(breakLine3);
formTable.appendChild(button);
boxTable.appendChild(formTable);
document.getElementsByClassName('containerTask5')[0].appendChild(boxTable);
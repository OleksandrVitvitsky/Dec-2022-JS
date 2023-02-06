// Масиви та об'єкти:
// Створити масив, наповнити його 10 елементами будь - якого типу, вивести кожен елемент в консоль

let array_CitiesOfUkraine = [
    'Kyiv',
    'Lviv',
    'Dnipro',
    'Poltava',
    'Odesa',
    'Kharkiv',
    'Khmelnytsky',
    'Rivne',
    'Ternopil',
    'Chernigiv'
];
console.log(array_CitiesOfUkraine[0], array_CitiesOfUkraine[1]);
console.log(array_CitiesOfUkraine[2], array_CitiesOfUkraine[3]);
console.log(array_CitiesOfUkraine[4], array_CitiesOfUkraine[5]);
console.log(array_CitiesOfUkraine[6], array_CitiesOfUkraine[7]);
console.log(array_CitiesOfUkraine[8], array_CitiesOfUkraine[9]);
// ----------------------------------------------------------------


// Створити 3 об 'єкти, які описують книги. Поля об'єкту : title , pageCount, genre

let obj_Book1 = {
    title: 'A Song of Ice and Fire',
    pageCount: 768,
    genre: 'Epic fantasy'
}
let obj_Book2 = {
    title: 'A Clash of Kings',
    pageCount: 1040,
    genre: 'Fantasy'
}
let obj_Book3 = {
    title: 'A Dance with Dragons',
    pageCount: 1016,
    genre: 'Fantasy'
}

// ------------------------------------------------------------------------

// Створити 3 об'єкти які описують книги. Поля об' єкту : title , pageCount, genre, authors.Поле "автори" - являється
// масивом.Кожен автор має поля name та age.

let obj_Book4 = {
    title: 'The Picture of Dorian Gray',
    pageCount: 320,
    genre: 'novel',
    author: {name: 'Oscar Wilde', age: 36}
}

let obj_Book5 = {
    title: obj_Book1['title'],
    pageCount: obj_Book1.pageCount,
    genre: obj_Book1.genre,
    author: {name: 'George R. R. Martin', age: 74}
}
let obj_Book6 = {
    title: 'Harry Potter and the Cursed Child)',
    pageCount: 336,
    genre: 'Fantasy',
    author: {name:'Joanne Rowling', age: 57}
}

// ------------------------------------------------------------------------
// -Створити масив з 10 об 'єктами які описують сутніть "користувач".
// Поля: name, username,password.
// Вивести в консоль пароль кожного користувача

let array_users = [
    {name: 'Jon Snow', username: 'jon.snow', password: 'jsQazWsx'},
    {name: 'Aria Stark', username: 'aria.stark', password: 'aS7854Hnbfnsdl'},
    {name: 'Daenerys Targaryen', username: 'daenerys.targaryen', password: 'hjkb786765o'},
    {name: 'Sansa Stark', username: 'sansa.stark', password: 23234111246},
    {name: 'Joffrey Baratheon', username: 'joff.Bar', password: 'dsv21VDvbf'},
    {name: 'Sandor Clegane', username: 'Sandor.Clegane', password: 'advDSvnjk3'},
    {name: 'Tyrion Lannister', username: 'Tyrion', password: 'DSRGBsvsdv'},
    {name: 'Khal Drogo', username: 'DrogoPups', password: 'SsdvSdvcv'},
    {name: 'Jaime Lannister', username: 'JaimeKingslayer', password: 'Zewq23bgdVSv'},
    {name: 'Cersei Lannister', username: 'Cersei.Lannister', password: '13VdsseEevb'}
];
console.log(array_users[0].password);
console.log(array_users[1]['password']);
console.log(array_users[2].password);
console.log(array_users[3]['password']);
console.log(array_users[4].password);
console.log(array_users[5]['password']);
console.log(array_users[6].password);
console.log(array_users[7]['password']);
console.log(array_users[8]['password']);
console.log(array_users[9]['password']);

// Логічні розгалуження:
// Є змінна х, якій ви надаєте довільне числове значення.Якщо змінна x не дорівнює нулю, виведіть 'Вірно',
//     інакше виведіть 'Невірно'.Перевірте скрипт при a, що дорівнює 1, 0, -3

let x = +prompt('Enter a number', 0);
if (x !== 0) {
    console.log(true);
} else {
    console.log(false);
}
// Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let time = +prompt('enter number from 0 to 59', 0);
if (time <= 0 || time > 60) {
    console.log('Your number doesnt belong to the quarter');
} else if ( time < 15) {
    console.log('Your number is in the first quarter');
} else if (time < 30) {
    console.log('Your number is in the second quarter');
} else if (time < 45) {
    console.log('Your number is in the third quarter');
} else if (time < 60) {
    console.log('Your number is in the fourth quarter');
}

// У змінній day дано якесь число від 1 до 31.
// Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let day = +prompt('enter number from 0 to 31', 0);
if (day <= 0 || day > 31) {
    console.log('Your number doesnt belong to the decade of the month');
} else if (day <= 10) {
    console.log('Your number is in the first decade of the month');
} else if (time <= 20) {
    console.log('Your number is in the second decade of the month');
} else if (time <= 31) {
    console.log('Your number is in the third decade of the month');
}

// Скласти розклад на тиждень за домопоги switch.
// Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану
// на день, назву дня англійською).

let dayOfWeek = +prompt('Enter a day number of week:', 0);
switch (dayOfWeek) {
    case 1:
        console.log('Your day is Monday');
        break;
    case 2:
        console.log('Your day is Tuesday');
        break;
    case 3:
        console.log('Your day is Wednesday');
        break;
    case 4:
        console.log('Your day is Thursday');
        break;
    case 5:
        console.log('Your day is Friday');
        break;
    case 6:
        console.log('Your day is Saturday');
        break;
    case 7:
        console.log('Your day is Sunday');
        break;
    default:
        console.log('We can not find your day');

}

// Користувач вводить або має два числа.
// Потрібно знайти та вивести максимальне число з тих двох .
// Також потрібно врахувати коли введені рівні числа.


let a = +prompt('Enter a first number',0);
let b = +prompt('Enter a second number',0);
// v.1
if (a === b ){
    console.log('Your numbers are equal!');
} else if (a > b) {
    console.log('Your number:' + a +' is MAX!');
} else if (a < b) {
    console.log('Your number:' + b + ' is MAX!');
}
// v.2
if (a === b ){
    console.log('Your numbers are equal!');
} else  {
    console.log('Your number: ' + Math.max(a,b) +' is MAX!');
}
//
// є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
// за допомоги  оператора || буде присвоювати змінній х значення "default"
// якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)

let y = 0;
if ((!!y === !!0) || (!!y === !!'') || (!!y === !!NaN) || (!!y === !!undefined) || (!!y === !!null)) {
    y = 'default';
    console.log(y);
}

// з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray.
// За допомоги іф перевірити кожен його елемент на тривалість навчання.
// У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];


// за умовами нам заборонено використовувати функції та методи вирішення задач, по я ким не було лекцій
// Але наступний код являється "гав....кодом"

if (coursesAndDurationArray[0].monthDuration >= 5) {
    console.log(coursesAndDurationArray[0].title + '  -  Super!!!');
}
if (coursesAndDurationArray[1].monthDuration >= 5) {
    console.log(coursesAndDurationArray[1].title + '  -  Super!!!');
}
if (coursesAndDurationArray[2].monthDuration >= 5) {
    console.log(coursesAndDurationArray[2].title + '  -  Super!!!');
}
if (coursesAndDurationArray[3].monthDuration >= 5) {
    console.log(coursesAndDurationArray[3].title + '  -  Super!!!');
}
if (coursesAndDurationArray[4].monthDuration >= 5) {
    console.log(coursesAndDurationArray[4].title + '  -  Super!!!');
}
if (coursesAndDurationArray[5].monthDuration >= 5) {
    console.log(coursesAndDurationArray[5].title + '  -  Super!!!');
}


// правильно це зробити це треба за допомогою циклу

for (let i = 0; coursesAndDurationArray.length; i++) {
    if (coursesAndDurationArray[i].monthDuration >= 5) {
        console.log(coursesAndDurationArray[i].title + '  -  Super!!!');
    }
}
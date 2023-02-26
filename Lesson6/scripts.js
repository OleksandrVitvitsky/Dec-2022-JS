// - Знайти та вивести довижину настипних стрінгових значень
//     'hello world', 'lorem ipsum', 'javascript is cool'
const ArrayOfStrings = ['hello world', 'lorem ipsum', 'javascript is cool'];

// v.1
for (const stringItem of ArrayOfStrings) {
    console.log(`Length of string ${stringItem}  = ${stringItem.length} symbols`);
}

// v.2
console.log('-------------------');
for (const stringItem of ArrayOfStrings) {
    console.log(`Length of string ${stringItem}  = ${stringItem.split('').length} symbols`);
}
// Перевести до великого регістру наступні стрінгові значення
//       'hello world', 'lorem ipsum', 'javascript is cool'
const ArrayOfStringsInUpperCase = [];
for (const stringItem of ArrayOfStrings) {
    let itemInUpperCase = stringItem.toUpperCase();
    ArrayOfStringsInUpperCase.push(itemInUpperCase);
    console.log(`Uppercase  of string ${stringItem}  = ${itemInUpperCase}`);
}
// - Перевести до нижнього регістру настипні стрінгові значення
//       'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
for (const stringItem of ArrayOfStringsInUpperCase) {
    console.log(`LowerCase  of string ${stringItem}  = ${stringItem.toLowerCase()}`);
}

// Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let text1 = ' dirty string   ';
console.log(text1.trim());

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
//     let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

function stringToArray(strToArray) {
    let space = ' ';
    return strToArray.split(space);
}
let str = 'Ревуть воли як ясла повні';
let arr = stringToArray(str);
console.log(arr);

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
let arrayOfNumbers = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
let arrayStringNumbers = arrayOfNumbers.map(item => {
    return item +'';
});
console.log(arrayOfNumbers);
console.log(arrayStringNumbers);

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.
// let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]


function sortNums(arrNums, direction)
{
    if (direction === 'descending') {
        arrNums.sort(function (a, b) {
            return b - a;
        });
    } else if (direction === 'ascending') {
        arrNums.sort(function (a, b) {
            return a - b;
        });
    }
    return arrNums;
}
let arrOfNums = [11, 21, 3,7,33,124,6547,-12,0,231,-987];
let sortedNums = sortNums(arrOfNums, 'ascending');
console.log(sortedNums);

// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//  -- відсортувати його за спаданням за monthDuration
//  -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
//  -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
//  =========================

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration
let sortCourses = coursesAndDurationArray.sort((a, b) => {
    return b.monthDuration - a.monthDuration;
});
console.log(sortCourses);

// - відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
let filterCourses = coursesAndDurationArray.filter((item) => item.monthDuration > 5);
console.log(filterCourses);

// за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

let newCoursesAndDurationArray = coursesAndDurationArray.map((item,index) => {
    return {
        id: index++,
        title: item.title,
        monthDuration: item.monthDuration
    }
});
console.log(newCoursesAndDurationArray);

//  описати колоду карт (від 6 до туза без джокерів)
//  - знайти піковий туз
//  - всі шістки
//  - всі червоні карти
//  - всі буби
//  - всі трефи від 9 та більше
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//     value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
let cardSuitsArray = ['spades', 'diamonds', 'hearts', 'clubs'];
let cardsArray = [6 ,7 , 8 , 9 , 10 ,'J','Q','K','A'];
const Deck =[];
for (const suitItem of cardSuitsArray) {
    let color = 'red';
    if (suitItem === 'spades' || suitItem === 'clubs' ){
      color = 'black';
    }
    for (const cardItem of cardsArray) {
        Deck.push({
            cardSuit: suitItem,
            value: cardItem,
            color: color
        });
    }
}
console.log(Deck);
//====================================
// Всі завдання пошуку карт з колоди можна виконати декількома варіантами
// за допомогою звічайних циклів
// За допомогою методу forEach
// За допомогою методу filter
// Перше завдання для наглядності виконано двома способами, всі інші за допомогою filter


// знайти піковий туз

//Варіант №1
let searchSpadeA1 = [];
Deck.forEach((card) => {
    if (card.cardSuit === 'spades' && card.value === 'A') {
        searchSpadeA1.push(card);
    }
});
console.log(searchSpadeA1);

// Варіант №2
let searchSpadeA2 = Deck.filter((item) => item.cardSuit === 'spades' && item.value === 'A');
console.log(searchSpadeA2);
//-----------------------
 // - всі шістки

let all_sixCards = Deck.filter((item) => item.value === 6);
console.log(all_sixCards);

// всі червоні карти
let all_redCards = Deck.filter(item => item.color === 'red');
console.log(all_redCards);

// - всі буби
let all_diamondsCards = Deck.filter(item => item.cardSuit === 'diamonds');
console.log(all_diamondsCards);

// всі трефи від 9 та більше
let all_highCards = Deck.filter(item => item.cardSuit === 'clubs' &&
    (item.value >= 9 || typeof item.value === 'string'));
console.log(all_highCards);

// Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
// }
// =========================

let reducedDeck = Deck.reduce((acc, item) => {
        acc[item.cardSuit].push(item);
        return acc;
    },
    {spades: [], diamonds: [], hearts: [], clubs: []});
console.log(reducedDeck);

// взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
// --написати пошук всіх об'єктів, в який в modules є sass
// --написати пошук всіх об'єктів, в який в modules є docker

let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

let filteredCoursesArr = coursesArray.filter(item =>
    item.modules.includes('sass'));
console.log(filteredCoursesArr);

let filteredCoursesArr2 = coursesArray.filter(item =>
    item.modules.includes('docker'));
console.log(filteredCoursesArr2);
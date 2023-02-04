// -Створит змінні.Присвоїти
// кожному з них значення: 'hello', 'owu', 'com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false
// Вивести кожну змінну за допомогою: console.log
let word1 = 'hello';
console.log(word1);

let word2 = 'owu';
console.log(word2);

let word3 = 'ua';
console.log(word3);

const Num1 = 1;
console.log(Num1);

const Num2 = 10;
console.log(Num2);

let num3 = -999;
console.log(num3);

let num4 = 123;
console.log(num4);

const PI=3.14;
console.log(PI);

let num5 = 2.7;
console.log(num5);

let num6 = 16;
console.log(num6);

const BooleanTrue = true;
console.log(BooleanTrue);

const BooleanFalse = false;
console.log(BooleanFalse);

// Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ.З 'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)


let firstName = 'Oleksandr';
let middleName = 'Vasyliovych';
let lastName = 'Vitvitsky';

const Person = lastName + ' ' + firstName +' '+ middleName;
console.log(Person);

const Person2 = `${lastName} ${firstName} ${middleName}`;
console.log(Person2);

// За допомогою оператора typeof визначити
// типи наступних змінних та вивести
// їх в консоль.let a = 100; let b = '100'; let c = true;

let a = 100;
let b = '100';
let c = true;

console.log(`Type of a = ${typeof a},\ntype of b = ${typeof b},\ntype of c = ${typeof c} `);
//
// Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
// та вивести в консоль

 firstName = prompt('Enter your first name!', '');
 lastName  = prompt('Enter your last name!', '');
let age    = +prompt('How old are you?', 0);

console.log(`My name is ${firstName} ${lastName}\nI'm ${age} `);
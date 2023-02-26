// ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!
////////////////////////////////////////////
const Pi = 3.141592;

// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

let area_Rectangle = (weight, height) => height * weight;
console.log(area_Rectangle(33, 66));

// - створити функцію яка обчислює та повертає площу кола з радіусом r

let area_Stake = (radius) => Pi * (2 * radius);
console.log(area_Stake(142));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

let area_Cylind = (radius, height) => 2 * Pi * radius * (radius + height);
console.log(area_Cylind(18, 45));

// створити функцію яка приймає масив та виводить кожен його елемент

let print_arr = (array) => {
    for (const arrayElement of array) {
        console.log(arrayElement);
    }
}
print_arr([32, 77, 'ukraine', 'history']);

// -створити функцію яка створює параграф з текстом. Текст задати через аргумент

let write_Parag = (text) => {
    document.write(`<div>
                <p>${text}</p>
                </div>`);
}
write_Parag('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, sint.');

// створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

let createList = (str_param) => {
    document.write(`<div><ul>`);
    for (let i = 0; i < 3; i++) {
        document.write(`<li>${str_param}</li>`);
    }
    document.write(`</ul></div>`);
}
createList('Lorem ipsum dolor sit amet');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом,
// який є числовим (тут використовувати цикл)

let createList2 = (str_param,ul_lenght) => {
    document.write(`<div><ul>`);
    for (let i = 0; i < ul_lenght; i++) {
        document.write(`<li>${str_param}</li>`);
    }
    document.write(`</ul></div>`);
}

createList2('Lorem ipsum dolor sit amet',3);

// - створити функцію
// яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

let createList3 = (items) =>  {
    document.write(`<div><ul>`);
    for (let i = 0; i < items.length; i++) {
        document.write(`<li>${items[i]}</li>`);
    }
    document.write(`</ul></div>`);
}

createList3(['Ukraine',2023,true,'abrams']);

 // створити функцію яка приймає масив об'єктів з
// наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

let writeObj = (arrayObj) => {
    for (let i = 0; i < arrayObj.length; i++) {
       document.write(`<div>`);
        for (const objElementKey in arrayObj[i]) {
            document.write(` ${objElementKey}: ${arrayObj[i][objElementKey]} `);
        }
       document.write(`</div>`);

    }
}
let arr = [
    {
        id: 11,
        name: 'Alex',
        age: 35
    },
    {
        id: 22,
        name: 'Petr',
        age: 45
    },
    {
        id: 33,
        name: 'Nick',
        age: 55
    }
];
writeObj(arr);

 // створити функцію яка повертає найменьше число з масиву
  let getMinNumber = (array) => {
  let minElement = array[0];
    for (const element of array) {
        if (element < minElement) {
            minElement = element;
        }
    }
    return minElement;
}

document.write(`<h2> Min number is ${getMinNumber([11, 22, 4, 50, -1, 0])}</h2>`);
  

// створити функцію sum(arr)яка приймає масив чисел,
// сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

let sum = (array) => {
   sum = 0;
    for (const element of array) {
        sum = sum + element;
    }
    return sum;
}

document.write(`<h2> Sum numbers in array is ${sum([11, 22, 4, 50, -1, 526])}</h2>`);

// створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

let swap = (arr, index1, index2) => {
    let arrayLenght = arr.length - 1;
    if ((arrayLenght > index1) && (arrayLenght > index2)) {
        let value_Ind1 = arr[index1];
        let value_Ind2 = arr[index2];
        arr[index1] = value_Ind2;
        arr[index2] = value_Ind1;
    }
    return arr;
}
let arr1 = [11, 22, 4, 50, -1, 526];
document.write(`<h2> Array original ${(arr1)}</h2>`);
// document.write(`<h2> Modified array ${swap(arr1,2,4)}</h2>`);
//
// Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

let exchange = (sumUAH, currencyValues, exchangeCurrency) => {
    for (const element of currencyValues) {
     if (element.currency === exchangeCurrency) {
         return element.value * sumUAH;
     }
    }
}

let currencyValues  = [
    {currency: 'USD', value: 37.83},
    {currency: 'EUR', value: 41.14},
    {currency: 'PLN', value: 8.23}
];
let sumUAH = 100500;
let exchangeCurrency = 'PLN';
let res = exchange(sumUAH, currencyValues, exchangeCurrency);
document.write(`<h2> ${sumUAH} uah =  ${(res)} ${exchangeCurrency}</h2>`);
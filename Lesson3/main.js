
// 1. За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
document.write(`<h3><u> Task #1: За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині</u></h3>`);

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

for (let i = 0; i < array_CitiesOfUkraine.length; i++) {
    document.write(`<div class = "Cities"><p>${array_CitiesOfUkraine[i]}</p></div>`);
}
document.write(`<br><hr><br>`);


// За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
document.write(`<h3><u> Task #2: За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині</u></h3>`);

for (let i = 0; i < array_CitiesOfUkraine.length; i++) {
    document.write(`<div class = "Cities"><p> City: ${array_CitiesOfUkraine[i]}  -  arrayIndex: ${i}</p></div>`);
}
document.write(`<br><hr><br>`);


// За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
document.write(`<h3><u> Task #3: За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині</u></h3>`);

let a = 1;
while (a <= 20) {
    document.write(`<h1>Довільний текст</h1>`);
    a++;
}
document.write(`<br><hr><br>`);


// За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
document.write(`<h3><u> Task #4: За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині</u></h3>`);
let b = 1;
while (b <= 20) {
    document.write(`<h1>Довільний текст ${b}</h1>`);
    b++;
}
document.write(`<br><hr><br>`);


// Використовуючи данні з масиву, за допомоги document.write та циклу побудувати структуру по шаблону:
//ШАБЛОН:
//     <ul>
//         <li>ITEM OF ARRAY</li>
//         <!--
//             і тд інші об'єкти масиву
//              ...
//              ...
//              ...
//         -->
//     </ul>
// замість 'ITEM OF ARRAY' підставити елемент з масиву щоб получився цілий список з даними з масиву

document.write(`<h3><u> Task #4: Використовуючи данні з масиву, за допомоги document.write та циклу побудувати структуру по шаблону</u></h3>`);
let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
document.write(`<ul>`);
for (let i = 0; i < listOfItems.length; i++) {
    const listOfItem = listOfItems[i];
    document.write(`<li>${listOfItem}</li>`);
}
document.write(`</ul>`);
document.write(`<br><hr><br>`);

// Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону  Зробити адекватну стилізацію
// Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон
// ШАБЛОН
//  <div class="product-card">
//         <h3 class="product-title">TITLE. Price - PRICE</h3>
//         <img src="IMAGE" alt="" class="product-image">
// </div>
// Замість TITLE PRICE IMAGE - підставити відповідні поля з об'єкту
document.write(`<h3><u> Task #5: Використовуючи данні з масиву, за допомоги document.write та циклу побудувати структуру по шаблону
Зробити адекватну стилізацію. Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон</u></h3>`);

let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];
document.write(`<div class = "main">`)
for (let i = 0; i < products.length; i++) {
    const product = products[i];
    document.write(`<div class = "product-card">
        <h3 class="product-title"><upper>${product.title}</upper>  - ${product.price} uah</h3>
        <img class="product-image" src="${product.image}" alt="">

    </div>`);

}
document.write(`</div>`);
document.write(`<br><hr><br>`);
// є масив
// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
//  за допомоги циклу вивести:
//  - користувачів зі статусом true
//  - користувачів зі статусом false
//  - користувачів які старші за 30 років
document.write(`<h3><u> Task #6: З масиву за допомогою циклу вивести  користувачів зі статусом true, користувачів зі статусом false, користувачів які старші за 30 років
</u></h3>`);
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
// користувачів зі статусом true
document.write(`<h3>Користувачі зі статусом true</h3>`)
document.write(`<ul>`);
for (let i = 0; i < users.length; i++) {
    const user = users[i];
    if (user.status) {
        document.write(`<li>${user.name} </li>`);
    }
}
document.write(`</ul><br>`);

document.write(`<h3>Користувачі зі статусом false</h3>`)
document.write(`<ul>`);
for (let i = 0; i < users.length; i++) {
    const user = users[i];
    if (!user.status) {
        document.write(`<li>${user.name} </li>`);
    }
}
document.write(`</ul><br>`);

document.write(`<h3>Користувачі старші за 30 років</h3>`)
document.write(`<ul>`);
for (let i = 0; i < users.length; i++) {
    const user = users[i];
    if (user.age > 30) {
        document.write(`<li>${user.name} </li>`);
    }
}
document.write(`</ul>`);
document.write(`<br><hr><br>`);
document.write(`<h2 class = "Additional1"> Додаткові завдання</h2>`);
document.write(`<h3>--Task #1: Cтворити масив з:
- з 5 числових значень
- з 5 стічкових значень
- з 5 значень стрічкового, числового та булевого типу
- та вивести його </h3>`);
let array1 = [1,2,3,4,5];
let array2 = ['a','b','c','d','e'];
let array3 = [array1, array2,!!0,!!'',!!'asd',!!23];

for (let i = 0; i < array3.length; i++) {
    const array3Element = array3[i];
    document.write(`<p>${array3Element}</p>`);

}
document.write(`<br><hr><br>`);
document.write(`<h3>  Task #2: Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. 
Вивести в консоль</h3>`);
let arr4 = [];
arr4[0] = '1';
arr4[1] = 'qwe';
arr4[2] = 'asd';
for (let i = 0; i < arr4.length; i++) {
    const arr4Element = arr4[i];
    document.write(`<p>${arr4Element}</p>`);
}
document.write(`<br><hr><br>`);
document.write(`<h3> <pre> Task #3: є масив [2,17,13,6,22,31,45,66,100,-18] :
1. перебрати його циклом while
2. перебрати його циклом for
3. перебрати циклом while та вивести  числа тільки з непарним індексом
4. перебрати циклом for та вивести  числа тільки з непарним індексом
5. перебрати циклом while та вивести  числа тільки парні  значення
6. перебрати циклом for та вивести  числа тільки парні  значення
7. замінити кожне число кратне 3 на слово "okten"
8. вивести масив в зворотньому порядку.
9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)</pre></h3>`);
let arr5 = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18] ;
let k = 0 ;
while (k < arr5.length ){
     console.log(arr5[k]);
    k++;
}
for (const number of arr5) {
    console.log(number);
}
k = 0;
while (k < arr5.length) {
    if(k % 2 ) {
    console.log(arr5[k]);
    }
    k++;
}
for (let k = 0; k < arr5.length; k++) {
    const arr5Element = arr5[k];
    if (k % 2) {
        console.log(arr5Element);
    }

}
k = 0;
while (k < arr5.length) {
    if (k % 2 === 0) {
        console.log(arr5[k]);
    }
    k++;
}
for (let k = 0; k < arr5.length; k++) {
    const arr5Element = arr5[k];
    if (k % 2 === 0) {
        console.log(arr5Element);
    }

}
for (let i = 0; i < arr5.length; i++) {
    const arr5Element = arr5[i];
    if(arr5Element % 3 === 0 ) {
        arr5[i] = 'okten';
    }
}
console.log(arr5);

for (let i = arr5.length-1; i >= 0; i--) {
    const arr5Element = arr5[i];
    console.log(arr5Element);

}
document.write(`<br><hr><br>`);
document.write(`<h3><u> Task #3: Використовуючи данні з масиву, за допомоги document.write та циклу побудувати структуру по шаблону
Зробити адекватну стилізацію. Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон</u></h3>`);


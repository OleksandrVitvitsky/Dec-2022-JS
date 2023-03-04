// - створити блок,
// - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.
let divwrap = document.createElement('div');
divwrap.classList.add('main-box','dispFlex','col-gap10');
let divTask1 = document.createElement('div');
divTask1.classList.add('wrap','colapse','alfa','beta','centerText');
divTask1.innerText =' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, molestiae?';
divTask1.style.background = 'cornflowerblue';
// other styles added into type file CSS
let divCloneTask1 = divTask1.cloneNode(true);
divwrap.appendChild(divTask1);
divwrap.appendChild(divCloneTask1);
document.body.appendChild(divwrap);

// - Є масив:
// ['Main','Products','About us','Contacts']
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)

let menu = ['Main', 'Products', 'About us', 'Contacts'];
let divTask2 = document.createElement('div');
divTask2.classList.add('menu');
document.body.appendChild(divTask2);
let listTask2 = document.createElement('ul');
listTask2.classList.add('listTask2','dispFlex','col-gap10');
divTask2.appendChild(listTask2);
for (const menuElement of menu) {
    let liTask2 = document.createElement('li');
    liTask2.innerText = menuElement;
    listTask2.appendChild(liTask2);
}
//========================================

// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
let task3 = document.createElement('div');
document.body.appendChild(task3);
for (const coursesElement of coursesAndDurationArray) {
    let title = document.createElement('h3');
    title.innerHTML = `<u>${coursesElement.title}</u>`;
    task3.appendChild(title);
    let mounth = document.createElement('p');
    mounth.innerText = `${coursesElement.monthDuration}`;
    task3.appendChild(mounth);

}

// =========================
//
// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
//
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
// Завдання робити через цикли.

let divTask4 = document.createElement('div');
divTask4.classList.add('items','dispFlex','col-gap10');
document.body.appendChild(divTask4);

for (const coursesElement of coursesAndDurationArray) {
    let divElement = document.createElement('div');
    divElement.classList.add('item','brdr_black','centerText');
    divTask4.appendChild(divElement);
    let title = document.createElement('h1');
    title.classList.add('heading');
    title.innerHTML = `<u>Курс:  ${coursesElement.title}</u>`;
    divElement.appendChild(title);
    let mounth = document.createElement('p');
    mounth.classList.add('description');
    mounth.innerText = `термін навчання - ${coursesElement.monthDuration} місяців`;
    divElement.appendChild(mounth);

}

// ==========================
//
// - є масив simpsons, котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
// Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'> та наповнити його данними з об'єкту.
// Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту

let simpsons = [
    {
        name: 'Bart',
        surname: 'Simpson',
        age: 10,
        info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
        photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
    },
    {
        name: 'Homer',
        surname: 'Simpson',
        age: 40,
        info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
        photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
    },
    {
        name: 'Marge',
        surname: 'Simpson',
        age: 38,
        info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
    },
    {
        name: 'Lisa',
        surname: 'Simpson',
        age: 9,
        info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
    },
    {
        name: 'Maggie',
        surname: 'Simpson',
        age: 1,
        info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
    },
];
let divSimpsons = document.createElement('div');
divSimpsons.classList.add('simpsons','dispFlex');
document.body.appendChild(divSimpsons);
for (const item of simpsons) {
    let name = item.name;
    let surname = item.surname;
    let age = item.age;
    let info = item.info;
    let photo = item.photo;

    let divSimpson = document.createElement('div');
    divSimpson.classList.add('member','brdr_black','centerText');
    divSimpsons.appendChild(divSimpson);

    let img = document.createElement('img');
    img.src = `${photo}`;
    img.alt = `${name}`;
    divSimpson.appendChild(img);

    let nameHero = document.createElement('h2');
    nameHero.innerHTML = `<u>${name} ${surname} (${age} old)</u>`;
    divSimpson.appendChild(nameHero);

    let infoHero = document.createElement('p');
    infoHero.innerText = `${info}`;
    divSimpson.appendChild(infoHero);
}

// =========================
// Цикл в циклі
// - Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
//
// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей,
// для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png який лежить в папці з поточним фйлом
// ------------------

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

let mainDiv = document.createElement('div');
mainDiv.classList.add('main','dispFlex','col-gap10');
document.body.appendChild(mainDiv);

for (const item of coursesArray) {
    let item_box = document.createElement('div');
    item_box.classList.add('item-box');

    let title = document.createElement('h2');
    title.classList.add('brdr_black','centerText','marg10');
    title.innerText = `Курс: ${item.title}`;
    item_box.appendChild(title);


    let duration_box = document.createElement('div');
    duration_box.classList.add('dispFlex','col-gap10');
    let duration_mounth = document.createElement('div');
    duration_mounth.innerHTML = `<span>${item.monthDuration} місяців навчання</span>`;
    duration_mounth.classList.add('w30Persent', 'marg10','brdr_black');
    duration_box.appendChild(duration_mounth);

    let duration_hours = document.createElement('div');
    duration_hours.classList.add('w70Persent','marg10','brdr_black');
    duration_hours.innerHTML = `<span>${item.hourDuration} академічних годин</span>`;
    duration_box.appendChild(duration_hours);
    item_box.appendChild(duration_box);

    let modules_box = document.createElement('div');
    duration_box.classList.add('modules-box');
    let modules_title = document.createElement('h3');
    modules_title.innerText = 'Перелік модулів, які вивчите:';
    modules_title.classList.add('centerText');
    modules_box.appendChild(modules_title);

    let modules_list = document.createElement('ul');
    modules_list.classList.add('brdr_black','marg10');
    let modules = item.modules;
    for (const module of modules) {
        let li = document.createElement('li');
        li.classList.add('brdr_black','marg7');
        li.innerText = `${module}`
        modules_list.appendChild(li);
    }

    modules_box.appendChild(modules_list);
    item_box.appendChild(modules_box);
    mainDiv.appendChild(item_box);
}

// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так,
// щоб при натисканні на кнопку зникав елемент з id="text".

let box100  = document.createElement('div');
box100.classList.add('box100');

let textHidden = false;
let button1 = document.createElement('button');
let innerText = 'Приховати текст';
button1.id = 'button1';

// button1.onclick = HiddenText();
button1.textContent = `${innerText}`;
button1.onclick = () => {
    ourText = document.getElementById('text');
    if (!textHidden) {
        ourText.style.display = 'none';
        button1.textContent = 'Показати текст';
        textHidden = true;
    } else {
        ourText.style.display = 'block';
        button1.textContent = 'Приховати текст';
        textHidden = false;
    }

}
box100.appendChild(button1);

let h3_txt = document.createElement('h3');
h3_txt.innerText = 'Цей текст може зникнути!!!';
h3_txt.id = 'text';
box100.appendChild(h3_txt);
document.body.appendChild(box100);


// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні
// на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
//

let box200 = document.createElement('div');
box200.classList.add('form_task1');
let form = document.createElement('form');
let input1 = document.createElement('input');
input1.placeholder = 'enter your age';
input1.name = 'userAge';
input1.min = 0;
input1.type = 'number';
let input2 = document.createElement('input');
input2.type = 'submit';
form.onsubmit = function (event){
    event.preventDefault();
    if (form.userAge.value < 18){
        alert('Your age is under 18!!!');
    }
}
form.appendChild(input1);
form.appendChild(input2);
box200.appendChild(form);
document.body.appendChild(box200);
// *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додаткова частина для завдання)
// Footer
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
        table.setAttribute('id', 'table');
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
document.body.appendChild(boxTable);
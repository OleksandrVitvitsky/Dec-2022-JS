// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
function CreateUser(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone  = phone;
}

const Users = [];
Users.push(
    new CreateUser(10, 'Han', 'Solo', 'hanSolo@example.com', '28076-543-22-11'),
    new CreateUser(9, 'Obi-Wan', 'Kenobi', 'obiKenobi@example.com', '38098-772-12-33'),
    new CreateUser(3, 'Luke', 'Skywalker', 'SkywalkerL@example.com', '21086-535-27-78'),
    new CreateUser(2, 'Darth', 'Vader', 'dVader@example.com', '28336-143-02-91'),
    new CreateUser(5, 'Yoda', 'Jedi Master', 'Yoda@example.com', '38076-343-32-11'),
    new CreateUser(8, 'Princess', 'Leia', 'prLeia@example.com', '38046-643-42-91'),
    new CreateUser(7, 'R2', 'D2', 'D2@example.com', '38098-836-11-99'),
    new CreateUser(6, 'Chewbacca', 'Wookiee', 'Wookiee@example.com', '28376-576-22-90'),
    new CreateUser(4, 'Mace', 'Windu', 'Windu@example.com', '28070-001-12-00'),
    new CreateUser(1, 'Padmé', 'Amidala', 'hAmidala@example.com', '23376-423-32-12'));


// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
let filteredUsers = Users.filter(item => item.id % 2 === 0);
// console.log(Users);

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
filteredUsers.sort((a, b) => a.id - b.id);
console.log(filteredUsers);

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

const Clients = [];
Clients.push(
    new Client(1, 'Han', 'Solo', 'hanSolo@example.com', '28076-543-22-11', new Array('lemon', 'babanas', 'orange')),
    new Client(4, 'Obi-Wan', 'Kenobi', 'obiKenobi@example.com', '38098-772-12-33', new Array('lemon')),
    new Client(3, 'Luke', 'Skywalker', 'SkywalkerL@example.com', '21086-535-27-78', new Array('lemon', 'babanas', 'orange', 'lime')),
    new Client(2, 'Darth', 'Vader', 'dVader@example.com', '28336-143-02-91', new Array('lemon', 'babanas')),
    new Client(5, 'Yoda', 'Jedi Master', 'Yoda@example.com', '38076-343-32-11', new Array('lemon', 'babanas', 'orange', 'milk', 'potatos')),
    new Client(8, 'Princess', 'Leia', 'prLeia@example.com', '38046-643-42-91', new Array('lemon', 'babanas', 'orange', 'bread', 'milk', 'butter', 'juice')),
    new Client(7, 'R2', 'D2', 'D2@example.com', '38098-836-11-99', new Array('milk', 'chocolate', 'orange', 'rice', 'icecream', 'bread', 'fanta', 'biscuit')),
    new Client(6, 'Chewbacca', 'Wookiee', 'Wookiee@example.com', '28376-576-22-90', new Array('lemon', 'bouble', 'meat')),
    new Client(9, 'Mace', 'Windu', 'Windu@example.com', '28070-001-12-00', new Array('cake', 'babanas', 'watermelon', 'fish')),
    new Client(10, 'Padmé', 'Amidala', 'hAmidala@example.com', '23376-423-32-12', new Array('lemon', 'lime', 'parsley')))

Clients.sort((a, b) => a.order.length - b.order.length);
console.log(Clients);
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//     -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
function PrintAboutCar(obj){
    for (const key in obj) {
        if ((typeof obj[key] !== 'function')) {
            if (typeof obj[key] === 'object') {
                PrintAboutCar(obj[key]);
            } else {
                console.log(`${key}  - ${obj[key]}`);
            }
        }
    }
}
function Car (model, producer, year, max_speed, engine_capacity) {
    this.model = model;
    this.year = year;
    this.max_speed = max_speed;
    this.engine_capacity = engine_capacity;
    this.drive = function () {
        console.log(`Їдемо зі швидкістю ${this.max_speed} на годину!`);
    }
    this.info = function () {
        console.log('About this car:');
        PrintAboutCar(this);
    }
    this.increaseMaxSpeed = function (newSpeed) {
        this.max_speed = newSpeed;
    }
    this.changeYear = function (newValue) {
        this.year = newValue;
    }
}

Car.prototype.adddriver = function (driverName,driverAge,driverGender){
    this.driver = {name: driverName, age: driverAge, gender: driverGender};
}
let xBMW = new Car('BMW x7','BMW AG',2023,280, 2998);

xBMW.drive();
xBMW.increaseMaxSpeed(69);
xBMW.drive();
xBMW.changeYear(2022);
xBMW.adddriver('Petro',90,'male');
xBMW.info();


// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class _Car {
    constructor(model, producer, year, max_speed, engine_capacity) {
        this.model = model;
        this.year = year;
        this.max_speed = max_speed;
        this.engine_capacity = engine_capacity;
        this.drive = function () {
            console.log(`Їдемо зі швидкістю ${this.max_speed} на годину!`);
        }
    }
    info() {
        console.log('About this car:');
        PrintAboutCar(this);
    }
    increaseMaxSpeed(newSpeed) {
        this.max_speed = newSpeed;
    }
    changeYear(newValue) {
        this.year = newValue;
    }
}

_Car.prototype.adddriver = function (driverName, driverAge, driverGender) {
    this.driver = {name: driverName, age: driverAge, gender: driverGender};
}
console.log('============================');
let xAudi = new _Car('Audi e-Tron', 'Audi AG', 2023, 320, '300 кВт');

xAudi.drive();
xAudi.increaseMaxSpeed(180);
xAudi.drive();
xAudi.changeYear(2021);
xAudi.adddriver('Ivan', 15, 'male');
xAudi.info();
console.log('============================');

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

class Cinderella{
    constructor(name, age, foot_size) {
        this.name = name;
        this.age = age;
        this.foot_size = foot_size;
    }
}

let arrayLotOfCinderella = new Array();
arrayLotOfCinderella.push(
    new Cinderella('Olga', 31, 35),
    new Cinderella('Alisa', 47, 41),
    new Cinderella('Tanya', 23, 38),
    new Cinderella('Sonya',18, 37),
    new Cinderella('Viktorika', 35, 40),
    new Cinderella('Svitlana', 36, 41),
    new Cinderella('Katya', 26,35),
    new Cinderella('Olena',50 , 40),
    new Cinderella('Alina',33,33),
    new Cinderella('Anna',32,38))

class PrinceCreator{
    constructor(name, age, sizeOfShoe) {
        this.name = name;
        this.age = age;
        this.sizeOfShoe = sizeOfShoe;
    }
}

let prince = new PrinceCreator('Jango',22, 40);

for (const element of arrayLotOfCinderella) {
    if (element.foot_size === prince.sizeOfShoe){
        console.log(`Our cinderella is  ${element.name}`);
    }
}
let ourCinderella = arrayLotOfCinderella.find(obj => obj.foot_size === prince.sizeOfShoe );
console.log(`finded ${ourCinderella.name}`)
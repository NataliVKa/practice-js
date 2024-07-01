Змінні та типи даних
 *
 * - Оголошення змінних з let и const
 * - Перевизначення значення
 * - Найменування змінних
 * - Вибір між const і let
 * - Числа, рядки, булі, null, undefined
 * - Оператор typeof
 */

// console.log("hello world!");

// let apples = 10;

// console.log(apples);

// apples = 15;

// console.log(apples);

// const userAge = 15;
// // userAge = 16; //! так робити не можна!

// // UserAge, user-age, user_age, USER_AGE - так не треба!

// console.log(userAge);

//* Примітивні типи даних
// - Number: числа (0, -10, 1457, 2.5)
// - String: строки або рядки (все, що записано всередині літералів рядків, тобто, в будь-яких видах лапків(', ", `)) - "Hello world", "100"
// - Boolean(bool): логічний тип, який вміє зберігати всього два значення: правда і неправда, тобто true або false
// - undefined - відсутність присутності (невизначений, Петі немає в школі)
// - null -  присутність відсутності(нульовий, Петя не існує)

const age = 25;
const name = "Oleg";
const isUserPlayGames = false;

// typeof - повертає тип даних певного значення або змінної

console.log(typeof age);
console.log(typeof name);
console.log(typeof isUserPlayGames);

console.log(typeof null); // object


// /**
//  * Типові помилки
//  *
//  * - Звернення до змінної до її оголошення
//  * - Перевизначення значення для змінної оголошеної через const
//  * - Обращение по неправильному імени змінної
//  * - Звернення по неправильному імені змінної
//  *
//  */

const username = "Mango";

// console.log(userName); // ! ReferenceError: userName is not defined - звернення до неіснуючого ідентифікатора

// console.log(age); //! ReferenceError: Cannot access 'age' before initialization - не можна звертатись до ідентифікаторів до моменту їх оголошення чи створення
let age = 20;

const price = 200;

// price = 300; // ! TypeError: Assignment to constant variable. - не можна перевизначати константні значення (на те вони і константні)


// /**
//  * Арифметичні операції
//  * - Оператори +, -, *, /, %, **
//  * - Комбіновані оператори
//  */

const a = 10;
const b = 5;
// const a = 10;
// const b = 5;

// console.log(a + b); // 15
// console.log(a - b); // 5
// console.log(a * b); // 50
// console.log(a / b); // 2
// console.log(a % b); // 0
// console.log(5 ** 3); // 125

// console.log(Math.sqrt(16)); // взяття квадратного кореня

// console.log(27 % 5); // 2
// 1. 25 - найближче, яке ділиться націло на 5 і менше за 27
// 2. 27 - 25 = 2 - остача від ділення

/**
 * Виведи на екран загальну кількість яблук та винограду. Різницю яблук та винограду.
 */

const apples = 47;
const grapes = 135;
// const apples = 47;
// const grapes = 135;

// const total = apples + grapes;

// const diff = grapes - apples;

// console.log("Total:", total);
// console.log("Diff:", diff);

/**
 * Заміни вираз перевизначення комбінованим оператором
 */

let students = 100;
students = students + 50;
console.log(students);
// let students = 100;
// // students = students + 50;

// students += 50; // -=, *=, /= 

// console.log(students);

/**
 * Розбери пріоритет операторів в інструкції привласнення значення змінної result
 */

const result = 108 + 223 - 2 * 5;
console.log(result);
// const result = 108 + 223 - 2 * 5; // пріорітет операцій як в арифметиці (*+-)
// console.log(result);

// /**
//  * Рядки
//  *
//  * - Конкатенація рядків
//  * - Шаблонні рядки
//  * - Довжина рядка
//  * - Індексація елементів
//  * - Незмінність рядків
//  */

const firstName = "Chelsy";
const lastName = "Emerald";
// const firstName = "Chelsy";
// const lastName = "Emerald";
// // const fullName = firstName + " " + lastName; //* + в даному прикладі виступає оператором конкатенації рядків
// const fullName = `${firstName} ${lastName}`;
// console.log(fullName);

const quantity = 15;
const orderMsg = "You ordered ??? bots";
// console.log("Quote: \"lorem isum dolor\""); // екранування

// const quantity = 15;
// const orderMsg = `You ordered ${quantity} bots`;
// console.log(orderMsg);

const message = "This string is 28 chars long";
// const message = "This string is 28 chars long";
// console.log(message.length); // властивість для отримання довжини рядка (тобто кількості символів)

// console.log(message[0]); // звертаюсь до першої букви рядка за індексом (індекси починаються з цифри 0)
// console.log(message[message.length - 1]); // отримуємо останню букву речення (довжина - 1)

// message[0] = "A" // змінити рядок неможливо, він є незмінним, його можна тільки читати
//! TypeError: Cannot assign to read only property '0' of string

// console.log(message);

/**
 * Склади фразу за допомогою шаблонних рядків
 * A has B bots in stock, де A, B - змінні вставлені в рядок.
 */
const companyName = "Cyberdyne Systems";
const repairBots = 150;
const defenceBots = 50;
// const msg = ;
// console.log(msg); // "Cyberdyne Systems has 200 bots in stock"
const msg = `${companyName} has ${repairBots + defenceBots} bots in stock`;
console.log(msg); // "Cyberdyne Systems has 200 bots in stock"


// /**
//  * Перетворення типів: рядки
//  *
//  * - Явне перетворення типів
//  * - Неявне перетворення типів
//  */

console.log(String(5)); // "5"
console.log(String(true)); // "true"
console.log(String(false)); // "false"
console.log(String(null)); // "null"
console.log(String(undefined)); // "undefined"
//* явне перетворення типів це використання спеціальних функцій, які перетворять один тип на інший, наприклад: String(), Number(), Boolean()

// console.log(String(5)); // "5"
// console.log(String(true)); // "true"
// console.log(String(false)); // "false"
// console.log(String(null)); // "null"
// console.log(String(undefined)); // "undefined"


//* неявне перетворення типів - це ситуації коли тип даних якогось значення в джс перетворюється на інший тип під капотом (ви це не контролюєте)

// неявне перетворення типів - не завжди класна штука. Чому? Відповідь проста - ви його не контролюєте

console.log("5" + 3); // "53"
// 1. string + number - я не вмію робити таку операцію з різними типами даних, тому я зроблю неявне перетворення і зведу всі значення до єдиного типу
// 2. "5" + String(3) 
// 3. "5" + "3" = "53"

console.log("5" + true); // "5true"
console.log("5" + false); // "5false"
console.log("5" + null); // "5null"
console.log("5" + undefined); // "5undefined"
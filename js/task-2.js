/**
 * Перетворення типів: числа
 *
 * - Явне перетворення типів
 * - Неявне перетворення типів
 */
console.log(Number("5")); // 5
console.log(Number(true)); // 1
console.log(Number(false)); // 0
console.log(Number(null)); // 0
console.log(Number(undefined)); // NaN
console.log(Number("Jacob")); // NaN
console.log(Number("25px")); // NaN
//* NaN - not a number - ви отримуєте його тоді, коли якесь значення неможливо перетворити в числовий тип

console.log(typeof NaN); // number

console.log("5" * 2); // 10
// Number("5") * 2 = 5 * 2 = 10
console.log("10" - 5); // 5
// Number("10") - 5 = 10 - 5 = 5
console.log(5 + true); // 6
// 5 + Number(true) -> 5 + 1 = 6
console.log(5 - true); // 4

console.log("5" * "2"); // 10
console.log("5" + 2); // "52"

console.log(5 * "a"); // NaN
// 5 * Number("a") -> 5 * NaN = NaN

/**
 * Оператори
 *
 * - Оператори порівняння
 * - Оператори рівності
 * - Приведение типов операндов
 * - Приведение типів операндів
 */

console.log(5 > 4);
// console.log(5 > 4); // true

console.log(10 >= "7");
// console.log(10 >= "7"); // true
// 10 >= Number("7") -> 10 >= 7 -> true

console.log("2" > "12");
// console.log("2" > "12"); // true
/*
при порівнянні строки і числа все приведеться до числа, але коли ви порівнюєте строки, то вони порівнюються посимвольно за лексикографічним словником (unicode)
*/

console.log("2" < "12");
// 50 > 49 -> true
// console.log("2".charCodeAt(0));
// console.log("1".charCodeAt(0));

console.log("4" == 4);
// console.log("2" < "12"); // false
// 50 < 49

console.log("6" === 6);
/*
 1. = - оператор присвоєння
 2. == - оператор рівності зі зведенням типів (не сувора)
 3. === - оператор рівності без зведення типів (сувора)
console.log("false" === false);
*/

console.log(1 == true);
// console.log("4" == 4); // true
// string == number
// Number("4") == 4 -> 4 == 4 -> true

console.log(1 === true);
// console.log("6" === 6); // false
/*
порівняння без зведення типів (суворе порівняння)
суворе порівняння спочатку порінює типи даних значень, а тільки потім самі значення, якщо ж типи даних будуть різні, результатом порівняння будет false, навіть якщо самі значення будуть рівні.
console.log("0" == false);
"6" === 6 | string === number -> false
*/

console.log("0" === false);
// console.log("false" === false);  // false

console.log("Papaya" < "papaya");
// console.log(1 == true); // true

console.log("Papaya" === "papaya");
// console.log(1 === true); // false

console.log(undefined == null);
// console.log("0" == false); // true
// Number("0") == Number(false) -> 0 == 0 true

console.log(undefined === null);
// console.log("0" === false); // false

// console.log("Papaya" < "papaya"); // true

// console.log("P".charCodeAt(0));
// console.log("p".charCodeAt(0));

// console.log("Papaya" === "papaya"); // false

console.log(undefined == null); // true
//! undefined і null це унікальні значення які ні в що не перетворюються і завжди дорівнють тільки одне одному (при порівняннях ==)

console.log(undefined === null); // false

/**
 * Арифметичні функції
 *
 * - Number.parseInt
 * - Number.parseFloat
 * - Math
 */

let elementWidth = "50px";
console.log("elementWidth: ", elementWidth);
elementWidth = Number.parseInt(elementWidth);
console.log("elementWidth:", elementWidth);

let elementHeight = "200.74px";
elementHeight = Number.parseFloat(elementHeight);
console.log("elementHeight: ", elementHeight);

/**
@@ -19,3 +21,14 @@ console.log("elementHeight: ", elementHeight);
 */

const value = 27.5;

console.log(Math.floor(value)); // округлює дробові частини вниз
console.log(Math.ceil(value)); // окгруглює дробові частини вгору
console.log(Math.round(value)); // якщо дробова частина менша ніж 0.5 то округлює вниз, інакше, округлює вгору

console.log(Math.max(5, 10, 6, -4, 9.35, 100, 75));
console.log(Math.min(5, 10, 6, -4, 9.35, 100, 75));
console.log(Math.sqrt(16));
console.log(Math.pow(5, 6)); // 5^6 -> 5 ** 6

console.log(Math.pow(-4, 2));


/**
 * Функции
 * Функції
 *
 * - Оголошення та виклик функції
 * - Параметри та аргументи
 * - Повернення значення
 */

// console.log("Before fnA execution");
// fnA();
// console.log("After fnA execution");
// DRY - do not repeat yourself

// console.log("Before fnB execution");
// fnB();
// console.log("After fnB execution");
//* function declaration - оголошення фукнції
//* () - список параметрів
//* {} - тіло функції

// console.log("Before fnC execution");
// fnC();
// console.log("After fnC execution");
// function displayMsg() {
//   console.log("Hello World!");
// }

// // виклик фукнції
// displayMsg(); // () - список аргументів
// console.log("aaa");
// displayMsg();
// displayMsg();
// displayMsg();

//! ==========================================

// (username) - це параметр, це звичайна змінна, яка доступна тільки всередині функції, її значення завжди буде приходити під час виклику фукнції зі списку аргументів

// function greeting(username) {
//   // let username;
//   console.log(`Hello, ${username}!`);
// }

// //("Dima") - це аргумент, це значення для параметру функції
// greeting("Dima");
// greeting("Alice");
// greeting("John");

//! ==========================================

//* console.log(sum(8, 99)); // це особливість function declaration, вони доступні в будь-якому місці програми, в не залежності від того, де функція була оголошена, ця технологія називається hoisting

//* кожна функція в джс повинна щось повертати, за замовчуванням усі фукнції повертають значення undefined
function sum(a, b) {
  //   const result = a + b;

  //   return result;
  return a + b;

  // 1. функція далі не виконується
  // 2. функція повертає результат на місце виклику
}
//* повернення - це результат роботи фукнції, який можна використовувати у зовнішньому коді після розрахунків

// console.log(sum(8, 99));

// console.log(sum(5, 70)); // 75
// console.log(sum(4, 9)); // 13

// console.log(sum(5, 9) - 3); // 14 - 3
// undefined - 3 -> NaN

//! ==========================================

//Global Scope: foo

//     function foo(a){
//         //Local scope: a
//         console.log(a); // виклик всередині
//     }

// foo(5)
// console.log(a); // виклик з глобальної області

// function convertToInt(string) {
//   const number = Number.parseFloat(string);
//   const result = Math.round(number);

//   return result; // для отримання значення(результату розрахунків всередині функції) у зовнішній код на місце її виклику
// }

// console.log(convertToInt("25.7px")); // 26
// console.log(convertToInt("100.5px")); // 101
// console.log(convertToInt("3.01px")); // 3

// const newFigHeight = convertToInt("25.7px") + 5;

// console.log(newFigHeight);

//! ==========================================

/**
 * Напиши функцію calcBMI(weight, height) яка розраховує та повертає індекс
 * маси тіла людини. Для цього необхідно розділити вагу на
 * квадрат висоти.
 *
 * Вага та висота будуть спеціально передані як рядки. Не цілі числа можуть
 * бути задані у вигляді 24.7 або 24,7, тобто як роздільник дробової
 * частини може бути кома.
 *
 * Індекс маси тіла необхідно округлити до однієї цифри після коми.
 */

// const bmi = calcBMI("88,3", "1.75");
// console.log(bmi); // 28.8
function calcBMI(weight, height) {
  /*
 1. замінити кому на крапку (для цього є метод .replace())
 2. зробити усі значення числами
 3. зробити обчислення
 4. округлити до одного знаку після кому (toFixed) та повернути результат
*/

  // перший крок алгоритму
  weight = weight.replace(",", ".");
  height = height.replace(",", ".");

  // другий крок алгоритму
  weight = Number(weight);
  height = Number(height);

  // третій крок алгоритму

  const result = weight / (height * height);

  //четвертий крок алгоритму
  return Number(result.toFixed(1));
  // toFixed(amount) - округлює значення amount знаків після коми, результатом виклику цього методу є строка
}

const bmi = calcBMI("88,3", "1.75");
console.log(bmi); // 28.8

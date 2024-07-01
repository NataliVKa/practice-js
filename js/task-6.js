/**
 * Псевдомасив arguments и Array.from
 */

function foo() {
  console.log(arguments);
//* псевдомасив - це звичайний масив (тобто, структура даних де значення розділюються комами та кожне значення має свій індекс), але в ньому немає методів для роботи з масивом (push, pop і тд)

//* arguments - це локальна змінна, яка доступна всередині функцій. В ній зберігається псевдомасив усіх аргумантів які ви передали під час виклику цієї функції

//* Array.from() - це метод який приймає будь-яку ітерабельну сутність та перетворює її на звичайний масив (повертаючи новий масив). Він нам знадобиться щоб перетворити псевдомасив arguments на звичайний масив (тільки в разі того, якщо нам потрібно використовувати методи масивів, просто так робити це не потрібно).

function fn() {
  console.log(arguments); // якщо ми не знаємо точну кількість аргументів, яка прийде у функцію, нам допоможе ця локальна змінна, яка збере усі аргументи у псевдомасив

  const args = Array.from(arguments);
  console.log(args);
}

fn(1, 2, 3);
fn(1, 2, 3, 4, 5);
fn(1, 2, 3, 4, 5, 6, 7);
// fn(1, 2, 3);
// fn(1, 2, 3, 4, 5);
// fn(1, 2, 3, 4, 5, 6, 7);

/**
 * Напиши функцію add для складання довільної
 * кількості аргументів (чисел)
 */

const add = function (arguments) {
  const args = Array.from(arguments);
  let total = 0;

  for (const arg of args) {
    total += arg;
  }
// function add() {
//   let sum = 0;
//   for (let i = 0; i < arguments.length; i += 1) {
//     sum += arguments[i];
//   }

  return total;
};
//   return sum;
// }

console.log(add(1, 2, 3));
console.log(add(1, 2, 4, 5, 6));
// console.log(add(1, 2, 3));
// console.log(add(1, 2, 4, 5, 6));
// console.log(add(59, 73, -5, 8));

/**
 * Напиши функцію calAverage() яка приймає довільну кількість
 * аргументів і повертає їхнє середнє значення. Усі аргументи
 * будуть лише числами.
 */
function calAverage() {}

console.log(calAverage(1, 2, 3, 4)); // 2.5
console.log(calAverage(14, 8, 2)); // 8
console.log(calAverage(27, 43, 2, 8, 36)); // 23.2
// function calAverage() {
//   let sum = 0;
//   for (let i = 0; i < arguments.length; i += 1) {
//     sum += arguments[i];
//   }

//   return sum / arguments.length;
// }

// console.log(calAverage(1, 2, 3, 4)); // 2.5
// console.log(calAverage(14, 8, 2)); // 8
// console.log(calAverage(27, 43, 2, 8, 36)); // 23.2

    
    

    /**
 * - Глобальна область видимості
 * - Блочна область видимості
 * - Пошук за ланцюжком областей видимості
 */

const globalValue = 10;

console.log(globalValue); // 10
console.log(globalValue);

function foo() {
  const a = 20;
  console.log(a); // 20
  console.log(globalValue); // 10
  console.log(a);
  console.log(globalValue);

  for (let i = 0; i < 5; i += 1) {
    console.log(a); // 20
    console.log(globalValue); // 10
    console.log(a);
    console.log(globalValue);

    if (i === 2) {
      console.log(a); // 20
      console.log(globalValue); // 10
      console.log(a);
      console.log(globalValue);
    }
  }
}

// ❌ Помилка! Змінна a не доступна в цій області видимості
console.log(a);

for (let i = 0; i < 3; i += 1) {
  // ❌ Помилка! Змінна a не доступна в цій області видимості
  console.log(a);
    }
    

    /**
 * - Стек викликів
 * - Порядок виконання
 */

function fnA() {
  console.log("fnA execution");
}
// * Стек - це структура даних, яка працює по принципу перший увійшов - останнім вийшов (FILO). Можна уявляти стек як дитячу пірамідку з кільцями - до останнього кільця можна дістатись, тільки якщо забрати всі кільця над ним.

function fnB() {
  console.log("fnB execution");
function a() {
  b();
  console.log("a");
}

function fnC() {
  console.log("fnC execution");
function b() {
  c();
  console.log("b");
}

console.log("Before fnA execution");
fnA();
console.log("After fnA execution");

console.log("Before fnB execution");
fnB();
console.log("After fnB execution");
function c() {
  console.log("c");
}

console.log("Before fnC execution");
fnC();
console.log("After fnC execution");
            a();

    
    
    
    /**
 * Напиши функцію logItems(items), яка отримує масив та використовує цикл,
 * який для кожного елемента масиву буде виводити в консоль повідомлення у
 * форматі <номер елемента> - <значення елемента>. Нумерація елементів
 * повинна починатися з 1.
 *
 * Наприклад для першого елемента масиву ['Mango', 'Poly', 'Ajax'] з
 * індексом 0 буде виведено 1 - Mango, а для індексу 2 виведе 3 - Ajax.
 */

function logItems(items) {}
function logItems() {
  for (let i = 0; i < arguments.length; i += 1) {
    console.log(`${i + 1} - ${arguments[i]}`);
  }
}

logItems(["Mango", "Poly", "Ajax"]);
logItems(["🍎", "🍇", "🍑", "🍌", "🍋"]);
// logItems("Mango", "Poly", "Ajax");
// logItems("🍎", "🍇", "🍑", "🍌", "🍋");

/**
 * Напиши функцію printInfo(names, phones) яка виводить
 * у консоль ім'я та телефонний номер користувача. У параметри
 * names та phones будуть передані рядки імен та телефонних номерів,
 * розділені комами. Порядковий номер імен та телефонів у рядках
 * вказують на відповідність. Кількість імен та телефонів
 * гарантовано однакова.
 */

function printInfo(names, phones) {}
function displayPhoneBook(names, phones) {
  /*
    1. перетворюємо імена та телефони на два масиви за допомогою split(",")
    2. використовуючи цикл for ми переберемо будь-який масив
    3. за допомогою шаблонного рядка сформуємо повідомлення і зробимо вивід в консоль
    */

printInfo(
  "Jacob,William,Solomon,Artemis",
  "89001234567,89001112233,890055566377,890055566300"
);
  const namesArr = names.split(",");
  const phonesArr = phones.split(",");

  // оскікльки масиви однакової довжини (4), ми робимо 4 ітерації циклу. В тілі циклу ми звертаємось і до масиву імен і до масиву номерів по однакомому індексу (від 0 до 3)

  for (let i = 0; i < namesArr.length; i += 1) {
    console.log(`${namesArr[i]}: ${phonesArr[i]}`);
  }
}

// displayPhoneBook(
//   "Jacob,William,Solomon,Artemis",
//   "89001234567,89001112233,890055566377,890055566300"
// );

/**
 * Напиши функцію formatTime(minutes) яка переведе значення
 * minutes (кількість хвилин) у рядок у форматі годин
 * та хвилин HH:MM.
 */

function formatTime(minutes) {}
function formatTime(totalMinutes) {
/*
 1. витягуємо години з хвилин, для цього minutes/60. Оскільки це не ціле число, округлюємо його вниз за допомогою методу Math.floor()
 2. витягнути хвилини з остачі, за допомогою остачі від ділення, беремо minutes % 60
 3. За допомогою методу .padStart(2, 0) заповнюємо початок рядка нулями поки довжина не стане 2
 4. За допомогою шаблонного рядка привести значення до вигляду HH:MM
*/
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  const doubleDigitHours = String(hours).padStart(2, 0);
  const doubleDigitMinutes = String(minutes).padStart(2, 0);

  return `${doubleDigitHours}:${doubleDigitMinutes}`;
}

console.log(formatTime(70)); // "01:10"
console.log(formatTime(450)); // "07:30"
console.log(formatTime(1441)); // "24:01"
console.log(formatTime(5379)); // "89:39"
console.log(formatTime(15379)); // "256:19"

//* .padStart(maxLength, char) - метод, який викликається на рядочку та приймає максимальну довжину рядка і символ для заповнення. Цей метод заповнює початок рядку символами char до тих пір, поки довжина рядку не стане maxLength

//* .padEnd(maxLength, char) - метод, який викликається на рядочку та приймає максимальну довжину рядка і символ для заповнення. Цей метод заповнює кінець рядку символами char до тих пір, поки довжина рядку не стане maxLength

    
    

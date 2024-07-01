/**
 * Масиви
 *
 * - Створення масиву
 * - Доступ до елементів
 * - Перевизначення значення елемента
 * - Довжина масиву
 * - Індекс останнього елемента
 * - Перевизначення
 */

//* структура даних - певний контейнер для зберігання якихось даних з певними правилами та методами для роботи  з цими даними і доступу до них

//* масив - це структура даних (зазвичай повинен зберігати дані одного типу) яка зберігає набір певних значень. Основним правилом зберігання є те, що у кожної одиниці цих даних повинен бути власний індекс (індексація починається з 0). Також масив надає певні методи для роботи з цими даними. Для доступу до конкретної комірки даних потрібно користуватися порядковим номером (індексом)

//* [] - створення нового масиву, тобто, виділяється нова комірка памʼяті, куди записується посилання на цей масив

const courses = ["HTML", "CSS", "JavaScript", "React", "PostgreSQL"];
console.table(courses);
console.log([0]);
console.log([1]);
console.log([2]);
console.log([3]);
console.log(courses);

// щоб отримати доступ до певної комірки в масиві - ми будемо звертатись до неї за допомогою arrayName[index]
console.log("0:", courses[0]);
console.log("1:", courses[1]);
console.log("2:", courses[2]);
console.log("3:", courses[3]);
console.log("4:", courses[4]);
console.log("5:", courses[5]);

courses[1] = "Jacob";
courses[3] = "Adrian";
console.table(courses);

// довжина масиву
console.log(courses.length);

const lastIndex = courses.length - 1;
// якщо вам потрібен індекс останнього елементу масиву, то ви можете знайти його за формулою довжина - 1 (тому що індекси починаються з 0)
const lastIndex = courses.length - 1; // 5 - 1
console.log(lastIndex);

/**
 * Передача за посиланням і за значенням
 *
 * Примітиви і складні типи
 * Посилальна рівність (referential equality)
 */

// масиви - це складні дані (структури даних), на відміну від примітивів вони зберігаються не за значенням, а за посиланням на комірку памʼяті

// let c = 5;
// let d = c
// c = 10
// console.log(c); // 10
// console.log(d); // 5

const a = [1, 2, 3];
const b = a;
// const b = a; //! копія масиву так не робиться!! це не копія, ви зберегли в конст б посилання на тей самий масив, який зберігається в а, а треба було створити новий, у якому просто будуть ті ж самі дані
const b = a.slice(0);
// .slice(0) - поверне новий масив, у якому буде копія масиву a починаючи з індексу 0, тобто повна копія масиву a

console.log("a", a);
console.log("b", b);

a[0] = 500;
b[2] = 300;

console.log("a", a);
console.log("b", b);

console.log(a === b);
// ми можемо зробити висновок що конс а і конст b це посилання на один і той самий масив. Чому? Тому що міняючи перший - другий змінюється теж

console.log(a === b); // true - тому що це дійсно один і той самий масив

console.log([] === []);
console.log([1, 2, 3] === [1, 2, 3]);
// console.log([] === []); // false
// console.log([1, 2, 3] === [1, 2, 3]); //  false

/**
 * Методи масиву
 *
 * - join
 * - split
 * - slice
 * - concat
 * - indexOf
 * - push/pop
 */

const courses = ["HTML", "CSS", "JavaScript", "React", "PostgreSQL"];

//* .join(separator) - викликається на масиві та приймає один параметр (знак розділювача). Цей метод повертає рядок у якому всі елементи масиву будуть розділені нашим параметром separator. з масиву в рядок
const coursesStr = courses.join(" | ");

// console.log(`На курсі ми вивчаємо такі технології: ${coursesStr}`);

//* .split(splitter) - викликається на рядку та приймає один параметр (знак розділювача). Повертає новий масив де кожен елемент було вибрано з рядка з урахуванням розділювача splitter. з рядка в масив

const fruits = "banana, apple, melon, lemon";

const fruitsArr = fruits.split(", ");

console.log(fruitsArr);

//* .slice(start, end) - повертає новий масив з копією елементів від start до end не включно масиву на якому він викликається. [start, end)

const someFruitsCopy = fruitsArr.slice(1, 3); // [1, 3) - тобто ми робимо копію починаючи з індексу 1 і закінчуючи на індексі 2 (тому що 3 не включається в діапазон) від 1 до 3 не включно
console.log(someFruitsCopy);

// console.log(fruitsArr.slice(1));

//* .concat(...arrs) - повертає новий масив у якому зілʼє всі масиви, які ви передаєте в якості аргументів в один

const moreFruits = fruitsArr.concat(
  ["watermelon", "strawberry"],
  ["kiwi", "papaya"],
  ["orange"],
  ["mango"]
);

console.log(moreFruits);

//* indexOf(value) - повертає індекс першого входження яке буде рівним значенню value, якщо такого елементу не знайшлось - повертається -1

console.log("Індекс полуниці:", moreFruits.indexOf("strawberry"));
console.log("Індекс сливи:", moreFruits.indexOf("plum"));

//* .push(value) - додає значення value у кінець масиву

moreFruits.push("plum", "cherry");
console.log(moreFruits);

//* .pop() - видаляє ОДНЕ значення з кінця масиву

moreFruits.pop();
console.log(moreFruits);

//* .includes(value) - повертає true якщо значення value зустрічається у масиві і повертає false, якщо значення value у масиві немає

console.log("Чи є такий фрукт як огірок?", moreFruits.includes("cucumber"));
console.log("Чи є такий фрукт як яблуко?", moreFruits.includes("apple"));

/**
 * Ітерація по масиву
 *
 * - Ітерація по масиву циклом for
 * - Метод includes
 * - Цикл for...of
 * - Різниця у використанні for и for...of
 */

const friends = ["Mango", "Kiwi", "Poly", "Ajax"];
console.table(friends);

for (let i = 0; i < friends.length; i += 1) {
  friends[i] += `-${i}`;
}
// console.table(friends);

console.table(friends);
// for (let i = 0; i < friends.length; i += 1) {
//   friends[i] += `-${i}`;
//   console.log(i, friends[i]);
// }

for (let friend of friends) {
  console.log(friend);
  console.log(friends);
}
// console.table(friends);

// використовуємо тоді, коли нам не потрібно працювати з індексами у циклі, перебираємо відразу дані. Сам цикл фор оф створений для того щоб перебрати значення набору даних
// for (const friend of friends) {
//   console.log(friend);
// }

/**
 * Напиши скрипт для обчислення площі прямокутника зі сторонами,
 * значення яких зберігаються у змінній values у вигляді рядка.
 * Значення гарантовано розділені пробілом.
 */

const values = "8 11";

function calculateRecSquare(values) {
  /*
  1. витягнути з рядка окремо ширину і окремо висоту, це можна зробити за допомогою методу split(" ")
  2. оскільки це рядок, а нам треба робити математичні обчилення - перетворюємо значення на числа Number()
  3. обчислити площу (повернути результат обчислень)
  */

  const sides = values.split(" ");
  const width = Number(sides[0]);
  const height = Number(sides[1]);

  return width * height;
}

// console.log(calculateRecSquare(values));

/**
 * Напиши скрипт для перебору масиву fruits.
 * Для кожного елемента масиву виведи в консоль рядок
 * у форматі номер_елемента: значення_елемента.
 * Нумерація елементів повинна починатися з 1.
 */

const fruits = ["🍎", "🍇", "🍑", "🍌", "🍋"];
/*
1: 🍎
2: 🍇
3: 🍑
4: 🍌
5: 🍋
*/

// for (let i = 0; i < fruits.length; i += 1) {
//   console.log(`${i + 1}: ${fruits[i]}`);
// }

/**
 * Напиши скрипт, який підраховує суму всіх парних чисел у масиві.
 */

const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];
let total = 0;
// const numbers = [1, 5, 2, 8, 9, 12, 4, 15, 27, 30, 18, 14];
// let total = 0;

// for (const number of numbers) {
//   if (number % 2 === 0) {
//     total += number;
//   }
// }

// console.log(total);

/**
 * Напиши скрипт, який виводить у консоль ім'я та телефонний номер користувача.
 * У змінних names та phones зберігаються рядки імен та телефонних номерів,
 * розділені комами. Порядковий номер імен та телефонів у рядках вказують на
 * відповідність. Кількість імен та телефонів гарантовано однакова.
 */
const names = "Jacob,William,Solomon,Artemis";
const phones = "89001234567,89001112233,890055566377,890055566300";

function displayPhoneBook(names, phones) {
  /*
    1. перетворюємо імена та телефони на два масиви за допомогою split(",")
    2. використовуючи цикл for ми переберемо будь-який масив
    3. за допомогою шаблонного рядка сформуємо повідомлення і зробимо вивід в консоль
    */

  const namesArr = names.split(",");
  const phonesArr = phones.split(",");

  // оскікльки масиви однакової довжини (4), ми робимо 4 ітерації циклу. В тілі циклу ми звертаємось і до масиву імен і до масиву номерів по однакомому індексу (від 0 до 3)

  for (let i = 0; i < namesArr.length; i += 1) {
    console.log(i);
    console.log(`${namesArr[i]}: ${phonesArr[i]}`);
  }
}

// displayPhoneBook(names, phones);

/**
 * Напиши скрипт, який виводить у консоль усі слова рядка
 * крім першого і останнього. Результуючий рядок не повинен починатися
 * або закінчуватися символ пробілу.
 * Скрипт повинен працювати для будь-якого рядка.
 */

const string = "Welcome to the future";
const string = "Welcome to the future"; // "to the"

function getMiddleString(string) {
  // 1. Перетворюємо речення на масив слів за допомогою split(" ")
  // 2. За допомогою методу slice робимо копію масиву без 1 і без останнього елементу
  // 3. За допомогою методу join(" ") поєднуємо масив назад у рядок і викликати метод trim
  // 4. повернути результат фукнції

  // "     welcome to the     ".trim() -> "welcome to the".split(" ") -> ["welcome", "to", "the"]

  const arrOfWords = string.trim().split(" ");
  const resultArr = arrOfWords.slice(1, -1); // робимо копію з другого слова до передостаннього
  const result = resultArr.join(" ").trim();
  return result;
}

// console.log(getMiddleString(string));

/**
 * Напиши скрипт пошуку найменшого числа у масиві. Код повинен працювати
 * для будь-якого масиву чисел. Використовуй цикл для розв'язання задачі.
 */

const values = [2, 17, 94, 1, 23, 37];
let min;
console.log(min); // 1
const values = [25, 17, 94, 5, 23, 3, 37];

function findMinInArr(numbers) {
  /*
    1. створюємо змінну мін куди запишемо перше значення масиву
    2. запускаємо цикл для перебору кожного елементу масиву
        2.1. робимо перевірку, якщо поточне значення масиву менше за наше мінімальне, то поточне стане мінімальним
    3. повернення результату
    */

  let min = numbers[0];

  for (const number of numbers) {
    if (number < min) {
      // якщо поточне менше за мінімальне, то мінімальне стане поточним
      min = number;
    }
  }

  return min;
}

console.log(findMinInArr(values));

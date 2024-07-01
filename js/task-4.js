/**
 * Методи рядків
 *
 *  - slice
 *  - toLowerCase/toUpperCase
 *  - includes
 *  - startsWith/endsWith
 *  - indexOf
 *  - trim
 */

const username = "Jacob Mercer";

//* метод - це по суті звичайна функція, яка виконує якусь дію, але вона викликається через крапку на якомусь значенні. value.method()

//! ===================================

//* .slice(start[, end]) - метод який повертає копію підрядка від індексу start до індексу end не включно, при чому ці параметри не є обовʼязковими

// const usernameCopy = username.slice(); // повна копія рядка
// console.log(usernameCopy);

// console.log(username.slice(6)); // часткове копіювання рядка, ми вказали що почнемо робити копію з 6 індексу (індекси починаються з 0), кінець копіювання ми не вказали, значить воно скопіює до кінця всього рядка

// console.log(username.slice(6, 9)); // ми зробили копію підрядка перших 3 літер прізвища [6, 9)

// console.log(username.slice(10, 1)); // якщо індекс початку більший за індекс кінця, то повертається пустий рядок

// console.log(username.slice(-3)); // якщо значення є відʼємним, то ви копіюєте з кінця рядка

// console.log(username.slice(-6, -3)); // копіювання з кінця рядка, початок в позиції -6 символів від кінця рядка, а кінець копіювання в позиції -3 символи від кінця рядка

// console.log(username.slice(4, -2));
// console.log(username.slice(-9, 8));
// console.log(username.slice(3, 8));

//! ===================================

//* toLowerCase/toUpperCase - ці методи маніпулюють регістром, піднімаючи всі букви у верхній або у нижній регістр

// console.log(username.toLowerCase());
// console.log(username.toUpperCase());

//! ===================================

//*  string.includes(substring, position) - цей метод повертає буль (true/false), перевіряє наявність первного підрядка substring усередині якогось рядка sring. Також можна звузити коло пошуку вказавши з якого індексу рядку почнеться перевірка в параметрі position

// const goods = "apple, grapes, peach, banana";
// //14
// console.log("Наявність яблук:", goods.includes("apple"));
// console.log("Наявність дині:", goods.includes("melon"));
// console.log("Наявність персику:", goods.includes("peach"));
// console.log("Наявність коми:", goods.includes(","));

// console.log(goods.includes("peach", 14)); // пошук буде проводитись починаючи з 14 індексу, тобто з підрядку peach, banana і ми знайдемо що нам треба

//! ===================================

//* startsWith/endsWith - методи які повертають буль (true/false). За допомогою них можна перевірити чи починається (закінчується) рядок певним підрядком

// const url = "https://example.com";

// const isUrlSecure = url.startsWith("https");
// const isComDomen = url.endsWith(".com");

// console.log("Чи є сайт захищеним?", isUrlSecure);
// console.log("Чи підтримує сайт домен .com?", isComDomen);

//! ===================================

//* indexOf(searchValue) - повертає індекс входження підрядка searchValue в рядок. Якщо такого підрядка не має - повертається -1.

// const goods = "apple, grapes, peach, banana";

// console.log(goods.indexOf("grapes")); // 7 - індекст початку входження цього підрядка

// console.log(goods.indexOf("vine")); // -1 тому що такого підрядка не існує, відповідно його індекс знайти неможливо

//! ===================================

//* .trim() - видаляє усі пробіли на початку рядку та у кінці. Якщо у вас буде рядок "    Hello   world!    ", то метод trim() перетворить його у рядок "Hello   world!"

const msgWithSpacing = "    Hello    world!      ";
const correctMsg = msgWithSpacing.trim();

console.log(msgWithSpacing);
console.log(correctMsg);

/**
 * Форматування посилання (endsWith)
 *
 * Напиши скрипт який перевіряє чи закінчується значення
 *  змінної link символом /. Якщо ні, додай до кінця
 *  значення link цей символ.
 * Використовуй конструкцію if...else.
 */

let link = "https://my-site.com/about";
console.log(link);
// let link = "https://my-site.com/about";

// function formatLink(link) {
//   //variant 1
//   // if (link.endsWith("/")) {
//   //   return link;
//   // } else {
//   //   // return link + "/"
//   //   return `${link}/`;
//   // }

//   //variant 2
//   return link.endsWith("/") ? link : `${link}/`;
// }

// console.log(formatLink(link));

/**
 * Форматування посилання (includes та логічне «І»)
 * Напиши скрипт який перевіряє чи закінчується значення
 * змінної link символом /. Якщо ні, додай до кінця
 * значення link цей символ, але тільки в тому випадку,
 * якщо в link є підрядок "my-site".
 * Використовуй конструкцію if...else або тернарний оператор.
 */

let url = "https://somesite.com/about";
console.log(url);
// let url = "https://somesite.com/my-site/about";
// // console.log(url);

// function formatLink(link) {
//   //variant 1
//   // if (!link.endsWith("/") && link.includes("my-site")) {
//   //   return `${link}/`;
//   // } else {
//   //   return link;
//   // }

//   //variant 2
//   return !link.endsWith("/") && link.includes("my-site") ? `${link}/` : link;
// }

// console.log(formatLink(url));

/*
 * Пошук у рядку методом includes()
 */

const blacklistedWord1 = "spam";
const blacklistedWord2 = "sale";

const string1 =
  "Hello, I'm Prince Abdul, this is not spam, I'm offering you a million!";

const string2 = "Biggest SALE this week, don't miss out!";

const string3 = "#fatlivesmatter advertising campaign";

function checkSpamWords(string) {
  const blacklistedWord1 = "spam";
  const blacklistedWord2 = "sale";

  // приводимо речення до нижнього регістру, тому що пошук заборонених слів буде відбуватись шляхом порівнянь, де регістр є чутливим
  const stringLowerCase = string.toLowerCase();

  // робимо перевірку, якщо в реченні є (includes) хоча б одне (||) з двох забороненх слів - то результат виразу буде true, тобто, речення має заборонені слова
  const result =
    stringLowerCase.includes(blacklistedWord1) ||
    stringLowerCase.includes(blacklistedWord2);

  // повертаємо результат для подальшого використання
  return result;
}

console.log(
  "Статус наявності заборонених слів у 1 реченні",
  checkSpamWords(string1)
);
console.log(
  "Статус наявності заборонених слів у 2 реченні",
  checkSpamWords(string2)
);
console.log(
  "Статус наявності заборонених слів у 3 реченні",
  checkSpamWords(string3)
);

/**
 * Цикли
 *
 * - Цикл for
 * - Відлік від 0 до N
 * - Обратний відлік від N до 0
 * - Збільшення/зменшення лічильника на 2+
 * - Інкремент і декремент
 * - Цикли while
 * - Цикли while
 */

console.log("Before");
//* цикл - це спеціальна конструкція яка дозволяє вам виконувати один і тей самий код багато разів, часто використувається для перебору якогось набору даних

console.log("After");
//* цикл for використовується тоді, коли ви точно знаєте кількість ітерацій (одне виконання циклу)

/*
for(ініціалізація внутрішніх змінних; умова продовження циклу; пост вираз) {
    тіло циклу
}
*/

// console.log("Before");

// for (let i = 0; i <= 2; i += 1) {
//   console.log(i);
// }

/*
1. for (let i = 0; 0 <= 2; i += 1) {
     console.log(0);
    }
2. for (i = 1; 1 <= 2; i += 1) {
     console.log(1);
    }
3. for (i = 2; 2 <= 2; i += 1) {
     console.log(2);
    }
4. for (i = 3; 3 <= 2; i += 1) // кінець! бо умова 3 <= 2 це фолс
*/

// console.log("After");

/**
 * -------------------------------
 */

console.log("Before");
// console.log("Before");

// for (let i = 10; i >= 2; i -= 2) {
//   console.log(i);
// }

console.log("After");
// console.log("After");

/**
 * -------------------------------
 */

let a = 10;
// const min = 100;
// const max = 1000;

// // знайти суму усіх цілих чисел від min до max включно

// console.log(a);
// console.log(b);
// function getSumOfRange(min, max) {
//   if (min >= max) {
//     console.log("Некоректно задано діапазон!");
//     return 0;
//   }
//   /*
//     1. Оголосити змінну накопичувач (куди ми будемо додавати усі числа)
//     2. запустити цикл від мін до макс з кроком 1, додаючи кожне значення до накопичувача
//     */

//   let sum = 0;

//   for (let i = min; i <= max; i += 1) {
//     sum += i;
//   }

//   return sum;
// }

// console.log(
//   `Сума цілих чисел в діапазоні [${min}, ${max}] рівна ${getSumOfRange(
//     min,
//     max
//   )}`
// );

/**
 * -------------------------------
 */

console.log("Before while loop");
// let a = 10;
// let b = a++; // let b = a(10) -> a += 1
// // ++a - спочатку додає одиницю, а потім повертає значення (вже оновлене)
// // a++ - спочатку повертає значення (старе), а потім додає одиницю

// console.log(a); // 11
// console.log(b); // 10

// let c = 10;
// let d = ++c; // c += 1 -> c = 11, let d = c(11)

// console.log(c);
// console.log(d);

/**
 * -------------------------------
 */

//* while(умова) - це цикл, який використовується в тих випадках, коли ви не знаєте точну кількість ітерацій, але вам треба виконувати певний код, допоки умова буде істиною

// console.log("Before while loop");

// let counter = 0;

// while (counter < 10) {
//   console.log("Ітерація циклу, значення", counter);
//   counter += 1;
// }
// console.log("Result", counter);

// console.log("After while loop");

// const CORRECT_PASSWORD = "1111";

// let userPassword = prompt("Введіть пароль:");

// while (userPassword.trim() !== CORRECT_PASSWORD) {
//   userPassword = prompt("Пароль введено не вірно, спробуйте ще раз:");
// }

// alert("Раді вас бачити!");

let counter = 0;
// for (let i = 0; i <= 10; i += 1) {
//   if (i === 5) {
//     break; // оператор який моментально зупинить виконання циклу і код нижче (в тілі циклу) виконуватись не буде
//   }
//   console.log(i);
// }

console.log("After while loop");
// for (let i = 0; i <= 10; i += 1) {
//   if (i === 5) {
//     continue; // оператор який пропускає поточну ітерацію(ви відразу переходите на наступну ітерацію)
//   }
//   console.log(i);
// }

/**
 * Напиши цикл for, який виводить у консоль браузера
 * числа за зростанням від a до b, але тільки якщо число кратне 5.
 */

const a = 100;
const b = 20;
// const min = 20;
// const max = 100;

// function logMultiplesNumbersFromRange(min, max, multiple) {
//   // ця функція буде виводити в консоль всі числа від min до max які кратні (діляться націло) значенню multiple

//   // запускаємо цикл від 20 до 100 з кроком 1
//   for (let i = min; i <= max; i += 1) {
//     // робимо перевірку, виводити значення в консоль ми будемо тільки при умові якщо поточне число буде націло ділитись на multiple(5). Тобто, якщо число буде кратне значенню multiple
//     if (i % multiple === 0) {
//       console.log(i);
//     }
//   }
// }

// logMultiplesNumbersFromRange(min, max, 5);
// console.log("=========");
// logMultiplesNumbersFromRange(min, max, 10);

/*
 * Напиши скрипт, який підраховує суму всіх парних чисел,
 * які входять в діапазон чисел у змінних від min до max.
 * Наприклад, якщо min=0 и max=5, то діапазон 0-5, і в ньому два парних числа - 2 і 4, їх сума 6.
 */

const min = 0;
const max = 5;
const max = 10;
let total = 0;

/*
1. запускаємо цикл в діапазоні від мін до макс з кроком 1
    1.1. робимо перевірку на парність числа (i % 2 === 0)
    1.2. якщо число парне - додаємо його до змінної накопичувача total
*/

for (let i = min; i <= max; i += 1) {
  if (i % 2 === 0) {
    total += i;
  }
}

console.log(
  `Сума всіх парних чисел в діапазоні [${min}, ${max}] рівна ${total}`
);

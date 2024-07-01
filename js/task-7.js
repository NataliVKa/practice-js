/**
 * Об'єкти
 *
 * - Створення об'єкта
 * - Вкладені властивості
 * - Доступ до властивостей через крапку
 * - Доступ до вкладених властивостей
 * - Доступ до властивостей через квадратні дужки
 * - Зміна значення властивостей
 * - Додавання властивостей
 */

/*
[0, 1, 2, 3, 4]
{
  key: value, // властивість
}
*/

const playlist = {
  name: "My amazing playlist",
  rating: 5,
  tracks: ["track-1", "track-2", "track-3"],
  isFavourite: true,
};

// console.log(playlist);

playlist.newProp = 100;
playlist.rating = 4;

playlist.object = {
  smth: 5,
};

// console.log(playlist.name);
// console.log(playlist.tracks);

/**
 * -----------------------------------
 */
const propertyName = "tracks";
console.log(playlist[propertyName]);
console.log(playlist.name); // тоді, коли ви знаєте назву ключа
console.log(playlist["name"]); // використовуєте тоді, коли назва ключа невідома та зберігається в сторонній змінній

console.log(playlist.isFavourite);
console.log(playlist["isFavourite"]);

/**
 * -----------------------------------
 */
function foo(values) {
  console.log(values);
  console.log(values.a);
  console.log(values.b);
}

foo({
  a: 5,
  b: 10,
});

foo({
  a: 50,
  b: 0,
});

/**
 * Об'єкти
 *
 * - Тип даних за посиланням
 * - Масиви і функції - це об'єкти
 */
/**
 * --------------------------
 */

// console.log([1, 2, 3] === [1, 2, 3]); // false
// console.log({a: 1} === {a: 1}); // false

const a = { x: 1, y: 2 };
const b = a;

console.log(a === b); // true

b.x = 100;

console.log(a.x); // 100

//* =====================

const arr = [1, 2, 3];

arr.hello = ":)";

console.log(arr);
console.log(arr.hello);

function foo() {
  console.log("hello");
}

foo.hello = "world!";

console.dir(foo); // вивід в консоль у вигляді обʼєкту

console.log(foo.hello);

/**
 * Об'єкти
 *
 * - Короткі властивості
 * - Обчислювальні властивості
 */
const username = "Mango";
const email = "mango@mail.com";

const credentials = {};
const credentials = {
  // username: username,
  // email: email
  username,
  email,
};

console.log(credentials);
console.log(credentials.username);
console.log(credentials.email);
/**
 * -------------------------
 */

const inputName = "color";

const colorPickerData = {};
const colorPickerData = {
  // color: "red"
  [inputName]: "red", // ми створили ключ на основі значення константи inputName
};

console.log(colorPickerData);

/**
 * Перебір об'єкта
 *
 * - Цикл for...in
 * - Метод Object.keys
 * - Метод Object.values
 */
const feedback = {
  good: 5,
  neutral: 10,
  bad: 3,
};

let totalFeedback = 0;

// console.log("totalFeedback: ", totalFeedback);
// for (const key in feedback) {
//   // console.log(key);
//   // console.log(feedback[key]);
//   /*
//   feedback["good"] -> 5
//   feedback["neutral"] -> 10
//   feedback["bad"] -> 3
//   */
//   totalFeedback += feedback[key];
// }

// console.log("totalFeedback:", totalFeedback);

//* for in - перебирає ключі(індекси)
//* for of - перебирає значення в масивах (для обʼєктів не використовується)

/**
 * ---------------------------------
 */
const keys = feedback;
console.log(keys);

// console.log("totalFeedback: ", totalFeedback);
//* Object.keys(feedback); - повертає масив ключів
//* Object.values(feedback); - повертає масив значень

// const keys = Object.keys(feedback);
// console.log(keys);

const values = feedback;
// for(const key of keys){
//   console.log(key);
//   console.log(feedback[key]);
//   totalFeedback += feedback[key];
// }

// console.log("totalFeedback:", totalFeedback);

const values = Object.values(feedback); // [5, 10, 3]
console.log(values);

// console.log('totalFeedback: ', totalFeedback);
for (const value of values) {
  console.log(value);
  totalFeedback += value;
}

console.log("totalFeedback:", totalFeedback);

/**
 * Напиши скрипт, який для об'єкта user, послідовно:
 * - додає поле mood зі значенням 'happy'
 * - замінює значення hobby на 'skydiving'
 * - замінює значення premium на false
 * - виводить вміст об'єкта user у форматі ключ:значення використовуючи Object.keys() та for...of
 */
const user = {
  name: "Mango",
  age: 20,
  hobby: "html",
  premium: true,
};

user.mood = "happy";
user.hobby = "skydiving";
user.premium = false;

console.log(user);
const keys = Object.keys(user);

console.log(keys);

for (const key of keys) {
  console.log(`${key}: ${user[key]}`);
}

console.log("================================");

/**
 * У нас є об'єкт, де зберігаються зарплати нашої команди. Напишіть код для
 * підсумовування всіх зарплат і збережіть результат у змінній sum.
 * Повинно вийти 390. Якщо об'єкт salaries порожній, то результат має бути 0.
 */
const salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

/*
1. let sum = 0; - створити змінну для накопичення суми
2. отримати масив значень всіх зарплат за допомогою Object.values(salaries)
3. перебрати масив значень за допомогою циклу for of та додати кожне значення до змінної суми
*/

function sumSalaries(salaries) {
  let sum = 0;

  const salariesArr = Object.values(salaries);

  for (const salary of salariesArr) {
    sum += salary;
  }
  return sum;
}

console.log("SUM:", sumSalaries(salaries));
console.log("SUM:", sumSalaries({ Dima: 100, Alice: 250, Mark: 260 }));

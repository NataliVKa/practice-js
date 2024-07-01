/**
 * Масив об'єктів
 *
 * - Перебір масива
 * - Пошук об'єкта за значенням властивості
 * - Колекція значень властивості
 */
const friends = [
  { name: "Mango", online: false },
  { name: "Kiwi", online: true },
  { name: "Poly", online: false },
  { name: "Ajax", online: false },
];

console.table(friends);
// console.table(friends);

/**
 * Пошук друга за іменем
 */
function findFriendByName(allFriends, friendName) {}
function findFriendByName(allFriends, friendName) {
  for (const friend of allFriends) {
    if (friend.name === friendName) {
      console.log("Friend exist :)");
      return friend;
    }
  }
  console.log("Friend doesn't exist :(");
  return null;
}

// console.log(findFriendByName(friends, "Poly"));
// console.log(findFriendByName(friends, "Chelsy"));

/**
 * Отримуємо імена всіх лрузів
 */
function getAllNames(allFriends) {}
function getAllNames(allFriends) {
  const names = [];

  for (const friend of allFriends) {
    names.push(friend.name);
  }

  return names;
}

// console.log(getAllNames(friends));

/**
 * Отримуємо імена тільки тих друзів, які зараз онлайн
 */
function getOnlineFriends(allFriends) {}
function getOnlineFriends(allFriends) {
  const names = [];

  for (const friend of allFriends) {
    if (friend.online) {
      names.push(friend.name);
    }
  }

  return names;
}

// console.log(getOnlineFriends(friends));

/**
 * Напишіть функцію calcTotalPrice(stones, stoneName),
 * яка приймає масив об'єктів та рядок з назвою каменю.
 * Функція рахує і повертає загальну вартість каміння з
 * таким ім'ям, ціною та кількістю з об'єкта
 */
const stones = [
  { name: "Смарагд", price: 1300, quantity: 4 },
  { name: "Діамант", price: 2700, quantity: 3 },
  { name: "Сапфір", price: 400, quantity: 7 },
  { name: "Щебінь", price: 200, quantity: 2 },
];

function calcTotalPrice(stones, stoneName) {
  // let totalPrice = 0;

  for (const stone of stones) {
    if (stone.name === stoneName) {
      // totalPrice = stone.price * stone.quantity;
      return stone.price * stone.quantity;
    }
  }

  // return totalPrice;
  return 0;
}

console.log(calcTotalPrice(stones, "Щебінь")); // 400
console.log(calcTotalPrice(stones, "Діамант")); // 8100
console.log(calcTotalPrice(stones, "Рубін")); // 0

/**
 * Об'єкти
 *
 * - Методи об'єкта
 * - Доступ до властивостей об'єкта через this
 * - Зміна за посиланням
 */
const playlist = {
  name: "My amazing playlist",
  rating: 5,
  tracks: ["track-1", "track-2", "track-3"],
  changeName(newName) {},
  addTrack(track) {},
  updateRating(newRating) {},
  getTrackCount() {},
  changeName(newName) {
    // this - це посилання на обʼєкт, який викликає функцію (метод) - стає тим обʼєктом, який виклика ф-цію
    // значення this стає відомим тільки тоді коли ви викликаєте фукнцію
    // console.log(this);
    this.name = newName;
  },
  addTrack(track) {
    // console.log(this);
    this.tracks.push(track);
  },
  updateRating(newRating) {
    this.rating = newRating;
  },
  getTrackCount() {
    return this.tracks.length;
  },
};

// console.log(playlist.getTrackCount());

// playlist.changeName("New playlist name");

// playlist.addTrack("new track 1");
// console.log(playlist.getTrackCount());

// playlist.addTrack("new track 2");
// console.log(playlist.getTrackCount());

// playlist.updateRating(4);
// console.log(playlist);
playlist.changeName("Lofi tracks");
playlist.addTrack("track-4");
playlist.updateRating(4);
console.log(playlist.getTrackCount());
console.log(playlist);

/**
 * Синтаксис spread і rest
 *
 * - Залишкові параметри
 * - Збір частини аргументів
 * - Входження параметрів
 * - Створення масиву
 * - Створення об'єкта
 */

const numbers = [];
const sideArr = [1, 2, 3];
const numbers = [1000, 10, 5, ...sideArr, 70, ...[4, 5, 6]];
// console.log(numbers);

/**
 * Пошук найменшої аьо найбільшої температури (числа)
 */
const temps = [18, 14, 12, 21, 17, 29, 24];
// console.log("MAX:", Math.max(...temps), "C");
// console.log("MIN:", Math.min(...temps), "C");

/**
 * Створення масиву і тип за посиланням
 */
const a = [{ x: 1 }, { y: 2 }, { z: 3 }];
const b = a;
const b = [...a];

// console.log(a[0] === b[0]);
// a[0].x = 1000;

// console.log("a: ", a);
// console.log("b: ", b);
/*
 * Поєднуємо кілька масивів в один через spread
 */
const lastWeekTemps = [1, 2, 3];
const currentTemps = [4, 5, 6];
const nextWeekTemps = [7, 8, 9];

const allTemps = [];
const allTemps = [...lastWeekTemps, ...currentTemps, ...nextWeekTemps];
// console.log(allTemps);

/*
 * Створення об'єкта
 */
const objA = { x: 1, y: 2 };
const objB = { x: 0, z: 3 };
const objC = {};
const objC = { ...objA, ...objB };

// console.log(objC);

/**
 * Оновлюємо налаштування користувача
 */
const defaultSettings = {
  theme: "light",
  showNotifications: true,
  hideSidebar: false,
};
const userSettings = {
  showNotifications: false,
  hideSidebar: true,
};

const finalSettings = {};
const finalSettings = {
  ...defaultSettings,
  ...userSettings,
};

// console.log(finalSettings);

//* rest ...

function sumAll(...numbers) {
  let total = 0;
  for (const number of numbers) {
    total += number;
  }
  return total;
}

console.log(sumAll(1, 6, 3)); // 10
console.log(sumAll(1, 6, 3, 7, 4)); // 21
console.log(sumAll(1, 6, 3, 7, 4, 9, 10, 65)); // 105




/*
 * Типів транзакцій всього два.
 * Можна покласти чи зняти гроші з рахунку.
 */
const Transaction = {
// константи значення яких ми знаємо ще до початку роботи програми (означає що значення не обчислюється під час роботи) зазвичай називають кепслоком
const TRANSACTIONS = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw",
};
/*
 * Кожна транзакція це об'єкт із властивостями: id, type та amount
 */
const account = {
  // Поточний баланс рахунку
  balance: 0,
  // Історія транзакцій
  transactions: [],
  /*
   * Метод створює та повертає об'єкт транзакції.
   * Приймає суму та тип транзакції.
   */
  createTransaction(amount, type) {},
  createTransaction(amount, type) {
    return {
      id: this.transactions.length,
      amount,
      type,
    };
  },

  /*
   * Метод, що відповідає за додавання суми до балансу.
   * Приймає суму транзакції.
   * Викликає createTransaction для створення об'єкта транзакції
   * після чого додає його до історії транзакцій
   */
  deposit(amount) {},
  deposit(amount) {
    this.balance += amount; // додаємо суму до балансу
    const currentTransaction = this.createTransaction(
      amount,
      TRANSACTIONS.DEPOSIT
    ); // створюємо обʼєкт транзакції {id, amount, type}

    this.transactions.push(currentTransaction); // додаємо поточну транзакцію в масив усіх транзакція (в історію операцій)
  },

  /*
   * Метод, що відповідає за зняття суми з балансу.
   * Приймає суму транзакції.
   * Викликає createTransaction для створення об'єкта транзакції
   * після чого додає його до історії транзакцій.
   *
   * Якщо amount більше ніж поточний баланс, виводь повідомлення
   * про те, що зняття такої суми не можливе, недостатньо коштів.
   */
  withdraw(amount) {},
  withdraw(amount) {
    if (amount > this.balance) {
      console.error("Зняття суми неможливо, недостатньо коштів!");
      return; // виходимо з функції щоб не виконувати її код
    }

    this.balance -= amount; // знімаємо кошти з балансу
    const currentTransaction = this.createTransaction(
      amount,
      TRANSACTIONS.WITHDRAW
    ); // створюємо обʼєкт транзакції {id, amount, type}

    this.transactions.push(currentTransaction); // додаємо поточну транзакцію в масив усіх транзакція (в історію операцій)
  },

  /*
   * Метод повертає поточний баланс
   */
  getBalance() {},
  getBalance() {
    return this.balance;
  },

  /*
   * Метод шукає та повертає об'єкт транзакції по id
   */
  getTransactionDetails(id) {},
  getTransactionDetails(id) {
    return id > this.transactions.length - 1 ? null : this.transactions[id];
    // якщо id елементу який ми шукаємо буде більшим за довжину -1(тобто останній індекс в масиві) то повертаємо 0, інакше отримуємо поточний елемент по id в якості індексу
  },

  /*
   * Метод повертає кількість коштів
   * певного типу транзакції з усієї історії транзакцій
   */
  getTransactionTotal(type) {},
  getTransactionTotal(type) {
    /*
    1. Створити змінну в яку будемо накопичувати суму транзакцій
    2. перебираємо масив транзакцій циклом фор оф
    3. робимо перевірку якщо тип транзкації обʼєкту співпадає з типом, який ми шукаємо, то
      3.1. ми додаємо суму операції до змінної накопичувача
    */

    let totalSum = 0;
    for (const transaction of this.transactions) {
      if (transaction.type === type) {
        totalSum += transaction.amount;
      }
    }

    return totalSum;
  },
};

console.log("Current balance:", account.getBalance());
account.deposit(100);
account.deposit(500);
account.deposit(600);
console.log("Current balance:", account.getBalance());
account.withdraw(250);
account.withdraw(1250);
account.withdraw(100);
account.withdraw(50);
console.log("Current balance:", account.getBalance());

console.log(account.getTransactionDetails(2)); // {id: 2}
console.log(account.getTransactionDetails(100)); // null

console.log("SUM DEPOSIT:", account.getTransactionTotal(TRANSACTIONS.DEPOSIT)); // 600
console.log(
  "SUM WITHDRAW:",
  account.getTransactionTotal(TRANSACTIONS.WITHDRAW)
); // 250

console.log(account);
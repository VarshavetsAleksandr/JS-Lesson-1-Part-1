/***** ОГОЛОШЕННЯ ЗМІННИХ *****/

// Змінна const - повинна бути одразу ініціалізована,
// якщо не ініціалізувати, то виникне помилка
// Missing initializer in const declaration
// Відсутній ініціалізатор в оголошенні const
// - помилка, якщо пропущена ініціалізація const
// const - є сталою змінною, перевизначити const далі по коду не можливо.

// const value = 10;
//місце ініціалізації змінною - рядок коду де змінній задано значення
// console.log(value);


// Змінним, оголошеним через let, не обов'язково одразу присвоювати значення.
// Якщо змінній, оголошеній як let, не було присвоєно значення,
// вона ініціалізується спеціальним значенням undefined (не визначено).
// let age;
// console.log(typeof age);  // undefined

// приведення змінної зі спеціальним значенням undefined до булевого значення завжди дасть false
// console.log(Boolean(age));

// Якщо змінна оголошена як let, її значення можна перезаписати.
// age = 14;
// console.log(age);




/***** ПРИМІТИВНІ ТИПИ ДАНИХ ****/

// Number - цілі числа і числа з плаваючою комою (крапкою).

// let value = 10.45;
// console.log(value);

// console.log(5 === 5);
// Особливий підтип NaN - Not a Number (Не є числом.)
// console.log(NaN === NaN);
// console.log(Number('22.5aa'));
// console.log(undefined + 1);
// console.log(null + 3); // 0 + 3
// console.log(false + 1); // 0
// console.log(true + 1); // 1 + 1


// String - рядки, послідовність з нуля або більше символів.
// Рядок починається і закінчується одинарними ', або подвійними лапками ".

// Типи рядків '' "" ``

// console.log("I'm");

// console.log('Total 25 + 15');
// const total = 25 + 15;
// console.log(`Total ${total}`);

// Boolean - логічний тип даних, прапорці стану.
// Має всього два значення: (true, false)
// якщо прирівняти булеве значення до числового - то:
// true  => 1
// false => 0


// undefined - ще одне спеціальне значення. За замовчуванням, коли змінна оголошується,
// але не ініціалізується, її значення не визначено, їй присвоюється undefined.

// null - особливе значення, яке по суті означає ніщо.
// Використовується в тих ситуаціях, коли необхідно явно вказати порожнечу.

// перевірка типу даних з яким працюємо метод typeof
// оголошення змінної
// let username;
// що в собі містить змінна
// console.log(username);
// тип данних змінної
// console.log(typeof username);
// перевірка типу данних змінної
// console.log(typeof username === 'undefined');
// console.log('=========');

// let inputValue = null;
// console.log(inputValue);
// console.log(typeof inputValue); // "object"
// console.log(typeof inputValue === 'object');
// console.log('=========');

// const quantity = 17;
// console.log(quantity);
// console.log(typeof quantity); // "number"
// console.log(typeof quantity === 'number');
// console.log('=========');

// const message = "JavaScript is awesome!";
// console.log(message);
// console.log(typeof message); // "string"
// console.log(typeof message === 'string');
// console.log('=========');

// const isSidebarOpen = false;
// console.log(isSidebarOpen);
// console.log(typeof isSidebarOpen); // "boolean"
// console.log(typeof isSidebarOpen === 'boolean');
// console.log('=========');


/***** Виведення даних. Комунікація з користувачем та можливість відображення якогось результату *****/

// const message = "JavaScript is awesome!";
// console.log(message); // JavaScript is awesome!
// console.log(typeof message);

// const username = "Aleksandr";
// console.log("Username is ", username);
// Результат - Username is {значення змінної username}

// Метод alert() - виводить модальне вікно з однією кнопкою ОК
// const message = "JavaScript is awesome!";
// alert(message);

// Метод confirm() - виводить модальне вікно з двома кнопками ОК/Отмена
// якщо натиснути ОК -отримуємо бульове значення true
// якщо натиснути Отмена - отримуємо бульове значення false
// const isComing = confirm('Будеш вчити JS?');
// console.log(isComing);

// Метод promt() - виводить модальне вікно з полем для вводу тексту (imput)
// та двома кнопками ОК / Отмена
// якщо натиснути ОК - результатом буде рядок (string), з текстом який ввів користувач
// значення що було введено завжди будуть типу - рядок (string)!!!
// якщо натиснути Отмена - результатом буде Null (Тип даних - object)

// const hotelName = prompt("Please enter desired hotel name");
// console.log(hotelName);
// console.log(typeof hotelName);


/***** ОСНОВНІ ОПЕРАТОРИ *****/

// Оператори порівняння
// Використовуються для порівняння двох значень.
// Результатом свого виконання повертають буль - true або false, тобто «так» або «ні».

// Оператор більше - >
// console.log(22 > 21); // true
// console.log(20 > 21); // false
// console.log(21 > 21); // false

// Оператор менше - <
// console.log(21 < 24); // true
// console.log(25 < 24); // false
// console.log(24 < 24); // false

// Оператор нестрогого поріняння - == (не строга рівність)
// виконують перетворення типів порівнюваних значень у число

// console.log('false' == 0);
// Тип данних 'false' - string (рядок).
// Порівняння рядків здійснюється за допомогою таблиці ЮНІКОДУ.
// Тобто рядок (string) - 'false' перетворюється не у 'false' = 0
// а 'false' = (значення з таблиці ЮНІКОДУ для кожного символа)
// тому результатом виразу не строгого порівняння 'false' == 0 буде false

// console.log(false == 0);
// Виконується перетворювання False - типу бульве (Boolean) у числове значення.
// false => 0
// true => 1
// Результатом виразу console.log(false == 0) => 0==0; буде - true.

// Оператор строгого порівнянн === (строга рівність)
// - не виконують приведення типів оперантдів
// порівняння відбувається тільки між однаковими типами данних.
// console.log(5 === "5"); // Результатом буде => false
// console.log(5 === 5); // Результатом буде => true
// console.log(1 === true); // Результатом буде => false

// !== (строга нерівність)
// console.log(5 !== "5"); // Результатом буде => true
// console.log(5 !== 5); // Результатом буде => false
// console.log(1 !== true); // Результатом буде => true

// Приведення до числа
// Щоб явно перетворити значення на число використовується функція Number()
// const str = '25'; // ініціалізація змінної. Тип данних string
// console.log(typeof str); // Перевірка типу даних
// console.log(Number(str)); // перетворення string (str = '25') на число
// console.log(Number(str) === 25); // строге порівняння

// Оператор менше або дорівнює - <=
// console.log(24 <= 25); // Результатом буде => true
// console.log(25 <= 25); // Результатом буде => true
// console.log(26 <= 25); // Результатом буде => false

// Оператор більше або дорівнює - >=

// console.log(26 >= 20); // Результатом буде => true
// console.log(26 >= 26); // Результатом буде => true
// console.log(25 >= 26); // Результатом буде => false

// Приклади роботи

// console.log(1 == true); // Результатом буде => true

// console.log(1 === true); // Результатом буде => false

// console.log('0' == false); // Результатом буде => true

// console.log('0' === false); // Результатом буде => false

// console.log('Papaya' < 'papaya'); // Результатом буде => true
// !!! МАЛЕНЬКІ ЛІТЕРИ ПО ЮНІКОДУ ЗАВЖДИ БІЛЬШІ НІЖ ВЕЛИКІ

// console.log('a' < 'aAbBc'); // Результатом буде => true
// відбувається порівняння до поки буде перше не співпадіння, або якщо закінчиться рядок
// в данному випадку рядок 'aAbBc' більше ніж рядок 'a' тому що,
// відбулося спавпадіння по першому символу (a) і рядок 'a' закінчився
// console.log('Papaya' === 'papaya'); // Результатом буде => false
// console.log('papaya' === 'papaya'); // Результатом буде => true
// !!! ПОРІВНЯННЯ РЯДКІВ ЗА ТАБЛИЦЕЮ ЮНІКОДУ ВЕЛИКА ЛІТЕРА ЗАВЖДИ МЕНЬШЕ НІЖ МАЛЕНЬКА


/***** Значення які завжди будуть конвертовані до false (Обов'язково!!!) *****/

//  0 (число нуль)
// console.log(Boolean(0));
// "" (порожній рядок)
// console.log(Boolean(''));
// NaN
// console.log(Boolean(NaN));
// undefined
// console.log(Boolean(undefined));
// null
// console.log(Boolean(null));
// false
// console.log(Boolean(false));

/***** Логічні оператори *****/
// Логічний оператор && - (і) (and)
// const sum = 10
// console.log(0 < sum && sum < 20);

// const str = 'qwer';
// const age = 22;
// console.log(str && age);
// Оператор && приводить всі значення до буля
// якщо всі значення дорівнюють true передається крайнє праве значення
// в данному випадку передається значення age = 22

// const value = 'qwer' // 'qwer' => true
// const str = ''; // '' => false (порожній рядок завди дає false)
// const age = 22; // 22 => true
// console.log(value && str && age);
// Оператор && приводить всі значення до буля
// якщо хочаб одне значення буде дорівнювати false
// передається значення котре дорівнює false
// в данному випадку передається значення str = ''

// Приклади логічного оператору &&
// console.log(1 && 5); // true && true -> 5
// console.log(5 && 1); // true && true -> 1
// console.log(0 && 2); // false && true -> 0
// console.log(2 && 0); // true && false -> 0
// console.log("" && "Mango"); // false && true -> ""
// console.log("Mango" && ""); // true && false -> ""
// console.log("Mango" && "Poly"); // true && true -> "Poly"
// console.log("Poly" && "Mango"); // true && true -> "Mango"

// Логічний оператор || - (або) (or)

// console.log(2 || 0 || 1);
// => (2=>true) (0=>false (ЗАВЖДИ!!!)) (1=true)
// Оператор || приводить всі значення до буля
// і повертає перше значення котре дорівнює true
// у випадку console.log(2 || 0 || 1) повернеться значення 2
// - тому що воно перше, котре дорівнює true

// console.log('' || 0 || undefined);
// Якщо всі значення дорівнюють false
// повернеться останнє значення false
// у випадку console.log('' || 0 || undefined); повернеться значення undefined
// тому що всі значення мають false, але undefined оснаттій

// Приклади логічного оператору ||
// console.log(true || false); // true
// console.log(false || true); // true
// console.log(true || true); // true
// console.log(3 || false); // 3
// console.log(false || 3); // 3
// console.log(3 || true); // 3
// console.log(true || 3); // true

// Логічний оператор ! - (Логічне НЕ) (not)
//Всі оператори, які ми розглядали до цього, були бінарними
// - містять два операнди: лівий і правий.
// Логічне «НЕ» - це унарний оператор, який виконує операцію над
// одним операндом з правої сторони.
// console.log(!true); // false
// console.log(!false); // true
// console.log(!3); // !3 -> !true -> false
// console.log(!"Mango"); // !"Mango" -> !true -> false
// console.log(!0); // !0 -> !false -> true
// console.log(!""); // !"" -> !false -> true
// const isOnline = true;
// const isNotOnline = !isOnline; // !isOnline -> !true -> false

// ?? реагує лише на null undefined
// "Пропускає" тільки оператди зі щначенням null або undefined
// якщо всі значення не дорівнюють null або undefined
// повертається ліве крайнє значення
// якщо знаходить null або undefined, то пропускає його та шукає значення
// контре не дорівнює null або undefined.
// якщо всі значення дорівнюють null або undefined, тоді повертається
// праве крайнє значення

// console.log(0 ?? 1); // => 0
// console.log(false ?? 0); // => false
// console.log(null ?? 1); // => 1
// console.log(undefined ?? 10); // => 10
// console.log(10 ?? undefined); // => 10
// console.log(null ?? undefined); // => undefined
// console.log(undefined ?? null); // => null
// let qty; //undefined

// console.log(1 || 0 && 23); // => 1
// Логічний оператор && завжди має пріорітет над логічним оператором ||
// саме тому спочатку виконується дія оператору &&, 
// тільки потім виконується дія оператору ||

// Приклади роботи

// console.log(true && 3); // =>3
// console.log(false && 3); // => false
// console.log(true && 4 && 'kiwi'); // => 'kiwi'
// console.log(true && 0 && 'kiwi'); // => 0
// console.log(true || 3); // => true
// console.log( 3 ||true || 4); // => 3
// console.log('' || false || 7); // => 7
// console.log(null || 2 || undefined); // => 2
// console.log('' ??  4); // => "" (порожній рядок)
// console.log(false ?? 7); // => false
// console.log(null ?? 7); // => 7
// console.log(undefined ?? 7); // =>7


/***** Математичні оператори *****/

// const value = 10
// +
// const result = value + 15
// -
// const result = value - 5
// *
// const result = 10 + value * 5
// /

// %
// const result = value % 2 !== 0
// const result = !(value % 2) //=>  10 % 2 => !0
// console.log(result);
// console.log(Boolean(0)) === console.log(!!0);

// false => HE HE 0

/***** Комбіновані оператори *****/

// +=

// -=

// *=

// /=



/***** Методи для роботки з числами (тип даних Number) *****/

// Метод Number.parseInt() парсить з рядка ціле число.
// let str = '25.7a32px';
// Number.parseInt()
// console.log(Number.parseInt(str)); // => 25

// str = '367.214sdsd';
// Number.parseInt()
// console.log(Number.parseInt(str)); // => 367

// str = 'a412';
// Number.parseInt()
// console.log(Number.parseInt(str)); // => NaN


// Метод Number.parseFloat() парсить з рядка дробове число.
// let str = '25.7a32px';
// Number.parseInt()
// console.log(Number.parseFloat(str)); // => 25.7

// str = '211.92px';
// Number.parseInt()
// console.log(Number.parseFloat(str)); // => 211.92

// str = 'sa25.7a32px';
// Number.parseInt()
// console.log(Number.parseFloat(str)); // => NaN


// Метод Number.isNaN() - перевірка на число
// Метод відповідає на запитання "Це Not A Number?" і повертає:
// true - якщо значення val - NaN
// false - якщо значення val - не NaN

// const validNumber = Number("51");
// Преведення рядку const validNumber = Number("51") до числа 51
// console.log(Number.isNaN(validNumber));
// значення const validNumber = Number("51") було приведенно до числа
// тому результат буде false, тому що const validNumber = Number("51") є числом!

// const invalidNumber = Number("qweqwe");
// Преведення рядку invalidNumber = Number("qweqwe"); до числового значення
// отримаємо значення NaN
// console.log(Number.isNaN(invalidNumber));
// значення const invalidNumber = Number("qweqwe"); не було приведено до числа
// тому результат буде true, тому що const invalidNumber = Number("qweqwe"); не є числом. (=NaN)
// Для Number.isNaN() необхідно давати змінну зі значенням NaN для порівняння
// чи є змінна NaN. Тобто, щоб Number.isNaN() працювала, попереднь необхідно
// зробити приведення до числа - Number().



//  Метод isNaN() - перевірка на число
// майже однакове з Метод Number.isNaN()
// але Метод isNaN() автоматично робить приведення до числа
// const str = '25.7a32px'
// const num = Number(str); // NaN
// console.log(Number.isNaN(num));
// console.log(isNaN(num));
// console.log('=====================================');

// console.log(typeof str);
// console.log(Number.isNaN(str));// NaN //String
// console.log(isNaN(str)); //Number(str) => NaN


// Класс Math
// const value = 11.600

// Math.floor(num) - повертає найменше ціле число,
// менше, або яке дорівнює зазначеному числу
// console.log(Math.floor(value));

// Math.ceil(num) - повертає найбільше ціле число,
// більше, або яке дорівнює зазначеному числу.
// console.log(Math.ceil(value));

// Math.round(num) - повертає значення числа,
// округленого до найближчого цілого
// console.log(Math.round(value));

// Math.pow(base, exponent) - піднесення до степеня
// console.log(Math.pow(5, 4));
// console.log(5 ** 4);


/***** Методи та властивості для роботки з рядками (тип даних String) *****/

// const str = 'Hello world';
// length - щоб дізнатися довжину рядка! Результат буде кількість символів! !!!Не останній індекс.
// console.log(str.length);
// toLowerCase() - приведення всіх літер const str = 'Hello world'; до нижнього регістру.
// console.log(str.toLowerCase());
// toUpperCase() - приведення всіх літер const str = 'Hello world'; до верхнього регістру.
// console.log(str.toUpperCase());
// Метод indexOf() - Повертає позицію (індекс), на якій знаходиться перший збіг підрядка або -1, якщо нічого не знайдено.

// console.log(str.indexOf(' ')); // => 5
// console.log(str.indexOf('H')); // => 0
// console.log(str.indexOf('world')); // =>6 (Перший збіг на літері w - індекс => 6)
// console.log(str.indexOf('WORLD')); // => -1
// Метод includes() - Перевіряє, чи міститься підрядок в рядку, повертає буль - true, якщо міститься, і false - в іншому випадку.
// console.log(str.includes('world')); // => true
// console.log(str.includes(' ')); // => true
// console.log(str.includes('h')); // => false
// console.log(str.includes('WORLD')); // => false


// const str = 'Hello world';
// Метод endsWith() - Дозволяє визначити, чи завершується рядок символами (підрядком), зазначеними в дужках, повертаючи true або false.
// console.log(str.endsWith(' world')); // => true
// console.log(str.endsWith('ld')); // => true
// console.log(str.endsWith(' ')); // => false
// console.log(str.endsWith(' world ')); // => false

// Метод startsWith() - Дозволяє визначити, чи починяється рядок символами (підрядком), зазначеними в дужках, повертаючи true або false.
// console.log(str.startsWith('H')); // => true
// console.log(str.startsWith('Hello ')); // => true
// console.log(str.startsWith('h')); // => false
// console.log(str.startsWith(' Hello')); // => false

// Метод replace() - Повертає новий рядок, в якому перше (replace) підрядка замінені на вказане значення.
// console.log(str.replace('l', '🍕'));
// Метод replaceAll() - Повертає новий рядок, усі збіги (replaceAll) підрядка замінені на вказане значення.
// console.log(str.replaceAll('l', '🍟'));
// Методи replace() і replaceAll() не змінюють початкову змінну
// console.log(str);

// Метод slice() - Метод рядків slice (startIndex, endIndex)
// використовується для створення копії частини або всього рядка.
// Він робить копію елементів рядка від startIndex і до,
// але не включно endIndex і повертає новий рядок, не змінюючи оригінал.
// (startIndex) - початковий індекс
// (endIndex) - кінцевий індекс, але не включає його
// console.log(str.slice(0, 5)); // => Hello
// console.log(str.slice(-5)); // => world
// console.log(str.slice(-1)); // => d
// console.log(str);

// **************************************** Практика ****************************** //

// Task - 1

// Виконавши математичні операції та застосувавши шаблоні рядки виведи в консоль загальну кількість та ціну за кожен продукт та за всі продукти в кошику

// const apple = '🍎';

// const appleQuantity = 8;

// const applePrice = 34;

// const  appleMessage = `${apple} total cost ${appleQuantity * applePrice}`
// console.log(appleMessage);
// const lemon = '🍋';

// const lemonQuantity = 3;

// const lemonPrice = 72;

// const lemonMessage = lemon + ' total cost ' + (lemonQuantity + lemonPrice)
// console.log(lemonMessage);
// const cherry = '🍒';

// const cherryQuantity = 3;

// const cherryPrice = 72;

// const cherryMessage = `${cherry} total cost ${cherryQuantity * cherryPrice}`;

// console.log(cherryMessage);
// const result = `Total ${(applePrice * appleQuantity) + (lemonQuantity * lemonPrice) + (cherryQuantity * cherryPrice)}`

// console.log(result);

// Task - 2

// Напиши скрипт, який переведе значення totalMinutes (кількість хвилин) в рядок у форматі годин та хвилин HH:MM.

// 70 покаже 01:10
// 450 покаже 07:30
// 1441 покаже 24:01

// const totalMinutes = 1441;
// const hours = Math.floor(totalMinutes / 60);
// const minutes = totalMinutes % 60;
// const result = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`
// console.log(result);



// Task - 3

// Виконай рефакторинг коду щоб уникнути помилок

// const name = 'Harry'
// const message = `Hello my name is ${name}`
// console.log(message);

// const delivery = 25;
// const price = 190;
// const message = `Total purchase, price ${delivery + price}`;

// console.log(message);

// Task - 4
// Виконай рефакторинг коду так, щоб у змінну value присвоювалося значення змінної incomingValue, якщо воно не рівне undefined або null. В іншому випадку має присвоюватися значення defaultValue. Перевір роботу скрипта для наступних значень змінної incomingValue: null, undefined, 0, false. Використовуй оператор ?? (nullish coalescing operator).

// const incomingValue = 0;
// const defaultValue = 10;
// const value = null ?? defaultValue;
// console.log(value);


// const KEY_AUTHORIZATION = 'qwerty111';
// console.log(KEY_AUTHORIZATION);
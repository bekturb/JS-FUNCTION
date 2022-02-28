
//Function


//Объявление функции

// function sayHello () {
//     console.log('Hello! Welcome to my Webpage!')
// }
// sayHello()


//Вызов функции

//
// sayHello()
// function sayHello () {
//     console.log('Hello! Welcome to my Webpage!')
// }
// sayHello()
// sayHello()
// sayHello()


// Параметры функции

// function sayHello (greeting){
//     console.log(greeting);
// }
//
// sayHello('HELLO! WELCOME TO MY WEBPAGE')
// sayHello('CАЛАМ! МЕНИН ВЕБ БАРАКЧАМА КОШ КЕЛИНИЗ!')
// sayHello('ПРИВЕТ!')

//Параметры по умолчанию

// function sayHello(greeting = "Привет") {
//     console.log(greeting);
// }
//
// sayHello();
// sayHello("Hello");
// sayHello("Hi");

//Пример функции складывающий 2 числа
//
// function calculateSum (num1, num2){
//     if (num1 && num2){
//         console.log(num1 + num2)
//     }else{
//         console.log("Функция вызвана без аргументов");
//     }
// }
//
// calculateSum(30,30);
// calculateSum(20);

//Возврат значения

// function calculateSum(num1, num2){
//     let sum = num1 + num2
//     return sum
// }
//
// console.log(calculateSum(20, 30));

// function sum(num1, num2) {
//     let sum = num1 + num2;
//
//     return sum;
// }
//
// function showSum(sum) {
//     console.log(`Сумма чисел: ${sum}`);
// }
//
// showSum(sum(30, 20));



//- **стрелочные функции**

//Объявление и вызов

// let calculateSum = (num1,num2) => {
//     return num1 + num2;
// }
//
// let message = (calculateSum) => {
//     console.log(`Сумма чисел: ${calculateSum}`)
// }
//
// message(calculateSum(20,30))


//Сокращенный синтаксис

// let sum = (num1, num2) => num1 + num2
// let message = (sum) => console.log(`Сумма чисел: ${sum}`);
//
// message(sum(20,30))



//- **рекурсия**

//Случай когда функция вызывает сама себя называется рекурсией

//Пример

// let potatoes = 20;
// function peelPotatoes (potatoes){
//     if (potatoes >= 1){
//         console.log(`I have peeled ${potatoes}-potatoes`);
//         potatoes--;
//         peelPotatoes(potatoes)
//     }
// }
// peelPotatoes(potatoes);


// exercise
//
// let userName = (name, surname, age ) =>{
//     return console.log(`Привет ${name} ${surname} с возрастом ${age}`);
// }
// userName('Bektursun', 'Baimamatov', 22)


// let weekDays = (day1,day2,day3,day4,day5,day6,day7) =>{
//     return (day1);
// }
// let messages = (weekDays) =>{
//     console.log(`Today is ${weekDays}`);
// }
// // messages(weekDays('Monday','Tuesday','Wednesday','Thursday','Friday','Sunday','Saturday'))
//
// let hour = prompt('Type your message!');
//
// let greeting = (name) =>{
//     return name;
// }
//
// let message = (greeting) =>{
//     if (hour  <= 12){
//         console.log(`Доброе утро ${greeting}`)
//     }else if (hour <= 18){
//         console.log(`Добрый день ${greeting}`)
//     }else if (hour <= 24){
//         console.log(`Добрый вечер ${greeting}`)
//     }else if (hour <= 6){
//         console.log(`Спокойной ночи ${greeting}`)
//     }else {
//         console.log('Hello')
//     }
// }
// message(greeting('Иван'))



// const num1 = (num) =>{
//     if (num < 0){
//         console.log(-1)
//     }else if(num > 0){
//         console.log(1)
//     }else if (num === 0){
//         console.log(0)
//     }else{
//         console.log('Myndai san jok')
//     }
// }
//
// num1(-2)

// function num (s,w){
//     if (s.length >= w){
//         return s;
//     }else{
//         let space = Math.floor((w - s.length) / 2);
//         return '-'.repeat(space) + s + '-'.repeat(space)
//     }
// }
//
// console.log(num('hello',20))
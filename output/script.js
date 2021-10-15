import { Player } from './classes/Player.js';
//variable declare
//jodi type chara vari declare + assign(string) kori , next e onno kono type er varibale assign kora jabe na(number)
//jodi type chara shudhu declare kore rakhi  , next e je kono type assign kora jabe
//jodi type shoho(number/string/boolean/object) declare kori (assign jodi na korao thake) , next e seta je type e declare kora hoyechilo setai assign korte hobe, nahole error khabe
var name1;
name1 = 234;
console.log(name1);
// *********
//type union
//jodi ei vabe declare kora hoy tahole variable je je type deya hoyeche sob gulo assign kora jabe
var random;
random = true;
console.log(random);
//*********** */
//Object
//object e je je  property add korbo, next e oi property er bahire kono property add kora jabe na
var player = {
    name: 'Sakib',
    age: 35,
    type: 'All-rounder',
};
//example
//player.avg = 45.5
console.log(player.name);
/******* */
//Array
//Array te jodi number/string/object/boolean diye assign kora hoy value, then sekhane oi proper type value e push kora jabe na
var myArray = [1, 2, 3, 4];
// myArray.push('apple');
myArray.push(100);
console.log(myArray);
//jodi declare + assign korar somoy all type er value add kori , je je type assign korbo next e oi type er value push kora jbe
var myArray2 = [12, 'iraz', true];
myArray2.push(false);
myArray2.push(11);
myArray2.push('ramin');
console.log(myArray2);
/******** */
//Function
//by default function void return kore , jodi amra function er type bole dei tahole oi specific type return korte hobe
var sendNumbers = function (num1, num2) {
    return num1 + num2;
};
console.log(sendNumbers(100, 200));
var userDetails = function (userId, user) {
    console.log("Hello this is " + user.name + " , i am " + user.age + " years old. My id is " + userId);
};
userDetails(111, { name: 'Iraz', age: 21 });
//Function Signature
//basically function signature holo function er stucture kmn hobe oita bole deya, like argument koto gula hobe , argument type ki hobe, return type ki hobe. and jodi amra oi stucture follow kore function banate chai , same name  dite hobe , argument sob gulo dite hobe, type re turn korte hobe. Function likhar somoy argument name change gole somossa nei , kintu object er property name change hole error pauya jabe
//Function Signature
var add;
//function body
add = function (id, userDetails, chk) {
    if (chk) {
        console.log("Id : " + id + " Name : " + userDetails.name + " Age : " + userDetails.age);
    }
    else {
        console.log('Not Match');
    }
};
//function call
add(1, { name: 'Iraz ', age: 21 }, false);
//Class
//create instance of Player Class
var mashrafi = new Player('Mash', 37, 'Bangladesh');
var sakib = new Player('Sakib', 35, 'Bangladesh');
//IsPlayer ekta inferface , sekhane sob method variable likha thake , jeta follow kore amra class banate pari, jehetu follow kore class banate pari tai reference hishebe IsPlayer deya hoyeche.
var players = [];
players.push(sakib);
players.push(mashrafi);
mashrafi.play();
//getter method use kore private variable access kora jay
console.log(sakib.getAgeProperty());

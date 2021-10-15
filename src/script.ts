import { Player } from './classes/Player.js';
import { Isplayer } from './interface/IsPlayer.js';

//variable declare

//jodi type chara vari declare + assign(string) kori , next e onno kono type er varibale assign kora jabe na(number)

//jodi type chara shudhu declare kore rakhi  , next e je kono type assign kora jabe

//jodi type shoho(number/string/boolean/object) declare kori (assign jodi na korao thake) , next e seta je type e declare kora hoyechilo setai assign korte hobe, nahole error khabe
let name1: number;
name1 = 234;
console.log(name1);
// *********

//type union
//jodi ei vabe declare kora hoy tahole variable je je type deya hoyeche sob gulo assign kora jabe
let random: number | string | boolean;
random = true;
console.log(random);
//*********** */

//Object
//object e je je  property add korbo, next e oi property er bahire kono property add kora jabe na
let player = {
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
let myArray = [1, 2, 3, 4];

// myArray.push('apple');
myArray.push(100);

console.log(myArray);

//jodi declare + assign korar somoy all type er value add kori , je je type assign korbo next e oi type er value push kora jbe
let myArray2 = [12, 'iraz', true];

myArray2.push(false);
myArray2.push(11);
myArray2.push('ramin');
console.log(myArray2);

/******** */
//Function
//by default function void return kore , jodi amra function er type bole dei tahole oi specific type return korte hobe
const sendNumbers = (num1: number, num2: number): number => {
  return num1 + num2;
};

console.log(sendNumbers(100, 200));

//type Aliases
//aliases use kora hoy type gula ke variable e store kore rakhar jonno, jate oi same type gulo different jaygay use korte pari
type numberOrString = number | string;
type userType = { name: string; age: number };

let userDetails = (userId: numberOrString, user: userType) => {
  console.log(
    `Hello this is ${user.name} , i am ${user.age} years old. My id is ${userId}`
  );
};

userDetails(111, { name: 'Iraz', age: 21 });

//Function Signature
//basically function signature holo function er stucture kmn hobe oita bole deya, like argument koto gula hobe , argument type ki hobe, return type ki hobe. and jodi amra oi stucture follow kore function banate chai , same name  dite hobe , argument sob gulo dite hobe, type re turn korte hobe. Function likhar somoy argument name change gole somossa nei , kintu object er property name change hole error pauya jabe

//Function Signature
let add: (
  id: number | string,
  userDetails: {
    name: string;
    age: number;
  },
  chk: boolean
) => void;

//function body
add = (
  id: number | string,
  userDetails: { name: string; age: number },
  chk: boolean
) => {
  if (chk) {
    console.log(
      `Id : ${id} Name : ${userDetails.name} Age : ${userDetails.age}`
    );
  } else {
    console.log('Not Match');
  }
};

//function call
add(1, { name: 'Iraz ', age: 21 }, false);
//Class

//create instance of Player Class
const mashrafi = new Player('Mash', 37, 'Bangladesh');
const sakib = new Player('Sakib', 35, 'Bangladesh');

//IsPlayer ekta inferface , sekhane sob method variable likha thake , jeta follow kore amra class banate pari, jehetu follow kore class banate pari tai reference hishebe IsPlayer deya hoyeche.
const players: Isplayer[] = [];
players.push(sakib);
players.push(mashrafi);
mashrafi.play();
//getter method use kore private variable access kora jay
console.log(sakib.getAgeProperty());

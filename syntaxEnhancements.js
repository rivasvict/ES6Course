'use strict';
//------------------------------ Const and let

/*
 * When using const ask yoourself if a variable will ever change
 * for changing variables use let for not changing variables use const
 */

// ES5
//
// var name = 'Victor'
// var title = 'Developer'
// var hourlyWage = 40
//
// ES6 versopn
//
// name variable should never change so we use const

const name = 'Victor';

// Title is likely to change in the future so we use let

let title = 'Developer';

// hourlyWage is also likely to change so we use let

let hourlyWage = '40';

//------------------------------ String concatenation

let testTest = 'test';

// To use string concatenation in es 6 use `` and the form ${javascript expression}
console.log(`This is just a ${testTest}`);
//it reproduces: This is just a test

console.log(`this is just a simple sum of 2 + 2: ${2+2}`);
//this is just a simple sum of 2 + 2: 4

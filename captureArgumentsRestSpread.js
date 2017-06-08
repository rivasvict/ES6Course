// Rest-------------------------------

// In Es5 we had to receive an array to be able to make the number of arguments a variable (that receives any
// quantity of arguments)
//function addNumumbers(numbers) {

// In Es6 ... take whatever quantity of arguments you want to receive and turn them into an array
// Inside the function it acts just as an array assigned to the parameter name you have assigned
// in this case it would be numbers
function addNumumbers(...numbers) {
  return numbers.reduce((sum, number) => sum + number, 0);
}

// Old way to call the function
//console.log(addNumumbers([1,2,3,4,5]));

// New way to call the function
console.log(addNumumbers(1,2,3,4,5));

// Spread-------------------------------

const defaultColors = ['blue', 'red', 'black'];
const favoriteColors = ['yellow', 'brown', 'green'];
const extraColors = ['gray', 'violet', 'orange'];

// In order to concatenate these three arrays (in Es5) we use .concat function
// That is available in every array.

console.log(defaultColors.concat(favoriteColors).concat(extraColors));

// This was an uggly way to show it
//
//
// Es6 comes to help making it a bit clearer by using Spread operator

console.log([...defaultColors, ...favoriteColors, ...extraColors]);
// And even if I want to preped or add more colors, I can simply put them into this array as you see below
console.log(['light blue', ...defaultColors, ...favoriteColors, ...extraColors, 'pink']);
// And even if I want one of those arrays to be represented as sub arrays I can just take ... (spread) operator off
console.log(['light blue', ...defaultColors, favoriteColors, ...extraColors, 'pink']);



// A practical example combining Rest and Spread operators-----------------------
function validateShoppingList(...items) {
  if (items.indexOf('milk') < 0) {
    // Concatenates milk to items array comming from Rest operator up on the argument list of this function
    return ['milk', ...items];
  }

  return items;
}

console.log(validateShoppingList('oranges', 'bread', 'eggs'));


// Another practical example

// To receive any quantity of arguments and pass them out as arguments with Rest nad Spread
const MathLibrary = {
  // If we want to deprecate calculateProduct, we would create
  // the new function alongside just to keep backwards compatibility
  // Old way:
  //calculateProduct(a, b) {
  //New way
  calculateProduct(...numbers) {
    console.log('This mathod os deprecated, please use multiplyNumbers instead');
    // Old wat:
    //return multiplyNumbers(a, b);
    // New way
    return this.multiplyNumbers(...numbers);
  },
  multiplyNumbers(a, b) {
    return a * b;
  }
}

console.log(MathLibrary.multiplyNumbers(2,2));
console.log(MathLibrary.calculateProduct(2, 2));

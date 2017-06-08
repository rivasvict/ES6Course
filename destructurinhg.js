// DESTRUCTURING OBJECTS
//
// The action of extracting values of an object into separated variables

const expense = {
  business: '$40 USD',
  type: 'star wars'
};

// With ES5 you would normally create simple variables referencing the
// object with a dot notation like object.property. Look at the example below

//var business = expense.business;
//var type = expense.type;

// In ES6 whnever we have the case where the new declared variable name is
// equals than the name of the property to extract from the given object,
// we can use { variableNameNotation } and delete the object property name
// at the right side of the variable declaration and even if we would like 
// to exctract mothe than one variaable under the same naming situuation, 
// we can add it inside the brakets separated by comma like:
// { myVarOne, myVarTwo, ..., myVarN } Obviously the object should have those
// properties named exactly the same as thevariable name you will declare.
// example:

// Individual declaration:

//const { type } = expense;
//const { business } = expense;

// Multiple declarations in a single line:

const { type, business } = expense;

console.log(type);
console.log(business);

// Destructuring on functions--------------------------------------------------

const house = {
  color: 'yellow',
  size: 'big',
  address: 'Venezuela'
};

// Destructuring with ES5
/*const houseRead = (house, planet) => {
  return `the ${house.color} ${house.size} is the biggest house in ${house.address} at the ${planet.color} planet ${planet.name}`;
}*/

// Destructuring with ES6

const houseRead = ({ color, size, address }, { tone, name }) => `the ${color} ${size} is the biggest house in ${address} at the ${tone} planet ${name}`;

// Note the variable name and the property match

console.log(houseRead(house, { tone: 'blue', name: 'Earth' }));

// DESTRUCTURING ARRAYS
//
// When we destructure objects we pull off properties while destructuring arraays
// is about pulling of single elements, for this one we use [] and even in this case,
// we can use even {} to acccess arrays properties like length { length }

const companies = [
  'Google',
  'Facebook',
  'Uber'
]

const [ company1, company2, company3 ] = companies;
const { length } = companies;

console.log(company1);
console.log(company2);
console.log(company3);
console.log(length);

// We can even use rest operator combined with destructuring like:
// const [ company1, ...rest ] = companies
// this will let you end the declaration of elements that were not declared yet
// (it will finish the job)



// DESTRUCTURING ARRAYS AND OBJECTS AT THE SAME TIME

const companiesTwo = [
  { name: 'Google', location: 'Mountain view' },
  { name: 'Facebook', location: 'Menlo Park' },
  { name: 'Uber', location: 'San Francisco' }
];

let [ { location }, ...rest ] = companiesTwo;

console.log(rest);
console.log(location);

const Gooogle = {
  location: ['Mountain view', 'New York', 'London']
}

//let { location [ googleLocation ] } = Google;
//console.log(googleLocation);

// Destructuring in practice (objects) ---------------------------------------------------------

// When having multiple arguments needed to be sent to a function, it is recommended that
// you send an object instead of multiple arguments that respond to an specific order
// You can deconstruct the object sent to the function and thhe call will not be aware of
// the order, example

const signup = ({ name, username, password }) => {
}

const user = {
  password: '123456',
  user: 'myuser',
  name: 'myname'
}

signup(user)

// Destructuring in practice (array) ------------------------------------------------------------

// 
//


// Transform points to formatedPoints
const points = [
  [4, 5],
  [11, 3],
  [23, 89]
]

/*const formatedPoints = [
  { x: 4, y: 5 },
  { x: 11, y: 3 },
  { x: 23, y: 89}
]*/

// Simple implementation ES6
let formatedPoints = points.map(([ x, y ]) => { return {x, y} });

console.log(formatedPoints);


// EXERCISE---------------------------------------------------------------------------------

/*const numbers = [1, 2, 3];

let doubled = [];

const double = (number, rest) => {
  if (number) {
    doubled.push(number * 2);
    [first, ...newRest] = rest;
    return double(first, newRest);
  } else {
    return doubled;
  }
};

[ number, ...rest] = numbers;

console.log(double(number, rest));*/
const numbers = [1, 2, 3];

const double = (numbers) => {
  let [ first, ...rest ] = numbers;
  if (first && (typeof first === 'number')) {
    first = first * 2;
    return double([ [ first ], rest ]);
  } else {
    let [ previous , restOfNumbers ] = numbers;
    let [ newFirst, ...restOfRest ] = restOfNumbers;
    newFirst = newFirst * 2;
    if (restOfRest.length) {
      return double([[ ...previous, newFirst ], restOfRest ]);
    } else {
      return [ ...previous, newFirst ];
    }
  }
};

console.log(double(numbers));

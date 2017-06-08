//------------------------------Arrow functions

//------------------------------Fat arrow functions
// Conventional and generic way to use

/*const add = (a, b) => {
  return a + b;
}*/




// If you jave just ONE javascript expression inside the
// curly braces and it is a return statemt, you could 
// simply do as is done in the example bellow:

//const add = (a, b) => a + b;

// This is an implicit return of a function by removing the
// curly braces and remove the return key;


// The last two types of arrow functions reproduce an ES5
// function form as:

/*const add = function(a, b) {
  return a + b;
}*/

//console.log(add(1,2));





//----- Delete parentheses for single anrguments

// If we have a function with one line on the in the body,
// it is a return statement and it has just ONE argument
// you can also remove the parentheses of the declaration
// ending like this:

const double = number => 2 * number;

//console.log(double(4));




//----- On no arguments keep parentheses

const triple = () => 2 * 3;

//console.log(triple());





//------ Anonymous functions

let numbers = [1,2,3];

console.log(numbers.map(number => number * 2));
// This is the same as
// console.log(fucntion(number) {
//  return number * @;
// });


//------- the intention behind arrow functions REPLACEMENT IF bind(this) (lexical this)
/*const team = {
  members: ['Jqane', 'Bill'],
  teamName: 'Super Squad',
  teamSummary: function() {
    return this.members.map(function(member) {
      return `${member} is part of the team ${this.teamName}`;
    }.bind(this));
  }
}*/

const team = {
  members: ['Jane', 'Bill'],
  teamName: 'Super Squad',
  teamSummary: function() {
    return this.members.map((member) => {
      // With the use of fat arrow functions we do not need to pass the context to this fucntion as in the previous function
      // this === team because of fat arrow function, this is called lexical this
      return `${member} is part of the team ${this.teamName}`;
    });
  }
}

console.log(team.teamSummary());

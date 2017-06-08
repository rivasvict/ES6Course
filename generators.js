'use-strict';
// GENERATORS
//
//
// Quick note on for of loops (useful for generators) 
const colors = ['red', 'blue', 'white', 'orange'];

for (let color of colors) {
  console.log(color);
}

const numbers = [1 ,2 ,3 ,4];

let total = 0;

for (let number of numbers) {
  total += number;
}

console.log(total);


// Now generators --------------------------------------------
//
// Generators will let generate a new set of properties from choosed ones and
// iterate throgh them by means of for of loop
//
// Plain english definition (not main one): Generators will teach objects how to respond to for of loops

// A practical example of generator

function* shopping() {
  // Stuff oon the sidewalk
  //
  // Walking down the sidewalk
  //
  // Go into the store with cash
  const stuffFromStore = yield 'cash';  // In this step, we are yielding (returning) 'cash' and assigning the input
                                        // of next() second call (gen.next('groceries')) to stuffFromStore

  // Walking back home
  
  return stuffFromStore; // Return the value we assigned when we called next() at the second time
}

// Stuff outside the store
const gen = shopping(); // We initialize the generator
gen.next() // Leaving our house             // FIRST next() execution
gen.next('groceries') // Leaving the store  //SECOND next() execution // In here we get the returning value of the
                                                                      // Generator (return stuffFromStore)

// NOTE: Use yield to pause and resume with next() function calls

// ------------------------


// Generators delegation ---------------
// To iterate over nested objects with only one shot


console.log('--------------generators delegation-----------------');

const administrationTeam = {
  humanResources: 'Marta',
  secretary: 'Bruno'
};

const engineeringTeam = {
  administrationTeam,
  lead: 'Victor',
  testing: 'Rodrigo',
  development: 'Carlos'
};

//  Generators syntax need an asterisc after the keyword function like
//  function*
//
//  Yield keyword will stop the code execution at that point and return the yielded value
console.log('--Simple generator delegation--');
function* engineeringTeamIterator(team) {
  console.log('=administrationTeam=');
  yield team.lead;
  yield team.testing;
  yield team.development;
  const administrationTeamGenerator = administrationTeamIterator(team.administrationTeam);
  // With this Second iterator here, in order to be delegated (meaning that this engineeringTeamIterator iterator
  // will go throug the nested object), we yield the generator (administrationTeamGenerator) with an asterisk as shown
  // bellow
  console.log('=administrationTeam=');
  yield* administrationTeamGenerator;
}

function* administrationTeamIterator(adminTeam) {
  yield adminTeam.humanResources;
  yield adminTeam.secretary;
}

const engineeringMembers = engineeringTeamIterator(engineeringTeam);

/*
 * Everytime we use engineeringMembers.next(), it will go to the next yield statement
 * console.log(engineeringMembers.next());
console.log(engineeringMembers.next());
console.log(engineeringMembers.next());
console.log(engineeringMembers.next());*/


// The for of loop made generated engineeringMembers to be readable (as member variable iin this case)
for (let member of engineeringMembers) {
  console.log(member);
}





// Symbol.iterator

console.log('--Symbol.iterator delegation--');
const administrationTeamS = {
  humanResources: 'Marta',
  secretary: 'Bruno',
  // This si a new ES6 syntax element [Symbol.iterator] it will help us to define this object's generator behavior.
  // Whenever we call this object inside another generator with prepended yield*, it wil automatically point to
  // this generator function
  [Symbol.iterator]: function*() {
    yield this.humanResources;
    yield this.secretary
  }
};

const engineeringTeamS = {
  administrationTeamS,
  lead: 'Victor',
  testing: 'Rodrigo',
  development: 'Carlos',
  [Symbol.iterator]: function*() {
    console.log('=administrationTeamS=');
    yield this.lead;
    yield this.testing;
    yield this.development;
    // This commented line below is meant to be deleted but left comented by intention to see what was there
    //const administrationTeamGenerator = administrationTeamIteratorS(team.administrationTeamS);
    console.log('=administrationTeamS=');
    // This commented line below is meant to be deleted but left comented by intention to see what was there
    //yield* administrationTeamGenerator;


    // Instead of the two lines we had before (that are now commented above) we just need to call the
    // team.administrationTeamS's iterator by means of the * at the yield (indicating that this is a generator)
    // and using the team.administrationTeamS (given that we used Symbol.iterator up in administrationTeamS definition,
    // this one will point to that generator, this si good to teach an object how to use a generator and iterate itself)
    yield* this.administrationTeamS;
  }
};

// This generator is not needed anymore, given that we are using a Symbol.iterator] inside the administrationTeamS
// object up in its definition
//
// Again, this code bellow will be intentionally commented but it is meant to be deleted 
/*function* engineeringTeamIteratorS(team) {
  console.log('=administrationTeamS=');
  yield team.lead;
  yield team.testing;
  yield team.development;
  // This commented line below is meant to be deleted but left comented by intention to see what was there
  //const administrationTeamGenerator = administrationTeamIteratorS(team.administrationTeamS);
  console.log('=administrationTeamS=');
  // This commented line below is meant to be deleted but left comented by intention to see what was there
  //yield* administrationTeamGenerator;


  // Instead of the two lines we had before (that are now commented above) we just need to call the
  // team.administrationTeamS's iterator by means of the * at the yield (indicating that this is a generator)
  // and using the team.administrationTeamS (given that we used Symbol.iterator up in administrationTeamS definition,
  // this one will point to that generator, this si good to teach an object how to use a generator and iterate itself)
  yield* team.administrationTeamS;
}*/

// This generator is not needed anymore, given that we are using a Symbol.iterator] inside the administrationTeamS
// object up in its definition
//
// Again, this code bellow will be intentionally commented but it is meant to be deleted 
/*function* administrationTeamIteratorS(adminTeam) {
  yield adminTeam.humanResources;
  yield adminTeam.secretary;
}*/

// The call of this generator changes in ordr to meet the new way of calling generators
//
// Again, this code bellow will be intentionally commented but it is meant to be deleted 
//const engineeringMembersS = engineeringTeamIteratorS(engineeringTeamS);

// For of loop will try to look for [Symbor.iterator] so we can directly iterate over the object without initializating
// the generator as we did above
//
// We replace this line:
// for (let member of engineeringMembersS) {
// By this one:
for (let member of engineeringTeamS) {
  console.log(member);
}

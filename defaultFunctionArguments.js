'use-strict';
// Old function declaration without default parameters
//let makeAjaxRequest = (url, method) => {

// New way to deplare functions including default paarmeters
let makeAjaxRequest = (url, method = 'GET') => {
  /*
   * Es5 way to check default arguments,
   * if no method is passed to the function, it assumes
   * it is GET by default
   *
  if (!method) {
    method = 'GET';
  }
  */

  return {
    url,
    method
  }
}

console.log(makeAjaxRequest('google.com'));
console.log(makeAjaxRequest('google.com', 'POST'));
// If you want ton force the default value to be undefined, use null when calling the function on the parameter.
// When we pass undefined, it will understand it as it was not there and therefore it selects the default value
console.log(makeAjaxRequest('google.com', null));

//-------------------

function User(id) {
  this.id = id;
}

function generateId() {
  return Math.random() * 9999999;
}

function createAdminUser(user = new User(generateId())) {
  user.admin = true;

  return user;
}

console.log(createAdminUser());
const victorUser = new User(3025776.1276236327);
console.log(createAdminUser(victorUser));

// As you see here this is useful for even nott having to go thought the dependency of having an user

// -------------------- FETCH HELPER -----------------------
//
// It is useful for making requests to an external resource
// It comes back as a promise
// 
// To access the data that comes from fetch , we need to use .json on the response

const url = 'https://jsonplaceholder.typicode.com/posts/';

fetch(url)
  .then(data => console.log(data.json()))


// catch will not work on errors different than non-resolved urls.
//
// The only way to see errors is by looking at the response on the then statement

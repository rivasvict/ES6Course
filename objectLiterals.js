//------------

const createInventory = inventory => {
  return {
    //ES5 - Identical name
    //inventory: inventory,
    //We can just write the only name of the property alone
    inventory,

    // Whenever we have a key-par withn a function loke this
    //inventoryValue: function() {
    // We can omit the coloms and omit the function keyword like so:
    inventoryValue() {
      return this.inventory.reduce((total, book) => total + book.price, 0);
    },
    // Whenever we have a key-par withn a function loke this
    //priceForTitle: function(name) {
    // We can omit the coloms and omit the function keyword like so:
    priceForTitle(name) {
      return this.inventory.find(book => book.name === name).price;
    }
  }
}

let inventory = [
  { name: 'Harry Potter', price: 10 },
  { name: 'Eloquent Javascript', price: 15 }
];

const bookShelf = createInventory(inventory);
console.log(bookShelf.inventoryValue());
console.log(bookShelf.priceForTitle('Harry Potter'));

/*
 * General recomendation:
 * try to put the one key values first than key par values
 * {one, two, thisIsThree: 'another value'}
 */

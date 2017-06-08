// CLASSES

// ES5 cprototypal inheritance

function Car({ title }) {
  this.title = title;
}

Car.prototype.drive = () => 'run';

const car = new Car({
  title: 'Focus'
});

console.log(car.drive());

// If we have a subclass of Car in ES5 we would do:

function Toyota({ color, title }) {
  this.color = color;
  // For prototypal inheritance you need to call the parent property
  Car.call(this, { title });
}

// Prototypal inheritance
// Inherit methods from Car class
Toyota.prototype = Object.create(Car.prototype);
// Override the constructor over the Toyota prototype
Toyota.prototype.constructor = Toyota;

Toyota.prototype.honk = () => 'beep';

const corolla = new Toyota({
  color: 'blue',
  title: 'Reackess driver'
});

console.log(corolla);
console.log(corolla.honk());
console.log(corolla.drive());
console.log('-----------');

// ES6 Classes------------------------------------------------------

class Building  {
  constructor({ title }) {
    this.title = title;
  }

  live() {
    return 'you live here';
  }
}

const house = new Building({ title: 'Nice house' });
console.log(house.live());
console.log(house);

class Office extends Building {
  constructor({ color, title }) {
    // To execute partent's constructor use super() like so:
    super({ title }); // Car.constructor(); // Remember to send the required properties of parent's constructor
    this.color = color;
  }

  getSize() {
    // If we had a getSize method in Car class to be executed here, we should use super() to refeer to it in the parennt class
    return 'this is a big house';
  }
}

var myOffice = new Office({
  title: 'Nice office',
  color: 'Orange'
});

console.log(myOffice);
console.log(myOffice.live());
console.log(myOffice.getSize());

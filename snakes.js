class Monster {
    constructor(options) {
          this.health = 100;
          this.name = options.name;
        }
    
    decreaseHealthOnBite(snake = this) {
          snake.health = snake.health - 10;
        }
}

class Snake extends Monster {
      constructor({ name }) {
                super({ name });
            }
      
      bite(anotherSnake) {
                anotherSnake = this.decreaseHealthOnBite(anotherSnake);
                return anotherSnake;
            }
      
      doubleBite(anotherSnake) {
                anotherSnake = this.bite(anotherSnake);
                return anotherSnake;
            }
}

let snake1 = new Snake({
      name: 'Roberto'
});
let snake2 = new Snake({
      name: 'Fibby'
});

snake1.bite(snake2);
console.log(snake2.health);
snake1.doubleBite(snake2);
console.log(snake2.health);

/*
 * All array helpers MUST have return key included to return the transformed value
*/

function mapArrayHelper() {
  var colors = ['Red','Blue','Green'];

  // forEach helper runs over all elements of a collection
  colors.forEach(function(color) {
    //console.log(color);
  });

  var numbers = [1,2,3,4,5];
  var sum = 0;

  numbers.map(function(number) {
    sum += number;
  });

  //map function creates a new array with modified elements
  var newColors = colors.map(function(color) {
    return color + ' a test';
  })
}

//---------------------------- Every and some

function everyAndSomeHelper () {
  function Field(value) {
    this.value = value;
  }

  Field.prototype.validate = function() {
    return this.value.length > 0;
  }

  var passwrod = new Field('123456');
  var name = new Field('Victor');
  var lastName = new Field('Rivas');
  var birthDate = new Field('09/04/2017');

  var fields = [passwrod, name, lastName, birthDate];

  var validateResult = fields.every(function(field) {
    return field.validate();
  });

  //console.log(validateResult);
}

//--------------------------- Reduce helper

function reduceHelper() {

  //---------------------- Basic use
  var numbers = [10, 20, 30];

  var sum = numbers.reduce(function(sum, number) {
    return sum + number;
  }, 0);

  /*
   * array.reduce(function(memo, current) {
   *  //Reduce heper logic here
   * }, initialValue);
  */

  //console.log(sum);
  
  //----------------------- Another example
  var primaryColors = [
    {color: 'red'},
    {color: 'yellow'},
    {color: 'blue'}
  ];

  var primaryColorsArray = primaryColors.reduce(function(colorsArray, primaryColor) {
    colorsArray.push(primaryColor.color);

    return colorsArray;
  }, []);

  //console.log(primaryColorsArray);

  // Parentheses balancing practice
  
  function isBalanced(parentheses) {
    var parenthesesCounter = parentheses.split('').reduce(function(previous, char) {
      if (char === '(') {
        previous++;
      } else {
        previous--;
      }

      return previous;
    }, 0);

    return parenthesesCounter === 0;
  }

  console.log(isBalanced('())'));
}

reduceHelper();

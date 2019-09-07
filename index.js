var fs = require('fs');
console.log(fs);

/**
 * A variable in the global namespace.
 * Array of N objects, each object is a person
 * containing a first name, last name, age, and gender
 *
 * @var {array} people
 * @example [{fistsName: "Bob", lastName: "Larry", age : 45, gender : "M"}]
 */

var people = [
  {
    firstName: 'Michael',
    lastName: 'Learo',
    age: 34,
    gender: 'M'
  }
];

console.log(people[0].name);

/**
 * This is a function.
 *
 * @param {string} a - A string param
 * @return {string} A good string
 *
 * @example
 *
 *     foo('hello')
 */

function foo(a) {
  return a;
}

foo('hello world');

/**
 * @type {number}
 */
var FOO = 1;
console.log(FOO);
/**
 * @const {number}
 */
const ZOO = 1;
console.log(ZOO);

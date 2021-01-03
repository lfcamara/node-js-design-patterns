/* Ao invés de utilizar as classes diretamente, usaremos apenas a Factory
var Shopper = require('./Shopper');
var Employee = require('./Employee'); */

var userFactory = require('./userFactory');

var alex = userFactory('Alex Banks', 100);
var eve = userFactory('Eve Porcello', 100, 'employee','This and That');

// Podemos chamar o metodo exclusivo de Employee
eve.payDay(100);

console.log( alex.toString() )
console.log( eve.toString() )

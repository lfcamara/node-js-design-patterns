const Person = require('./Person');
var PersonBuilder = require('./PersonBuilder')

/* Quando temos um construtor com muitos argumentos, a montagem do objeto se torna confusa

Employees

var sue = new Person('Sue', true, true, 60);
var bill = new Person('Bill', true, false, 20);
var phil = new Person('Phil', true, false);

Shoppers

var charles = new Person('Charles', false, false, 0, 500, ['jeans', 'sunglasses']);
var tabbitha = new Person('Tabbitha', false, false, 0, 1000); */

// Mesma criação de instancias, mas usando o padrao Builder

// Employees

var sue = new PersonBuilder('Sue').makeEmployee().makeManager(60).build();
var bill = new PersonBuilder('Bill').makeEmployee().makePartTime().build();
var phil = new PersonBuilder('Phil').makeEmployee().build();

// Shoppers

var charles = new PersonBuilder('Charles').withMoney(500).withList(['jeans', 'sunglasses']).build();
var tabbitha = new PersonBuilder('Tabbitha').withMoney(1000).build();

// Teste

console.log(sue.toString());
console.log(charles.toString());
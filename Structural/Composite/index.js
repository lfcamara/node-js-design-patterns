var CatalogItem = require('./CatalogItem');
var CatalogGroup = require('./CatalogGroup');

var boots = new CatalogItem("Leather Boots", 79.99);
var sneakers = new CatalogItem("Kicks", 39.99);
var flipFlops = new CatalogItem("California work boots", 19.99);

//Devera ser permitido realizar os metodos individuais também para o grupo:
var group_shoes = new CatalogGroup("Shoes and Such", [boots, sneakers, flipFlops]);
var group_food = new CatalogGroup("Food", [
  new CatalogItem("Milkshake", 5.99),
  new CatalogItem("French Fries", 3.99)
]);

var keychain = new CatalogItem("Key Chain", .99);

// Como tratamos items e agrupamentos uniformemente, nos permite compor estrutras de arvore
var catalog = new CatalogGroup("Clothes and Food", [keychain, group_shoes, group_food]);

console.log(`$${catalog.total}`)
catalog.print();

/* console.log( 'boots total: ', `$${boots.total}` );
// Aqui
console.log( 'shoes total: ', `$${group_shoes.total}` );

boots.print();
sneakers.print();

// Aqui
group_shoes.print(); */

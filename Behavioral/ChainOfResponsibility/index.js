var Store = require('./Store');
var inventory = require('./inventory');


/* Antes apenas com o floor:
var skiShop = new Store('Steep and Deep', inventory.floor); */

// Devemos enviar todo o inventory e não apenas os itens que estão no floor
var skiShop = new Store('Steep and Deep', inventory);

/* A Store possui diversos locais, como mostra o arquivo json
  Nesse caso, se procurarmos por ski pole, teremos como resultado um undefined, visto que
  a Store só está buscando em floor. O Chain of Responsibility será usado para melhorar o
  método de busca da Store */

var searchItem = 'ski poles';
var results = skiShop.find(searchItem);

console.log( results );

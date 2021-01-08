var Storage = require('./Storage');

class Store {

    constructor(name, inventory=[]) {
        this.name = name;
        /* Nao iremos setar um invetory para a Store, e sim varios locais de armazenamento
        (Storage)
        this.inventory = inventory; */

        var floor = new Storage('store floor', inventory.floor);
        var backroom = new Storage('store backroom', inventory.backroom);
        
        // Simulamos para que nos casos abaixo, a procura pelo item demore mais tempo
        var localStore = new Storage('nearby store', inventory.localStore, 1);
        var warehouse = new Storage('warehouse', inventory.warehouse, 5);

        // Caso o item nao seja encontrado, passar para o proximo nivel
        floor.setNext(backroom);
        backroom.setNext(localStore);
        localStore.setNext(warehouse);

        this.storage = floor; // Local de armazenamento da Store em questao
    }

    find(itemName) {
        /* Find inicial -> Iremos buscar alem, em algum Storage
        var index = this.inventory.map(item => item.name).indexOf(itemName);
        return this.inventory[index]; */
        return this.storage.find(itemName);
    }

}

module.exports = Store;

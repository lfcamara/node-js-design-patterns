class InventoryItem {

    constructor(name, price) {
        this.name = name
        this.price = price
    }

    print() {
        console.log(`${item.name} costs ${item.price}`)
    }

}

//Decorators nao precisam ter a mesma interface. Customizacoes podem ser adicionadas

class GoldenInventoryItem {

    constructor(baseItem) {
        this.name = `Golden ${baseItem.name}`;
        this.price = 1000 + baseItem.price;
    }

}

class DiamondInventoryItem {

    constructor(baseItem) {
        this.name = `Diamond ${baseItem.name}`;
        this.price = 1000 + baseItem.price;
        this.cutsGlass = true;
    }

    print() {
        console.log(`${this.name} costs a lot of money`);
    }

}

module.exports = { InventoryItem, GoldenInventoryItem, DiamondInventoryItem };

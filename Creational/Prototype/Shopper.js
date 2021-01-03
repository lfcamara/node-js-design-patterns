class Shopper {

    constructor(name='unnamed person') {
        this._name = name;
        this._shoppingList = [];
    }

    set name(value) {
        this._name = value;
    }

    get name() {
        return this._name;
    }

    get shoppingList() {
        return this._shoppingList.join(', ');
    }

    addItemToList(item) {
        this._shoppingList.push(item);
    }

    // Implementação do método clone para uso do Prototype
    clone() {
        // Clona os metodos do objeto corrente
        var proto = Object.getPrototypeOf(this);
        var cloned = Object.create(proto);

        // Clona os valores
        cloned._name = this._name;
        cloned._shoppingList = [...this._shoppingList];

        return cloned;
    }

}

module.exports = Shopper;

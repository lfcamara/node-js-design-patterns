// Adaptar o localStorage para salvar valores em um documento JSON

var { writeFile, existsSync, readFileSync, unlink } = require('fs');

class LocalStorage {
//Devemos prover a mesma interface que já é utilizada

  constructor() {
    if (existsSync('localStorage.json')) {
      console.log('Loading items from localStorage.json');
      var txt = readFileSync('localStorage.json');
      this.items = JSON.parse(txt);
    } else {
      this.items = {};
    }
  }

  get length() {
    return Object.keys(this.items).length;
  }

  getItem(key) {
    return this.items[key];
  }

  setItem(key, value) {
    this.items[key] = value;
    writeFile('localStorage.json', JSON.stringify(this.items), error => {
      if (error) {
        console.error(error);
      }
    })
  }

  clear() {
    this.items = {};
    unlink('localStorage.json', () => {
      console.log('File removed');
    })
  }

}

module.exports = new LocalStorage();
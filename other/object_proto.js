var fruit = {
  name: 'banana',
  size: 'large'
};

function Banana(name, size) {
  self = this
  self.name = name,
  self.size = size
};

var banana = new Banana(fruit.name, fruit.size)

Banana.prototype.peel = function() {
  console.log('Ready to be eaten!');
}

console.log('obj proto:', fruit.__proto__);
console.log('function proto:', banana.__proto__);
console.log('function proto 2x:', banana.__proto__.__proto__);
// console.log(banana.constructor);

class Chuck {
  constructor() {
    this.name = 'Chuck';
  }
}

var norris = new Chuck();
console.log('class proto:', norris.__proto__)
console.log('class proto 2x:', norris.__proto__.__proto__)

var array = new Array();
var arr = [];

console.log('array proto === arr proto: ', array.__proto__ === arr.__proto__)
console.log('array proto 2x === class proto 2x: ', array.__proto__.__proto__ === norris.__proto__.__proto__)

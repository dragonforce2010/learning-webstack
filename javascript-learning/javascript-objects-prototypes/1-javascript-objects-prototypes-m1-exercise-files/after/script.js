'use strict';

//function Cat(name, color ) {
//  this.name = name
//  this.color = color
//}

//var cat = new Cat('Fluffy', 'White');

class Cat {
  constructor(name, color) {
    this.name = name
    this.color = color
  }
  
  speak() {
    display('Meeooow')
  }
}

var cat = new Cat('Fluffy', 'White')

display(cat)
cat.speak()
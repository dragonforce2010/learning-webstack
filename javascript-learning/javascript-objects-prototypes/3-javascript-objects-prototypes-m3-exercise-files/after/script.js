'use strict';

class Animal {
  constructor(voice) {
    this.voice = voice || 'grunt'
  }
  
  speak() {
    display(this.voice)
  }
}

class Cat extends Animal {
  constructor(name, color) {
    super('Meow')
    this.name = name
    this.color = color
  }
}

var fluffy = new Cat('Fluffy', 'White')
display(Object.keys(fluffy.__proto__.__proto__))
display(fluffy.__proto__.__proto__.hasOwnProperty('speak'))


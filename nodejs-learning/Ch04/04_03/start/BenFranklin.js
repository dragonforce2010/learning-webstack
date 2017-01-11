var EventEmitter = require('events').EventEmitter
var util = require('util')

var Person = function(name) {
    this.name = name
}

util.inherits(Person, EventEmitter)

var ben = new Person('ben')

ben.on('speak', function(saying) {
    util.log(`Ben is saying: ${saying}`)
})

ben.emit('speak', "You may delay, but the time will not.")
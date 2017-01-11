var Emitter = require("events").EventEmitter;
var util = require("util");
var path = require("path");
var fs = require("fs");
var View = require("./view");

var App = function(){

  this.on("view-selected", function(viewName){
    var view = new View(viewName);
    this.emit("rendered", view.toHtml());
  });

};

util.inherits(App, Emitter);
module.exports = new App();

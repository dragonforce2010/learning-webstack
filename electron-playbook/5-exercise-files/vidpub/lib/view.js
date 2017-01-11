var fs = require("fs");
var path = require("path");
var Handlebars = require("handlebars");

var View = function(viewName){

  //the files should be in the root of the app
  var templatePath = path.join(__dirname, "../views", viewName + ".hbs");
  var source = fs.readFileSync(templatePath,"utf-8");
  var template = Handlebars.compile(source);

  this.toHtml = function(data){
    return template(data);
  };

};

module.exports = View;

var Emitter = require("events").EventEmitter;
var util = require("util");
var path = require("path");
var fs = require("fs");
var View = require("./view");
var _ = require("underscore")._;
var MarkdownPage = require("./markdown_page");
var chapterDir = path.join(__dirname, "../", "chapters");
var lunr = require("lunr");

var loadChapters = function(){
  var result = [];
  var chapterFiles = fs.readdirSync(chapterDir);
  _.each(chapterFiles, function(file){
    var filePath = path.join(chapterDir, file);
    var page = new MarkdownPage(filePath);
    page.id = path.basename(file, ".md");;
    result.push(page);
  });
  return result;
};

var loadSearchIndex = function(app){

  app.searchIndex = lunr(function(){
    this.field("title");
    this.field("body");
    this.ref("id");
  });

  _.each(app.chapters, function(c){
    app.searchIndex.add(c);
  })

};

var App = function(){
  this.chapters = loadChapters();
  loadSearchIndex(this);

  this.on("view-selected", function(viewName){
    var view = new View(viewName);
    this.emit("rendered", view.toHtml());
  });

  this.on("chapter-selected", function(id){
    var chapter = _.find(this.chapters, function(c){
      return c.id == id;
    });
    this.emit("chapter-rendered", chapter);
  });

  this.on("search-requested", function(term){
    var self = this;
    results = self.searchIndex.search(term).map(function(res){
      return _.find(self.chapters,function(p){
        return p.id === res.ref;
      });
    });
    this.emit("search-completed", results);
  });
};

util.inherits(App, Emitter);
module.exports = new App();

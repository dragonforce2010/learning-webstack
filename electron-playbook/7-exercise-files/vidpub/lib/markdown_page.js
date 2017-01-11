var _ = require("underscore")._;
var fs = require("fs");
var path = require("path");
var showdown = require("showdown");
var gm = require("gray-matter");
var converter = new showdown.Converter();

var chapterDir = path.join(__dirname, "../", "chapters");

var MarkdownPage = function(title) {
  var result = {
    fileName : title + ".md"
  }
  var filePath = path.join(chapterDir, result.fileName);

  //load the file contents
  var raw = fs.readFileSync(filePath, "utf-8");

  //parse the front matter
  var parsed = gm(raw);
  _.extend(result,parsed.data);

  //parse the markdown
  result.body = converter.makeHtml(parsed.content);

  return result;
};


module.exports = MarkdownPage;

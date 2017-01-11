var _ = require("underscore")._;
var fs = require("fs");
var showdown = require("showdown");
var gm = require("gray-matter");
var converter = new showdown.Converter();

var MarkdownPage = function(filePath) {
  var result = {};
  //load the file contents
  var raw = fs.readFileSync(filePath, "utf-8");

  //parse the front matter
  var parsed = gm(raw);
  _.extend(result,parsed.data);

  result.summary = parsed.content.substring(0,200) + "...";

  //parse the markdown
  result.body = converter.makeHtml(parsed.content);

  return result;
};


module.exports = MarkdownPage;

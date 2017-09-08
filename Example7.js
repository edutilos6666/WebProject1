var formidable = require("formidable");
var fs = require("fs");
var http = require("http");



function generateForm(res) {
    res.writeHead(200 , {"Content-Type": "text/html"});
    res.write("<form action='/fileupload' method = 'post' enctype='multipart/form-data'>");
    res.write("<input type='file' name='filetoupload' /><br/>");
    res.write("<input type='submit'/>");
    res.write("</form>");
    res.end();
}

var server = http.createServer(function(req, res) {
  var url = req.url;

  if(url == "/fileupload") {
      var form = new formidable.IncomingForm();
      form.parse(req, function(err, fields, files) {
          var oldpath = files.filetoupload.path ;
          var newpath = "temps/" + files.filetoupload.name;
          fs.rename(oldpath , newpath, function(err) {
               if(err) throw  err ;
               res.write("File was uploaded successfully.");
              res.end();
          });
      });
  } else {
    generateForm(res);
  }
});

var port = 8080;
server.listen(port);
console.log("Server is listening on port "+ port);

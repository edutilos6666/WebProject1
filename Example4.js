var url = require("url");

/*
 this.protocol = null;
 this.slashes = null;
 this.auth = null;
 this.host = null;
 this.port = null;
 this.hostname = null;
 this.hash = null;
 this.search = null;
 this.query = null;
 this.pathname = null;
 this.path = null;
 this.href = null;
 */

var path = 'http://localhost:8080/default.htm?year=2017&month=february';
var parsed = url.parse(path , true);
console.log(parsed);
var q = parsed.query;
console.log(q.year, q.month);



var fs = require("fs");
var http = require("http");
var server = http.createServer(function(req, res) {
    var parsed = url.parse(req.url, true);
    var filename = "static" + parsed.pathname ;
    fs.readFile(filename, function(err, data) {
         if(err) {
             res.writeHead(404 , {"Content-Type": "text/html"});
             res.end("404 Content Not Found");
         } else {
             res.writeHead(200 , {"Content-Type": "text/html"});
             res.end(data);
         }
    });
});


var port = 8080;
server.listen(port);
console.log("Server is listening on port "+ port);
var upperCase = require("upper-case");

console.log(upperCase("hello world"));



var fs = require("fs");
var http = require("http");
var server = http.createServer(function(req, res) {
    var rs = fs.createReadStream("Example1.js");
    rs.on("open", function() {
        rs.pipe(res);
    });

    rs.on("error", function(err) {
        res.end(err);
    });
});

var port = 8080;
server.listen(port);
console.log("Server is listening on port "+ port);



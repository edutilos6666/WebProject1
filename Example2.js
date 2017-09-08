var http = require("http");
var Person = require("./Person").Person;
var PersonDAO = require("./PersonDAO").PersonDAO;

var dao = new PersonDAO();
dao.save(new Person(1, "foo", 10 , 100.0));
dao.save(new Person(2, "bar", 20 , 200.0));
dao.save(new Person(3, "bim", 30 , 300.0));


function HtmlGenerator() {

}


HtmlGenerator.prototype.generateFindAllPage = function() {
 var all = dao.findAll();
 var ret = "<table><tr><td>Id</td><td>Name</td><td>Age</td><td>Wage</td></tr>";
 for(var i in all) {
     var p = all[i];
     ret += "<tr><td>" + p.id + "</td><td>"
     + p.name +"</td><td>"
     +p.age + "</td><td>"
     +p.wage +"</td></tr>";

 }

 ret += "</table>";
 return ret ;
}

HtmlGenerator.prototype.generateIndexPage = function() {
  return "<h2>Hello World</h2>";
}



var server = http.createServer(function(req, res) {
    res.writeHead(200, {"Content-Type": "text/html"});
    var generator = new HtmlGenerator();
    if(req.url == "/") {
        res.end(generator.generateIndexPage());
    } else if(req.url == "/person/findAll") {
        res.end(generator.generateFindAllPage());
    }
    //res.end();
    console.log(req);
});

var port = 8080 ;
server.listen(port);

console.log("Server is listening on port "+ port);

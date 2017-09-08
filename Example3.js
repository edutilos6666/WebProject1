var fs = require("fs");

/*fs.readFile("Example2.js", function(err, data) {
    console.log(data.toString("utf-8"));
});*/




var fileName = "temp.txt";

fs.writeFile(fileName , "hello ", function(err) {
    console.log(err);
});

fs.appendFile(fileName, "world", function (err) {
    console.log(err);
});


fs.readFile(fileName, function(err, data) {
    console.log(data.toString());
});

fs.unlink(fileName);



fileName = "Person.csv";
var Person = require("./Person").Person;
var PersonDAO = require("./PersonDAO").PersonDAO;
var dao = new PersonDAO();
dao.save(new Person(1, "foo", 10 , 100.0));
dao.save(new Person(2, "bar", 20 , 200.0));
dao.save(new Person(3, "bim", 30, 300.0));
var all = dao.findAll();
for(var i in all) {
    var p = all[i];
    fs.appendFile(fileName, p.toString()+ "\n", function(err) {
         console.log(err);
    });
}


fs.readFile(fileName, function(err, data){
    console.log(data.toString());
});





fs.unlink(fileName);
var mongo = require("mongodb");

var MongoClient = mongo.MongoClient;
var url = "mongodb://localhost:27017/test";


//for Person {name, age, wage}
function processResult(result) {
    console.log("[", result.name, result.age , result.wage, "]");
}

var collName = "Person";
//createCollection
MongoClient.connect(url, function(err, db){
  if(err) throw err;
 // console.log("created"+ db);

    db.dropCollection(collName);

/*    db.createCollection(collName,  function(err, result) {
        if(err) throw err ;
        console.log("created Person collection.");
        db.close();
    });*/


    var one = {name: "foo", age: 10, wage: 100.0};

    db.collection(collName).insertOne(one, function(err, result) {
        if(err) throw err;
    });


    var many = [
        {name: "bar", age: 20 , wage: 200.0},
        {name: "bim", age: 30 , wage: 300.0},
        {name: "pako", age: 40, wage: 400.0}
    ];

    db.collection(collName).insertMany(many , function(err, result) {
        if(err) throw err ;
    });


    var query = {};
    db.collection(collName).findOne(query, function(err, result) {
        if(err) throw err ;
        processResult(result);
    });


    db.collection(collName).find(query).toArray(function(err, result) {
        if(err) throw err ;
        console.log("findMany:")
         for(var i in result) {
             processResult(result[i]);
         }
    });


    var part1 ={age: {$gt: 10}};
    var part2 = {wage: {$lt: 300}};
    query = {$and: [part1, part2]};
    db.collection(collName).find(query).toArray(function(err, result) {
        if(err) throw err;
        console.log("all people whose age > 10 && wage < 300 ");
        for(var i in result) {
            processResult(result[i]);
        }
    });


    query = {name: /^b/};
    db.collection(collName).find(query).sort({name: -1}).toArray(function(err, result) {
        if(err) throw err ;
        console.log("all people whose name starts with 'b'");
        for(var i in result) {
            processResult(result[i]);
        }
    });


    db.collection(collName).removeMany(query, function(err, result) {
        if(err) throw err ;


    });

    db.collection(collName).find({}).toArray(function(err, result) {
        if(err) throw err ;
        console.log("after removeMany");
        for(var i in result) {
            processResult(result[i]);
        }
    });


    db.close();

});




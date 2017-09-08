var mysql = require("mysql");


/*
 this.host               = options.host || 'localhost';
 this.port               = options.port || 3306;
 this.localAddress       = options.localAddress;
 this.socketPath         = options.socketPath;
 this.user               = options.user || undefined;
 this.password           = options.password || undefined;
 this.database
 */

var conn = mysql.createConnection({
    host: "localhost",
    port: 3306 ,
    user: "root",
    password: "root",
    database: "test"
});



function processResult(result) {
    for(var i in result) {
        var person = result[i];
        console.log(person.id, person.name, person.age, person.wage);
    }
}

conn.connect(function(err) {
    if(err) throw err ;
    console.log("connection success.");



    var sql = "drop database if exists test";
  /*  conn.query(sql , function(err, result) {
        if(err) throw err ;
        // console.log(result);
    });

    sql = "create database if not exists test";
    conn.query(sql, function(err, result) {
        if(err) throw err ;
        //console.log(result);
    });*/


    sql = "drop table if exists Person";

    conn.query(sql , function(err, result) {
        if(err) throw err ;
    });


    sql = "create table Person (id bigint primary key , " +
        "name varchar(50) not null, " +
        "age int not null, " +
        "wage real not null ) ";
    conn.query(sql, function (err, result)  {
        if(err) throw err ;
    });


    sql = "insert into Person VALUES (?, ?, ?, ?)";
    var inserts = [1, "foo", 10 , 100.0];
    sql = mysql.format(sql, inserts);
    conn.query(sql, function (err, result) {
        if(err) throw err;
        //console.log(result);

    });

    sql = "insert into Person VALUES (?, ?, ?, ?)";
    inserts = [2, "bar", 20 , 200.0];
    sql = mysql.format(sql, inserts);
    conn.query(sql, function (err, result) {
        if(err) throw err;
        // console.log(result);

    });

    sql = "insert into Person VALUES (?, ?, ?, ?)";
    inserts = [3, "bim", 30 , 300.0];
    sql = mysql.format(sql, inserts);
    conn.query(sql, function (err, result) {
        if(err) throw err;
        //console.log(result);

    });

    sql = "insert into Person VALUES (?, ?, ?, ?)";
    inserts = [4, "pako", 40 , 400.0];
    sql = mysql.format(sql, inserts);
    conn.query(sql, function (err, result) {
        if(err) throw err;
       // console.log(result);

    });



    sql = "select * from Person";
    conn.query(sql , function(err, result) {
         processResult(result);
    });



    sql = "select * from Person where id = ?";
    inserts = [1];
    sql = mysql.format(sql , inserts);
    conn.query(sql , function(err, result) {
       processResult(result);
    });

});








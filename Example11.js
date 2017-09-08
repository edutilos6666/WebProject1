var assert = require("assert");
var Person = require("./Person").Person;
var PersonDAO = require("./PersonDAO").PersonDAO;


function Tester () {
    this.dao = new PersonDAO();

}

Tester.prototype.testDAOInsert = function() {
    this.dao.save(new Person(1, "foo", 10, 100.0));
    this.dao.save(new Person(2, "bar", 20 , 200.0));
    this.dao.save(new Person(3, "bim", 30, 300.0));

    var all = this.dao.findAll();
    assert(3 == all.length);

    var p = this.dao.findById(1);
    assert(1 == p.id);
    assert("foo" == p.name);
    assert(10 == p.age);
    assert(100.0 == p.wage);
}


Tester.prototype.testDAOUpdate = function() {
    this.dao.update(1 , new Person(1 , "new_foo", 66, 666.6));
    var p = this.dao.findById(1);
    assert(1 == p.id);
    assert("new_foo" == p.name);
    assert(66 == p.age);
    assert(666.6 == p.wage);
}

Tester.prototype.testDAODelete = function() {
  this.dao.delete(1);
  var all = this.dao.findAll();
  assert(2 == all.length);
}


var tester = new Tester();
tester.testDAOInsert();
tester.testDAOUpdate();
tester.testDAODelete();
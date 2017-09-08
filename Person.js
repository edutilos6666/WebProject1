function Person(id, name , age , wage) {
    this.id = id ;
    this.name = name ;
    this.age = age;
    this.wage  = wage ;
}

Person.prototype.toString = function() {
  /*   var newline ="\r\n";
     var msg = "id = " + this.id + newline
    + "name = " + this.name + newline
    + "age = " + this.age + newline
    + "wage = " + this.wage ;
    return msg ;*/
    var msg = "[" + this.id + " , " + this.name + " , " + this.age + " , " + this.wage + "]";
    return msg ;
}

module.exports = {
    Person: Person
}

var http = require('http');
var Person = require("./Person").Person;

var p = new Person(1, "foo", 10 , 100.0);
//console.log(p.toString());


var PersonDAO = require("./PersonDAO").PersonDAO

var dao = new PersonDAO();
dao.save(new Person(1, "foo", 10 , 100.0));
dao.save(new Person(2, "bar", 20 , 200.0));
dao.save(new Person(3, "bim", 30 , 300.0));

var all = dao.findAll();
for(var p in all) {
    console.log(all[p].toString());
}


dao.update(1 , new Person(1, "new_foo", 66, 666.6));
p = dao.findById(1);
console.log(p.toString());


dao.delete(1);
all = dao.findAll();
console.log(all.length);



var SimpleMath = require("./SimpleMath").SimpleMath;
var sm = new SimpleMath();
var a = 20 ;
var b = 10 ;
var add = sm.add(a, b);
var subtract = sm.subtract(a, b);
var multiply = sm.multiply(a, b);
var divide = sm.divide(a, b);
var modulo = sm.modulo(a, b);
var sin = sm.sin(a);
var cos = sm.cos(b);


console.log("add = ", add);
console.log("subtract = ", subtract);
console.log("multiply = ", multiply);
console.log("divide = ", divide);
console.log("modulo =", modulo);
console.log("sin = ", sin);
console.log("cos = ", cos);




var ComplexNumber = require("./ComplexNumber").ComplexNumber;

var cx1 = new ComplexNumber(1, 1);
var cx2 = new ComplexNumber(2, 2);
console.log(cx1.toString());
console.log(cx2.toString());
var cxAdd = cx1.add(cx2);
var cxSubtract = cx1.subtract(cx2);
var cxMultiply = cx1.multiply(cx2);
var cxDivide = cx1.divide(cx2);
console.log("add = "+ cxAdd.toString());
console.log("subtract = "+ cxSubtract.toString());
console.log("multiply = "+ cxMultiply.toString());
console.log("divide = "+ cxDivide.toString());


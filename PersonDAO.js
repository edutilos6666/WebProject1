var Person = require("./Person");


function PersonDAO() {
     this.container = new Map();
}

PersonDAO.prototype.save = function(p) {
   this.container.set(p.id , p);
}

PersonDAO.prototype.update = function(id , newP){
    this.container.delete(id);
    this.container.set(id, newP);
}


PersonDAO.prototype.delete = function(id) {
    this.container.delete(id);
}

PersonDAO.prototype.findById = function(id) {
    return this.container.get(id);
}

PersonDAO.prototype.findAll = function() {
    //var all = this.container.values();
    var res = [];
    this.container.forEach(function(v, k , src) {
        res.push(v);
    });

    return res ;
}


module.exports = {
    PersonDAO: PersonDAO
}
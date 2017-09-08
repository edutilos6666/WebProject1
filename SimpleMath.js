function SimpleMath () {

}

SimpleMath.prototype.add = function(a, b) {
  return a + b ;
}

SimpleMath.prototype.subtract = function(a, b) {
    return a - b ;
}

SimpleMath.prototype.multiply = function(a, b) {
    return a * b ;
}

SimpleMath.prototype.divide = function(a, b ) {
    return a / b ;
}

SimpleMath.prototype.sin = function(a) {
    return Math.sin(a);
}

SimpleMath.prototype.cos = function(a) {
    return Math.cos(a);
}

SimpleMath.prototype.modulo = function(a, b) {
    return a % b ;
}




module.exports = {
    SimpleMath: SimpleMath
}



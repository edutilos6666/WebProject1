function ComplexNumber (real, imag) {
  this.real = real ;
  this.imag = imag ;
}


ComplexNumber.prototype.add = function(other) {
   var real = this.real + other.real ;
   var imag = this.imag + other.imag ;
   return new ComplexNumber(real, imag);
}

ComplexNumber.prototype.subtract = function(other) {
    var real = this.real - other.real;
    var imag = this.imag - other.imag;
    return new ComplexNumber(real, imag);
}

ComplexNumber.prototype.multiply = function(other) {
    var real = this.real* other.real - this.imag* other.imag ;
    var imag = this.real* other.imag + this.imag* other.real ;
    return new ComplexNumber(real, imag);
}

ComplexNumber.prototype.divide = function(other) {
    var coeff = Math.pow(other.real, 2) + Math.pow(other.imag , 2);
    var cx1 = this.multiply(new ComplexNumber(other.real, -other.imag));
    return new ComplexNumber(cx1.real/ coeff , cx1.imag/ coeff);
}

ComplexNumber.prototype.toString = function() {
    var msg = this.real + " + i*"+ this.imag ;

    if(this.real == 0 && this.imag) {
        msg = "0";
    } else if(this.real == 0) {
        if(this.imag > 0)
        msg =  "i*" + this.imag ;
        else // this.imag < 0
        msg = "i*(" + this.imag + ")";
    } else if(this.imag == 0) {
        msg = this.real ;
    } else if(this.imag < 0) {
        msg = this.real + " + i*("+ this.imag + ")";
    }

    return msg ;
}



module.exports = {
   ComplexNumber: ComplexNumber
};

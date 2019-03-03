function Container(param) {

  function dec () {
    if (secret > 0) {
      // secret -= 1;
      return true;
    } else {
      return false;
    }
  }
  this.member = param;
  var secret = 5;
  var that = this;

  this.service = function () {
    return dec() ? that.member : null;
  };
}

Container.prototype.stamp = function (string) {
  return this.member + string;
}

var myContainer = new Container('abc');
console.log(myContainer.service())


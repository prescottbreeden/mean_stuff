function PersonContructor(name, age) {
  let self = this;
  var privateVariable = "This variable is private";
  var privateMethod = function() {
    console.log('this is a private method for ' + self.name)
    console.log(self);
  }
  self.name = name;
  self.age = age;
  self.greet = function() {
    console.log("Hello my name is " + self.name + " and I am " + self.age + " years old");
    privateMethod()
  }
  return self;
}

PersonContructor.prototype.giggle = function() {
  console.log('teeheehee')
}

const balls = new PersonContructor('bob', 99)
balls.greet()
balls.towelie = function () {
  console.log('wanna get high?')
}
balls.towelie()
balls.giggle()

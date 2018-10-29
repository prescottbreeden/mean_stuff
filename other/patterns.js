// Public

function PublicConstructor(...) {
  this.membername = value
}

PublicConstructor.prototype.membername = value;

// Private

function PrivateConstructor(...) {
  var that = this;
  var membername = value;

  function membername(...) {...}
}


// Privileged

function PriviligedConstructor(...) {
  this.membername = function (...) {...};
}

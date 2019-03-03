function constructor(spec) {
  var that = other_constructor(spec),
    member,
    method = function () {
      // spec, member, method
    }
  that.method = method;
  return that;
}



const AutoMaker = {
  Car (bundle) {
    return Object.create(this.bundle[bundle])
  },

  bundle: {
    premium: {
      drive() {
        console.log('Vroom')
      },
      getOptions: function() {
        return ['leather', 'wood', 'pearl'];
      }
    }
  }
};

// Douglas Crockford 'class'
function object (o) {
  var that = function F () {}
  F.prototype = o;
  return that;
}



function makeNewCar(spec) {
  var that = AutoMaker.Car(spec),
    method = function () {
      drive: console.log('hi')
    };
  that.method = method;
  return that;
}

// ----------------------------------------------------

x = makeNewCar('premium')
console.log(x)
x.drive()
x.method()
o = x.getOptions()
console.log(o)




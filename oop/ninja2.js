function Ninja(name) {
  let self = this;

  // private
  var strength = 10;
  var dexterity = 10;
  var speed = dexterity * 10;

  // public
  self.name = name;
  self.health = strength * 10;
  self.class = 'Human';

  // get or set strength
  self.strength = function(...args) {
    if (args.length === 1) {
      strength += args[0] 
    } else if (args.length > 1) {
      throw 'Set strength function only takes 1 param'
    }else {
      return strength
    }
  };

  // get or set speed
  self.speed = function(...args) {
    if (args.length) {
      speed += args[0]
    } else if (args.length > 1) {
      throw 'Set speed function only takes 1 param'
    } else {
      return speed
    }
  };

  self.showStats = function() {
    console.log(self.name, strength, speed, self.health)
  };
}

Ninja.prototype.punch = function(...enemies) {
  enemies.map(enemy => {
    enemy.health -= 10;
    console.log(enemy.name + " was punched by " + this.name);
  });
}

const bob = new Ninja('Bob')
console.log(bob.class)
bob.health += 100
bob.speed(50)
bob.strength(30)
bob.showStats()

const plumpy = new Ninja('Plumpy')
const stumpy = new Ninja('Stumpy')
const dumpy = new Ninja('Dumpy')

bob.punch(plumpy, stumpy, dumpy)



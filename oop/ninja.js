class Human {
  constructor(str=10, dex=10) {
    this._strength = 10
    this._dexterity = 10
    this._health = this.strength*10
    this._speed = this.dexterity*10
    this._class = 'Human'
  }

  set health(val) { this._health += val }
  get health() { return this._health }

  set strength(val) { this._strength += val }
  get strength() { return this._strength }

  set dexterity(val) { this._dexterity += val }
  get dexterity() { return this._dexterity }

  set class(val) { this._class = val }
  get class() { return this._class }

  attack(obj) {
    if (obj.class = 'Enemy') {
      console.log('--------------------------')
      console.log(obj.health)
      // obj.health-=this.strength
      obj.health-=100
      console.log(obj.health)
      console.log(obj.speak())
      console.log('--------------------------')
    } else {
      console.log(`Cannot attack that ${obj.class}`)
    }
  }

  levelup() {
    this.strength(this.strength*.10)
    this.dexterity(this.dexterity*.10)
  }

  speak() {
    return "linux 4 life"
  }
}

class Ninja extends Human {
  constructor() {
    super(10, 15)
    this._class = 'Ninja'
  }
}


class Samurai extends Human {
  constructor() {
    super(15, 10)
    this._class = 'Samurai'
  }
}

const bob = new Human()
bob.class = 'Enemy'
console.log(bob)

const jack = new Samurai()
jack.attack(bob)
console.log(bob)
jack.attack(bob)
console.log(bob)
console.log(bob.speak())

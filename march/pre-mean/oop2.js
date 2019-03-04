const readline = require('readline');

let tigger = { character: "Tigger" };
let pooh = { characer : "Winnie the Pooh" };
let bees = { character: "Bees" };
let piglet = { character: "Piglet" };
let cr = { character: "Christopher Robin" };
let rabbit = { character: "Rabbit" };
let owl = { character: "Owl" };
let gopher = { character: "Gohper" };
let kanga = { character: "Kanga" };
let eeyore = { character: "Eeyore" };
let heffalumps = { character: "Heffalumps" };

function addLocations(obj, north, east, south, west) {
  obj.north = north;
  obj.east = east;
  obj.south = south;
  obj.west = west;
}

addLocations(heffalumps, null, null, null, eeyore);
addLocations(eeyore, null, heffalumps, kanga, null);
addLocations(kanga, eeyore, null, cr, null);
addLocations(cr, kanga, rabbit, pooh, owl);
addLocations(owl, null, cr, piglet, null);
addLocations(piglet, owl, pooh, null, null);
addLocations(pooh, cr, bees, tigger, piglet);
addLocations(tigger, pooh, null, null, null);
addLocations(bees, rabbit, null, null, pooh);
addLocations(rabbit, null, gopher, bees, cr);
addLocations(gopher, null, null, null, rabbit);


function Player(obj) {
  this.name = 'Bob';
  this.location = obj;
  this.move = function(dir) {
    this.location = this.location[dir];
  }
  this.whereAmI = function() {
    console.log("You are at " + this.location.character + "'s house.");
  }
}

let bob = new Player(heffalumps);
bob.whereAmI();
let newGame = true;

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

  console.log("Where would you like to go?");
  r1.question("k: North, l: East, j: South, h: West\n", (answer) => {
    switch (answer) {
      case 'h': 
        bob.move('west');
        break;
      case 'j': 
        bob.move('south');
        break;
      case 'k': 
        bob.move('north');
        break;
      case 'l': 
        bob.move('east');
        break;
    }
    bob.whereAmI();
    if (bob.location.character === 'Bees') {
      console.log("OH NO! BEEEEEES!!!!");
      newGame = !newGame;
    }

    r1.close();
    newGame = false;
  })


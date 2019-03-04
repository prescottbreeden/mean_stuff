var heffalumps, eeyore, kanga, cr, rabbit, gopher, owl, piglet, pooh, bees, tigger;

function player(obj) {
  this.name = 'Bob';
  this.location = obj.location;
  this.move = function(dir) {
    this.location = this.location[dir];
  }
  this.whereAmI = function() {
    console.log("You are at " + this.location.name + "'s house.");
  }
}

function createLocation(n, north, east, south, west) {
  return {
    name: n,
    location: {
      north: north,
      east: east,
      south: south,
      west: west,
    }
  }
};

tigger = createLocation('Tigger', pooh, null, null, null);
pooh = createLocation('Winnie the Pooh', cr, bees, tigger, piglet);
cr = createLocation('Christopher Robin', kanga, rabbit, pooh, owl);
kanga = createLocation('Kanga', eeyore, null, cr, null);
eeyore = createLocation('Eeyore', null, heffalumps, kanga, null);
heffalumps = createLocation('Heffalumps', null, null, null, eeyore);


tigger = {
  location: {
    name: 'Tigger',
    north: pooh,
    east: null,
    south: null,
    west: null,
  }
}

pooh = {
  location: {
    name: 'Winnie the Pooh',
    north: cr,
    east: bees,
    south: tigger,
    west: piglet,
  }
}

cr = {
  location: {
    name: 'Christopher Robin',
    north: kanga,
    east: rabbit,
    south: pooh,
    west: owl,
  }
}
kanga = {
  location: {
    name: 'Kanga',
    north: eeyore,
    east: null,
    south: cr,
    west: null,
  }
}

eeyore = {
  location: {
    name: 'Eeyore',
    north: null,
    east: heffalumps,
    south: kanga,
    west: null,
  }
}

let bob = new player(tigger);
// console.log("rebuilt: ", bob);
bob.whereAmI();
bob.move('north');
bob.whereAmI();


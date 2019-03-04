var heffalumps, eeyore, kanga, cr, rabbit, gopher, owl, piglet, pooh, bees, tigger;

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

let bob = kanga;
console.log(bob.location);
bob = bob.location.south;
console.log("step south: ", bob);
bob = bob.location.south;
console.log("step south: ", bob);
bob = bob.location.south;
console.log("step south: ", bob);

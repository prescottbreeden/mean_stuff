let eeyore, heffalumps, kanga, owl, christopherRobin, rabbit, gopher, piglet, pooh, bees, tigger

eeyore = { character: 'Eeyore' }
heffalumps = { character: 'Heffalumps' }
kanga = { character: 'kanga' }
pooh = { character: 'Pooh' }
owl = { character: 'Owl' }
christopherRobin = { character: 'Christopher Robin' }
rabbit = { character: 'Rabbit' }
gopher = { character: 'Gopher' }
piglet = { character: 'Piglet' }
bees = { character: 'Bees' }
tigger = { character: 'Tigger' }

heffalumps.west = eeyore
kanga.north = heffalumps.west

console.log(heffalumps)
console.log(eeyore)
console.log(kanga)

console.log("*************************************")

// now give eeyore a relationship to the others around him so he's not just eeyore
eeyore.west = heffalumps
console.log(heffalumps)
console.log(eeyore)
console.log(kanga)





// eeyore.east = heffalumps
// heffalumps.west.south = kanga
// heffalumps.west.south.south = christopherRobin
// heffalumps.west.south.south.west = owl
// heffalumps.west.south.south.east = rabbit
// heffalumps.west.south.south.east.east = gopher
// eeyore.east = heffalumps
// eeyore.south = christopherRobin.north
// kanga.north = eeyore
// kanga.south = pooh.north
// kanga.north.east = heffalumps
// christopherRobin.south = tigger.north
// christopherRobin.east = gopher.west
// christopherRobin.west = owl
// pooh.south = tigger






// var piglet = { character: "Piglet"};        // create Piglet's home object with just the character attribute
// piglet.east = tigger.north;          // Piglet's east attribute is Tigger's north attribute, which is a memory address
// tigger.north.west = piglet;          // Follow Tigger's north attribute to a location in memory
//                                     // Assign that object's west attribute to piglet

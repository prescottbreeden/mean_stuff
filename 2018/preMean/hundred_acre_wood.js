let eeyore = { character: 'Eeyore' }
let heffalump = { character: 'Heffalump' }
let kanga = { character: 'kanga' }
let pooh = { character: 'Pooh' }
let owl = { character: 'Owl' }
let christopherRobin = { character: 'Christopher Robin' }
let rabbit = { character: 'Rabbit' }
let gopher = { character: 'Gopher' }
let piglet = { character: 'Piglet' }
let bees = { character: 'Bees' }
let tigger = { character: 'Tigger' }

eeyore.greeting = "It's not much of a tail... but I'm sort of attached to it..."
heffalump.greeting = "Be careful of the woozles!"
kanga.greeting = "Have you seen Roo?"
pooh.greeting = "Oh bother..."
owl.greeting = "Splendid day to be about one's business, hmm?"
christopherRobin.greeting = "You're braver than you believe, stronger than you seem, and smarter than you think"
rabbit.greeting = "How about lunch?"
gopher.greeting = "Ssssssssomebody call for an exsssssssspert?"
piglet.greeting = "Oh d-d-d-d-dear! I wasn't expecting company!"
bees.greeting = "Bzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz!"
tigger.greeting = "The wonderful thing about Tiggers is I'm the only one!"

// heffalump
heffalump.west = eeyore

// eeyore
eeyore.south = kanga
eeyore.east = heffalump

// kanga
kanga.north = eeyore
kanga.south = christopherRobin

// christopherRobin
christopherRobin.north = kanga
christopherRobin.east = rabbit
christopherRobin.south = pooh
christopherRobin.west = owl

// owl
owl.east = christopherRobin
owl.south = piglet

// piglet
piglet.east = pooh
piglet.north = owl

// pooh
pooh.south = tigger
pooh.west = owl.south
pooh.north = christopherRobin
pooh.east = bees

// bees
bees.north = rabbit
bees.west = pooh

// rabbit
rabbit.east = gopher
rabbit.south = bees
rabbit.west = christopherRobin

// gopher
gopher.west = rabbit


// ----- don't do this ----- //
// heffalump.west.south = kanga
// heffalump.west.south.south = christopherRobin
// heffalump.west.south.south.west = owl
// heffalump.west.south.south.east = rabbit
// heffalump.west.south.south.east.east = gopher
// ----- don't do this ----- //


let player = { location: heffalump, honey: false }
player.pickup = () => {
  if (player.location.character === 'Bees') {
    player.honey = true
    console.log("You found some honey! I bet Pooh would enjoy this.")
  } else {
    console.log("There is no honey at this location")
  }
}
player.drop = () => {
  if (player.honey) {
    if (player.location.character === 'Pooh') {
      console.log("Congrats! You delivered the honey to Pooh's house!")
    } else {
      console.log(`${player.location.character} isn't interested in honey.`)
    }
  } else {
    console.log("You need to find some honey first")
  }
}
let move = (direction) => { 
  switch (direction) {
    case 'north':
      if (player.location.hasOwnProperty('north')) {
        player.location = player.location.north
        console.log(`You are now at ${player.location.character}'s house`)
        console.log(player.location.greeting)
      } else {
        console.log("You cannot go that way!!!!")
      }
      break
    case 'east':
      if (player.location.hasOwnProperty('east')) {
        player.location = player.location.east
        console.log(`You are now at ${player.location.character}'s house`)
        console.log(player.location.greeting)
      } else {
        console.log("You cannot go that way!!!!")
      }
      break
    case 'south':
      if (player.location.hasOwnProperty('south')) {
        player.location = player.location.south
        console.log(`You are now at ${player.location.character}'s house`)
        console.log(player.location.greeting)
      } else {
        console.log("You cannot go that way!!!!")
      }
      break
    case 'west':
      if (player.location.hasOwnProperty('west')) {
        player.location = player.location.west
        console.log(`You are now at ${player.location.character}'s house`)
        console.log(player.location.greeting)
      } else {
        console.log("You cannot go that way!!!!")
      }
      break
  }
}
move('west')
move('south')
move('south')
move('south')
move('west')
move('east')
move('north')
move('east')
move('east')
move('north')
move('west')
move('south')
player.pickup()
move('west')
player.drop()

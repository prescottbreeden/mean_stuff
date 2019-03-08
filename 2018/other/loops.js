// while 
// ...evaluated immediately, may never fire

let i = 9
while (i < 5) {
  if (i % 2 !== 0) console.log(i)
  i++
}

// do-while 
// ...always fires at least once even if condition is falsey

let j = 9
do {
  if (j % 2 !== 0) console.log(j)
  j++
} while (j < 5)


// for... in

const person = {
  name: 'Chuck',
  age: 99
}

for (let key in person) {
  console.log(key, person[key])
}

const colors = ['red', 'green', 'blue']

for (let index in colors) {
  console.log(index) // 0, 1, 2 <~~ seems silly, welcome for... of
}


// for... of

for (let color of colors) {
  console.log(color)
}

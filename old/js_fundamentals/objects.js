let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
]

let users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
       {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
       {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
}


console.log("---------------------------")

// Challenge 1
for (const student of students) {
  console.log(`Name: ${student.name}, Cohort: ${student.cohort}`)
}

console.log("---------------------------")

// Challenge 2
for (const key in users) {
  console.log(key.toUpperCase())
  for (const i in users[key]) {
    num = parseInt(i) + 1
    firstName = users[key][i]['first_name'].toUpperCase()
    lastName = users[key][i]['last_name'].toUpperCase()
    length = (firstName + lastName).length
    console.log(`${num} - ${lastName}, ${firstName} - ${length}`)
  }
}
console.log("---------------------------")



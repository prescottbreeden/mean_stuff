function fizzbuzz(num) {
  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) { console.log('fizzbuzz'); continue } 
    else if (i % 3 === 0) { console.log('Fizz'); continue }
    else if (i % 5 === 0) { console.log('Buzz'); continue }
    console.log(i)
  }
}

fizzbuzz(20)

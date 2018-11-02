function coinchange(c) {
  if (typeof(c) === 'number') {
    return minimizeChange(c)
  }
  if (typeof(c) === 'object') {
    sum = convertToCents(c)
    return minimizeChange(sum)
  }
}


function minimizeChange(c) {
  let dollars = parseInt(c/100);
  c %= 100;
  let dimes = parseInt(c/10);
  c %= 10;
  let nickels = parseInt(c/5);
  c %= 5;

  return { 
    dollars: dollars, 
    dimes: dimes, 
    nickels: nickels, 
    pennies: c };
}


function convertToCents(obj) {
  let sum = 0
  if (obj.dollars) 
    sum += obj.dollars*100

  if (obj.dimes) 
    sum += c.dimes*10

  if (obj.nickels) 
    sum += obj.nickels*5

  if (obj.pennies) 
    sum += obj.pennies

  return sum
}

console.log(coinchange(321))
console.log(coinchange({'dollars': 0, 'nickels': 500}))

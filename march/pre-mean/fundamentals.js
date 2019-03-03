function fundamentals() {
  this.minMaxAvg = function(arr) {
    return {
      min: min(arr), max: max(arr), avg: avg(arr)
    }
  };
  this.fizzbuzz = function(num) {
    if (num < 1) throw "FizzBuzz parameter must be greater than 0";
    if (typeof(num) != 'number') throw "FizzBuzz parameter must be a number";
    return fizzBuzz(num);
  };
  this.bracesValid = function(str) {
   return validateBraces(str);
  };

}

function Stack() {
  this._stack = [];
  this.add = function(val) {
    this._stack.push(val);
  };
  this.remove = function() {
    this._stack.pop();
  };
  this.size = function() {
    return this._stack.length > 0;
  } 
}

function min(arr) {
  return Math.min(...arr);
}

function max(arr) {
  return Math.max(...arr);
}

function avg(arr) {
  return arr.reduce((total, num) => {
    return total + num;
  }, 0)/arr.length;
}

function fizzBuzz(num, str="", it=1) {
  if (it > num) return str;
  if(it % 3 == 0 && it % 5 == 0) {
    return console.log("FizzBuzz") || fizzBuzz(num, str+="FizzBuzz, ", ++it);
  }
  if(it % 3 == 0) {
    return console.log("Fizz") || fizzBuzz(num, str+="Fizz, ", ++it);
  }
  if(it % 5 == 0) {
    return console.log("Buzz") || fizzBuzz(num, str+="Buzz, ", ++it);
  }
  return console.log(it) || fizzBuzz(num, str+=it + ', ' , ++it);
}

function validateBraces(str) {
  if(!str) return console.log("str cannot be empty") || null;
  let parens = [];
  let vals = {
    '{': '}',
    '[': ']',
    '(': ')',
  };
  for(let i = 0; i < str.length; i++) {
    if(vals[str[i]]) {
      parens.push(str[i]);
      continue;
    }
    if (str[i] == vals['(']) {
      if(parens.length === 0) return console.log(false)||false;
      if(!str[i] === parens.pop()) return console.log(false)||false;
      continue;
    }
    if (str[i] == vals['{']) {
      if(parens.length === 0) return console.log(false)||false;
      if(!str[i] === parens.pop()) return console.log(false)||false;
      continue;
    }
    if (str[i] == vals['[']) {
      if(parens.length === 0) return console.log(false)||false;
      if(!str[i] === parens.pop()) return console.log(false)||false;
      continue;
    }
  }
  return console.log(true)||true;
}

function coinChange(total) {

  return {
    dollars: '',
    dimes: '',
    nickels: '',
    pennies: ''
  }
}

const f = new fundamentals();
let a = f.minMaxAvg([1, -2, 9, 4]);
console.log(a);
console.log('\n -------- \n')
let b = f.fizzbuzz(20);
console.log(b);
console.log('\n -------- \n')
let c = f.bracesValid("[balls]({are bouncy?})");
console.log('\n -------- \n')




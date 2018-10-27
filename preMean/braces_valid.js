// es6 class
class Stack {
  constructor() {
    this.arr = []
  }

  peek() { 
    return this.arr[this.arr.length-1] 
  }

  isEmpty() { 
    return this.arr.length 
  }

  add(val) { 
    this.arr.push(val) 
  }

  remove() { 
    return this.arr.pop() 
  }
}


// es6 class with arrow functions
class Stack2 {
  constructor() {
    this.arr = []
    this.peek = () => { return this.arr[this.arr.length-1] }
    this.isEmpty = () => { return this.arr.length }
    this.add = val => { this.arr.push(val) }
    this.remove = () => { return this.arr.pop() }
  }
}


// es5 with prototyped
function Stack3() { this.arr = [] }

Stack3.prototype.peek = function() { return this.arr[this.arr.length-1] }

Stack3.prototype.isEmpty = function() { return this.arr.length }

Stack3.prototype.add = function(val) { this.arr.push(val) }

Stack3.prototype.remove = function() { return this.arr.pop() }


function bracesValid(parens) {
  let stack = new Stack2(), valid = true
  const braces = {
    "{" : "}",
    "(" : ")",
    "[" : "]"
  };

  for (let i = 0; i < parens.length; i++) {
    const ele = parens[i]
    if (braces[ele]) {
      stack.add(ele)
    } else {
      x = stack.remove()
      if (braces[x] !== ele) {
        valid = false
      }
    }
  }
  if (stack.isEmpty()) {
    valid = false
  }
  return valid
}


console.log(bracesValid("{())}"))
console.log(bracesValid("()})}"))
console.log(bracesValid("{({()"))
console.log(bracesValid("{({()})}"))


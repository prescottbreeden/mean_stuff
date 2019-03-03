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
  this.returnChange = function(coin) {
    return coinChange(coin);
  };
  this.userInfo = function(users) {
    return userLanguages(users);
  };
  this.search = function(val, arr) {
    return binarySearch(val, arr);
  }

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
  console.log(total);
  let dollars = Math.floor(total/100);
  total = total % 100;
  let dimes = Math.floor(total/10);
  total = total % 10;
  let nickels = Math.floor(total/5);
  total = total % 5;
  let pennies = total;

  return {
    dollars: dollars,
    dimes: dimes,
    nickels: nickels,
    pennies: pennies
  }
}

function userLanguages(users) {
  users.forEach(ele => {
    let languages = '';
    let interests = '';
    ele.languages.forEach((lang, i) => {
      if (i === ele.languages.length-1) { 
        languages += 'and ' + lang; 
      } else { 
        languages += lang + ', '; 
      };
    });
    for (let key in ele.interests) {
      ele.interests[key].forEach((interest, i) => {
          interests += interest + ',';
      });
    };
    let edit = interests.split(",");
    interests = '';
    edit.forEach((item, index) => {
      if(index === edit.length-1) {
        return;
      };
      if(index === edit.length-2) {
        interests += 'and ' + item;
      } else {
        interests += item + ', ';
      };
    });
    console.log(`${ele.fname} ${ele.lname} knows ${languages}.`)
    console.log(`${ele.fname} ${ele.lname} is also interested in ${interests}.`)
  });
};

users = [
  {
    fname: "Kermit",
    lname: "the Frog",
    languages: ["Python", "JavaScript", "C#", "HTML", "CSS", "SQL"],
    interests: {
      music: ["guitar", "flute"],
      dance: ["tap", "salsa"],
      television: ["Black Mirror", "Stranger Things"] 
    }
  },
  {
    fname: "Winnie",
    lname: "the Pooh",
    languages: ["Python", "Swift", "Java"],
    interests: {
      food: ["honey", "honeycomb"],
      flowers: ["honesuckle"],
      mysteries: ["Heffalumps"]
    }
  },
  {
    fname: "Arthur",
    lname: "Dent",
    languages: ["JavaScript", "HTML", "Go"],
    interests: {
      space: ["stars", "planets", "improbability"],
      home: ["tea", "yellow bulldozers"]
    }
  },
];

function binarySearch(val, arr, l=0, r=arr.length-1) {
  const mid = Math.floor(r-l);
  if (r < l) return false;
  if (arr[mid] === val) return true;
  if (arr[mid] < val) {
    return binarySearch(val, arr, l=mid+1, r);
  }
  return binarySearch(val, arr, l, r=mid-1);
}


// solutions
const f = new fundamentals();
const a = f.minMaxAvg([1, -2, 9, 4]);
console.log(a);
console.log('\n -------- \n')
const b = f.fizzbuzz(20);
console.log(b);
console.log('\n -------- \n')
const c = f.bracesValid("[balls]({are bouncy?})");
console.log('\n -------- \n')
const d = f.returnChange(312);
console.log(d);
console.log('\n -------- \n')
const e = f.userInfo(users);
console.log('\n -------- \n')
const ea = f.search(93, [1, 3, 8, 10, 12, 15, 17, 20, 22, 34, 38, 40, 50, 52, 78, 87, 90, 91, 92, 94, 200]);
const eb = f.search(15, [1, 3, 8, 10, 12, 15, 17, 20, 22, 34, 38, 40, 50, 52, 78, 87, 90, 91, 92, 94]);
console.log(ea);
console.log(eb);


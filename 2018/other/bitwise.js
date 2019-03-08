/*
Bitwise operations in JavaScript 


--------------------------
       Bitwise AND
--------------------------
def:
returns a 1 in each bit position for which the 
corresponding bits of BOTH operands are 1s

i.e. If there is a 0, stay a 0

e.g. console.log(A & B); 
A = 00000001
B = 00000010
R = 00000000 <~~ output


--------------------------
        Bitwise OR
--------------------------
def:
returns a 1 in each bit position for which the 
corresponding bits of Either or BOTH operands are 1s

i.e. If there is a 1, stay a 1

e.g. console.log(A | B); 
A = 00000001
B = 00000010
R = 00000011 <~~ output


--------------------------
       Bitwise XOR
--------------------------
def:
Returns a 1 in each bit position for which the 
corresponding bits of EITHER but NOT BOTH operands are 1s

i.e. if there's just a single 1, return a 1 

e.g. console.log(A ^ B); 


--------------------------
       Bitwise NOT
--------------------------
def:
Inverts the bits of its operand

i.e. if there's a 1, make it a 0, vice versa

e.g. console.log(~ A); 

.........................................................
.........................................................
.........................................................
.........................................................

*/

//==========================
//     Bitwise Examples
//==========================


//----------------------
//        Flags
//----------------------


// A: 'we have an ant problem',
// B: 'we own a bat',
// C: 'we own a cat',
// D: 'we own a duck'

// represented in binary as DCBA 

var flags = 5; // binary 0101 ... cat = true and ants = true

const FLAG_A = 1; // 0001
const FLAG_B = 2; // 0010
const FLAG_C = 4; // 0100
const FLAG_D = 8; // 1000

if (flags & FLAG_C) {
  console.log('You own a cat')
}

var mask = FLAG_A | FLAG_B | FLAG_D; // 0001 | 0010 | 1000

// 0001
// 0010
// 1000
// ----
// 1011 <~~ decimal 11

if ((mask & FLAG_B) || (mask & FLAG_C)) {
  console.log('You own a bat or a cat')
}

if (mask & FLAG_D) {
  console.log('Do you have a name for your duck?')
}

if (mask | FLAG_C) {
  console.log('What do you have against cats?')
}

/*
.........................................................
.........................................................
.........................................................
.........................................................
*/

//--------------------------
// Imaginary access control
//--------------------------

// Read, Write, Execute
// 00000100 # read permission - evalutes to 4
// 00000010 # write permission - evaluates to 2
// 00000001 # execute permissions - evaluates to 


const readPermission = 4
const writePermission = 2
const executePermission = 1

let myPermission = 0
myPermission = myPermission | readPermission | writePermission

let message = (myPermission & readPermission) ? 'yes' : 'no'

console.log(message)

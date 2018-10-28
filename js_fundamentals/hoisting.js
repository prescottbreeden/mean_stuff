console.log(hello);
var hello = 'world';
// undefined

console.log(" ----------------------------------- ")

var needle = 'haystack';
test();

function test(){
    var needle = 'magnet';
    console.log(needle);
}
// magnet

console.log(" ----------------------------------- ")

var brendan = 'super cool';
function print(){
	brendan = 'only okay';
	console.log(brendan);
}
console.log(brendan);
// print is never called
// super cool

console.log(" ----------------------------------- ")

var food = 'chicken';
console.log(food);
eat();
function eat(){
	food = 'half-chicken';
	console.log(food);
	var food = 'gone';
}
// chicken
// half-chicken

console.log(" ----------------------------------- ")

// mean(); <~~ uncomment this to see output error
console.log(food);
var mean = function() {
	food = "chicken";
	console.log(food);
	var food = "fish";
	console.log(food);
}
console.log(food);
// type-error "mean is not a function" (because mean is an anonymous function)

console.log(" ----------------------------------- ")

console.log(genre);
var genre = "disco";
rewind();
function rewind() {
	genre = "rock";
	console.log(genre);
	var genre = "r&b";
	console.log(genre);
}
console.log(genre);
// undefined
// rock
// r & b

console.log(" ----------------------------------- ")

dojo = "san jose";
console.log(dojo);
learn();
function learn() {
	dojo = "seattle";
	console.log(dojo);
	var dojo = "burbank";
	console.log(dojo);
}
console.log(dojo);
// san jose
// seattle
// burbank
// san jose

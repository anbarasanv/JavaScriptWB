/*

//Non-primitive chnages visible to outside
function ObjChange(myObj){
  myObj.name = 'Anba'
}

var emp = { name:'vella'}
console.log(emp.name);
ObjChange(emp);
console.log(emp.name);

//Below displays Error because function has been called before its declartion
var x = square(4); 
var square = function(number) { return number * number; };
console.log(x);

//Factorial Fuction 
function fact(n){
  return n < 2 ? 1: n*fact(n-1)
}

//map Function
function map(fn,arr){
  let result=[], i;
  for(i=0; i < arr.length ; i++){
    result[i] = fn(arr[i])
  }
  return result;
}

let fn = function(val){
  return val*val;
}

//Apply function accesspts two arguments first one as object  and
//second is argument list(A array kind of)

array = ['1','2'];
sarry = ['3','4'];
array.push.apply(array,sarry);
console.info(array); // Result: [ "1", "2", "3", "4" ]

//call Function like same as apply but accesps argument list
// lets write a setter method for all objects

function setter(arg){
  return this.name = arg;
}
obj1 = {};
obj2 = {};
setter.call(obj1,"Anbarasan");
setter.call(obj2,"Anba");

//invoking an anonymous fuction using call
//print function for an Array of object
var animals = [
  { species: 'Lion', name: 'King' },
  { species: 'Whale', name: 'Fail' }
];

for (let i =0; i < animals.length; i++){
  (function(i){
    this.print = function(){
      console.log("#"+i+" "+this.species+" "+this.name);
    }
    this.print();
  }).call(animals[i],i);
}
//Bind Example 
// It's binds the function to the particular object 
obj = {name: 'Anbarasan'};
function getter(){
  return this.name;
}
function setter(age){
  this.age = age;
}

let g = getter.bind(obj);
let s = setter.bind(obj);

console.log(g()); // Anbarasan
s(26);
console.log(obj); // { "name": "Anbarasan", "age": 26 }


//A closure can not only access the variables defined in its outer function but also the arguments of the outer function.
//A closure can also access the variables of its outer function even after the function has returned. 
//This allows the returned function to maintain access to all the resources of the outer function.


function outer(){
  name = 'Anbarasan';
  return function(greet){
    console.log(greet+" "+name+"!");
  }
}
//Without variable creation
outer()("Hi");

//With variable creation
greet = outer();
greet("Hello")

*/

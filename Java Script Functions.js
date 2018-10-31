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
//functions global scope vs local scope
//example:1 
/*
let name = 'Anbarasan'
function fnfunction(){
  name = 'Anba'
  console.log(name)
}
console.log(name);//output: Anbarasan
fnfunction(); //output: Anba
console.log(name); //output: Anba
*/
//exmaple:2 if do not declare variable as var, let or const 
//It will automatically become global variable 
/*
function fncheck(){
  age = 10;
  console.log(age)
}
fncheck();
console.log(age);
*/
//why should we use let instead var?
/*
var  variable = 'Apple'; 
{
  var variable = 'Mango';
}
console.log(variable) //output: Mango 
// above we use let output will be: Apple
*/

//setTimeout Variables are Executed in the Global Scope
//Any variable declared without the var keyword will be a global variable anyway
/*
var Avar = 10, Bvar = 20;
var  myobj = {
  Avar: 3,
  Bavar: 4,
  calcfn : function(){
    setTimeout(function(){console.log(this.Avar*this.Bvar)},200);
  }
}
myobj.calcfn();//output: 200
*/

/*
//Function Declaration Overrides Variable Declaration When Hoisted
var name;
function name(){
  console.log("NaN");
}
console.log(typeof name);

//variable assignment overrides the function declaration
var fname = "Anbarasan"

function fname(){
  console.log("NaN");
}
console.log(typeof fname);
*/
/*
//Example 1: Basic “short circuting” with || (Logical OR)
//This will avoid if condition
function fncheck(title){
  title = title || "untitled"
  console.log(title);
}
fncheck("Welcome!");

*/

/*
//Example 1: Basic “short circuting” with || Logical (||) and (&&)

let username = ""
function login(uname){
  console.log("Welcome! "+uname)
}
function signup(){
  console.log("User Name does not exists please signup!")
}
function validator(username){
  return username
}
validator(username) ? login(username) : signup();

*/

/*
// All the code is wrapped in the IIFE
(function(){
  let name = "Anba"
  function init(n){
     callfn(n);
  }
  
  function callfn(fname){
    docall(fname);
  }
  
  function docall(aname){
    console.log(aname)
  }
  
  init(name);

})();
*/
//Power of conditional scripting
/*
(function(fname){
  uname = [], named = ['A', 'B',]
  fname ?
  (function(fn){
    let filename = fn.toLocaleLowerCase().replace(' ','_')+".txt";
    named.push(filename)
    console.log(filename)
    
  })(fname)
  
  :
  
  (function(fn){
    let filename = named.length + "_unamed.txt"
    uname.push(filename);
    console.log(filename);
  })(fname)
    
})("");

*/

// closure stores variable reference of the outer Function
/*
function exclosure(){
  let voterID = 1990;
  
  return {
    getID: function(){
      console.log(voterID);
    },
    setID: function(value){
     voterID = value;
    }
  }
}

let variable = exclosure();
variable.getID()
variable.setID(1880)
variable.getID()
*/












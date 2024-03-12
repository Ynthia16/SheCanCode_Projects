// this is the function that returns the product of numbers
function myProduct(a,b){
  return a*b 
}
let value= myProduct(10,5);
console.log(value);


// function for doing quadratic equations in Javascript

// we are working on this statement 
// 2x+4x+6=0
delta= Math.pow(4,2)-4*2*6
// math.pow means a number squared as in 4 power 2
console.log(delta)

object={names:"cynthia", model:"500"}


console.log(object.names);  //this is how i can access the value to the key , 
//which means i have the key called names with the value called cynthia

// -------debrief about ARRAYS in functions-----
// *we have local(only used in a function not outside) and global (can be used everywhere)
// variables
const car=[23,23,24,56]
console.log(car[2]);

// if , if else and else statements ,switch statement and if elsif statement

// questions:what is switch statement__
// switch statemnt we use case and break 

// i have to learn also about DATES
const currentDate= new Date()
console.log(currentDate.getFullYear())
console.log(currentDate.getDay())

// if elsif statement 


// === (identical operator) works in when we want to check if their data types and the value are the same//

const a=12
const b="13"

if (a<b){
  console.log("b is greater than a")
}
else if(a>b){
  console.log("b is less than a")
}
else if(a===b){
  console.log("a is equal to b")
}else{
  console.log("not true")
}
// --practice_create variable and store current date make pow by 2 in javascript

let today= new Date().getDate();
myDate=Math.pow(today,2);
// to access math things, so we use math. (dot) always to acces za sqrt and power and other too
console.log(myDate);

// ----LOOPS --- and we have for loops and while loops

for (let i=0; i<5; i++){
  console.log("hello world")
}

// --practices--
const road =[23,45,69,400]
for ( let i=0;i<road.length;i++){

  console.log(road[i])
}
console.log(road);

// if and for loops 

const boat =[23,45,69,400]
for ( let i=0;i<boat.length;i++){
  if(boat[i]%2==0){
    console.log(car[i] +" " +"this number is even")
  }else{
    console.log(car[i] + " " + "this number is odd")
  }
 
}

// ---practice for factorization(factorial)
function factorial(x){
  let y = 1
  if(x<0){
    console.log("Factorial can not be negative")
  }
  for( let i=1; i<=x;i++){
   y *= i
 
  }
return y   //return iza hanze ya loop and if 
}
console.log(factorial(7))


// even and odd numbers---
function checking() {
let num;
for(i=0;i<=20;i++){
  if(i%2 ==0){
    console.log(i)
  }
}

}

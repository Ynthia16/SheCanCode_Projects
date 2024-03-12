// the function that returns the sum of numbers
function sumOfNumbers (a,b){
  if(typeof a && typeof b !== "number"){
    console.log("please input a number");
  }else if (typeof a && typeof b === "number"){
    let y=a+b;
    return y
  }else{
    console.log("error");
  }
}

let sum=sumOfNumbers (5,6);
console.log(`the sum of your numbers is ${sum}`)


// the program that gives us the maximum number in an Array

function maximumNumber(arr){
  if( !Array.isArray(arr)){
    console.log('please input an array')
  }
  else{
  let max = Math.max(...arr);
  return max
  }
}
let x = maximumNumber([1,2,20,3,4]);
console.log(`the maximum number is ${x}`)
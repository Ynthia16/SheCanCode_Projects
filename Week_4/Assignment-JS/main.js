// Write a JavaScript program to display the current day and time in the following format.
// Sample Output : Today is : Tuesday.

const currentDate= ()=>{
    let y= new Date();
    let x=new Date();
    console.log(`Sample Output: Today is ${y.getDay()} at ${x.getHours()}`);
}
currentDate();

// the program that checks the largest number in 3 given integers

const largestInt= (a,b,c)=>{
  let y=Math.max(a,b,c);
  return y
}
console.log(largestInt(20,9,10));

// Write a JavaScript program to check whether three given 
// integer values are in the range 50..99 (inclusive).
// Return true if one or more of them are in the specified range.

const rangeInt= (a,b,c) =>{
    if (50<a && a<=99 || 50<b && b<=99 || 50<b && b<=99){
      return "true";
    }else{
      return "error"
    }
  }
  
  console.log(rangeInt(0,0,0));
  


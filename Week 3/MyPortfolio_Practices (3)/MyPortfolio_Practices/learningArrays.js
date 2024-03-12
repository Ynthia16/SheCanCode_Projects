// ------the most used way , the arrow...
// const result = ()=> {
//   return "Hello world"
// }
// console.log(result());

// ----aho bitandukaniye nuko the arrow way , use const mostly instead of function
// -----the normal way 
// function result(){
//   return "Hello world"
// }
// console.log(result());

// ---what i am going to export 

  export const myList=(a) => {
  if( isNaN(a) && a.length===8 && a.includes("w")){
    return true
  }else{
    return false
  }
}

// another way you can check if the string is a string and not a number
// instead of using typeof we can isNaN-- which means that it is not a number
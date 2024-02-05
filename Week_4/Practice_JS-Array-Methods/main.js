const colors = ['red', 'green', 'blue', 'yellow', 'orange'];
// Using the join() method, create a string that joins all elements 
// of the colors array into a single string separated by commas.

let joinedArray=colors.join(",");
console.log(joinedArray);

// Apply the splice() method to remove the second and third elements
//  from the colors array and replace them with 'purple' and 'pink'.

let splicedMethod= colors.splice(2,2,'purple','pink');
console.log(splicedMethod);
console.log(colors);

// Utilize the copyWithin() method to copy the elements from 
// index 1 to index 3 within the colors array to index 0.

let copyMethod=colors.copyWithin(3,1);
console.log(copyMethod);

// Finally, transform all elements of the colors array
//  to uppercase using the toUpperCase() method.

let upperString= colors.toString();
let upperCase= upperString.toUpperCase();
console.log(upperCase);

// Apply the find() method to find the first element in the colors array that starts 
// with the letter 'b'.

let y =colors.find(color => color.charAt(0)==="b")
console.log(y);

// Apply the slice() method to create a new array selectedColors containing 
// the elements from index 1 to index 3 (inclusive) from the colors array.

let slicedMethod= colors.slice(1,4)
console.log(slicedMethod);
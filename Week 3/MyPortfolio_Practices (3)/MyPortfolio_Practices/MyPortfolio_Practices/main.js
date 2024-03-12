// in javascript, to use it in html , we have to first call it and we call 
// the element or the section we want to put javascript for , 
// we use getelementby(either their id or their classes or)
// and by this i gave it a variable and called it the body and 
// give it the elements that it has to contain 

// DOM- there is what we call dom and this is how we get elements in html and use tem in javascript
var body= document.getElementById("bd")
var section=document.getElementsByClassName("copy")
// the copy is the class name for my copyright paragraph

var copy = getElementsByClassName("copy")

function changeBackground(){
  console.log(copy);
  body.style.backgroundColor="green";
}

copy.addEventListener("click",changeBackground);

function changeTextColor(){
  var colors=["blue","green","yellow","red"]
  var colorPosition = Math.random();
  var length=colors.length;
  var newColor = colors.length;


  // this function is built in and siplays any random number 
  // if you want to display numbers between zero and that number you multipy that number by that nbr
  // ex math.random()*100 ---this means it will display numbers btn o to 100

  var colorPosition =Math.floor(Math.random()*length );
  var newColor = colors[colorPosition]

  section.style.color = newColor;

  // floor.math.random means that the number that is going to be given will not be a decimal nbr
}
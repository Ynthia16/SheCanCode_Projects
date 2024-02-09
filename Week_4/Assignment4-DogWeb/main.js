const body= document.getElementById("body")
const button= document.getElementById("button")
const image= document.getElementsByClassName("image")
const img = document.getElementById("img")
button.addEventListener("click", () => {

    fetch("https://random.dog/woof.json")
    .then(response=> response.json())
    .then(data =>{
        // const image= document.getElementsByClassName("image")
        // if ( image.){

        // }
        img.src=data.url 
    })
    .catch(error=>console.log(error))
})
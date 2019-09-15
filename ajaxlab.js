document.addEventListener("DOMContentLoaded", () => {
    let button = document.querySelector("#button")
    button.addEventListener("click", getRandomImage)
})
// const sayHi = () => {
//     console.log('Clicked!')
// }
const getRandomImage = () => {
    let xhr = new XMLHttpRequest()
    xhr.onreadystatechange = function() {
        if(this.readyState === this.DONE){
            let parsedResponse = JSON.parse(this.response)
    let image = document.querySelector("img")
    image.src = parsedResponse.message
    // console.log(parsedResponse.message)
}}     
xhr.open("GET", "https://dog.ceo/api/breeds/image/random")
xhr.send()
}

const chooseBreed = () => {
    let selectBox = document.querySelector("#select-box")
    let selection = selectBox.value
    if(selection === "pomeranian"){
        let xhr = new XMLHttpRequest()
        xhr.onreadystatechange = function() {
            if(this.readyState === this.DONE){
        let parsedResponse = JSON.parse(this.response)
        let image = document.querySelector("img")
        let numberOfPictures = parsedResponse.message.length
        let randomIndex = Math.floor(Math.random()* numberOfPictures)
        image.src = parsedResponse.message[randomIndex]
    }}     
    xhr.open("GET", "https://dog.ceo/api/breed/pomeranian/images")
    xhr.send()
        }
    }

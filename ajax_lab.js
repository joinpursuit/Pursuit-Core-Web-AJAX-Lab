document.addEventListener("DOMContentLoaded", () => {
    let button = document.querySelector('#button')
    button.addEventListener('click', getRandomImage)

})

const getRandomImage = () => {
   console.log("Clicked!")
   let xhr = new XMLHttpRequest();
   xhr.onreadystatechange = function () {
     if (this.readyState === this.DONE) {
    let parsedResponse = JSON.parse(this.response);
    console.log(parsedResponse)
    let image = document.querySelector("img")
    image.src = parsedResponse.message;
     }
   }
   xhr.open("GET", "https://dog.ceo/api/breeds/image/random")
   xhr.send()
}

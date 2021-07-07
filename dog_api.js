document.addEventListener("DOMContentLoaded", () => {
    let button = document.querySelector('#dog_button')
    button.addEventListener('click', getRandomImage)

})

function getRandomImage() {
    let request = new XMLHttpRequest()
    request.onreadystatechange = function () {
        console.log(this.readyState)
        if (this.readyState === this.DONE) {
            let dogJSON = JSON.parse(this.response)
            let randomDog = dogJSON.message
            console.log(randomDog);
            dogToDOM(randomDog)
        }
    }
    request.open("GET", "https://dog.ceo/api/breeds/image/random")
    request.send(null)
}
let dogPicture = document.createElement('img')

function dogToDOM(dogPic) {
    let container = document.querySelector('#container')
    // let dogPicture = document.createElement('img')
    dogPicture.src = dogPic
    container.appendChild(dogPicture)
    container.replaceChild(dogPic, dogPic)
}
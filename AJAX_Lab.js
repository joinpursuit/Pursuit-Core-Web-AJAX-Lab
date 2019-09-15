document.addEventListener("DOMContentLoaded", () => {
    let button = document.querySelector('#loadAnImage')
    button.addEventListener('click', getRandomImage)
})

const getRandomImage = () => {
    //     console.log("Image is loading")
    let xhr = new XMLHttpRequest()
    xhr.onreadystatechange = function () {
        if (this.readyState === this.DONE) {
            console.log("state", this.response, this.status)
            let parseResponse = JSON.parse(this.response)
            displayImage(parseResponse.message)
        }
    }
    xhr.open("GET", "https://dog.ceo/api/breeds/image/random")
    xhr.send()

}
const displayImage = (pic) => {
    let imageSrc = document.querySelector('#breed-pic')
    imageSrc.src = pic
    console.log(pic)
}
document.addEventListener("DOMContentLoaded", () => {
    let getDogPic = document.querySelector("#that-dog");
    getDogPic.addEventListener("click", getRandomImage)
})

const fetchDog = () => {
    console.log("Button clicked.")
}

const getRandomImage = () => {
    let xhr = new XMLHttpRequest()
    xhr.onreadystatechange = function () {
        if (this.readyState === this.DONE) {
            let parsedResponse = JSON.parse(this.response)
            renderDogPic(parsedResponse.message)
        }
    }
    xhr.open("GET", "https://dog.ceo/api/breeds/image/random")
    xhr.send()
}

const renderDogPic = (dogs) => {
    // console.log(dogs)
    let dogInsert = document.createElement("img")
    if (document.querySelector("img")) {
        let oldDog = document.querySelector("img")
        console.log(oldDog)
        document.body.replaceChild(dogInsert, oldDog)
        dogInsert.src = dogs
    }
    document.body.appendChild(dogInsert)
    dogInsert.src = dogs
}
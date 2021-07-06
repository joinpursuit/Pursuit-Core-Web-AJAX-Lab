document.addEventListener("DOMContentLoaded", () => {
    let button = document.querySelector("#fetch-dog");
    button.addEventListener("click", fetchDogImage)
})

const fetchDogImage = () => {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (this.readyState === this.DONE) {
            let parsedResponse = JSON.parse(this.response)
            let url = parsedResponse.message
            displayImage(url)
        }
    }
    xhr.open("GET", "https://dog.ceo/api/breeds/image/random")
    xhr.send();
}

const displayImage = (url) => {
    let img = document.querySelector("img")
    if (!img){ // No image in DOM. First Click
        let dogPic = document.createElement("img")
        dogPic.src = url
        document.body.appendChild(dogPic)
    } else {
        img.src = url
    }
    // console.log(url)
    // let dogPic = document.createElement("img")
    // dogPic.src = url
    // document.body.appendChild(dogPic)
}
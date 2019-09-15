document.addEventListener("DOMContentLoaded", () => {
    let button = document.getElementById("button")
    button.addEventListener('click', getRandomImage)
})

const getRandomImage = () => {
    let xhr = new XMLHttpRequest()
    xhr.onreadystatechange = function() {
        if(this.readyState === this.DONE) {
            let parseResponse = JSON.parse(this.response)
            renderImage(parseResponse.message)
        
            
        }
    }
    xhr.open("GET", "https://dog.ceo/api/breeds/image/random")
    xhr.send()
}

const renderImage = (user) => {
    let img = document.createElement("img")
    img.src = user
    document.body.appendChild(img)
    let newImg = document.createElement("img")
    newImg.src = user
    document.body.replaceChild(newImg, img)
    
    
}

document.addEventListener("DOMContentLoaded", () => {
    let button = document.getElementById("button")
    button.addEventListener('click', getRandomImage)
})

const getRandomImage = () => {
    let xhr = new XMLHttpRequest()
    xhr.onreadystatechange = function() {
        if(this.readyState === this.DONE) {
            let parseResponse = JSON.parse(this.response)
            let url = parseResponse.message
            renderImage(url)
        
            
        }
    }
    xhr.open("GET", "https://dog.ceo/api/breeds/image/random")
    xhr.send()
}

const renderImage = (url) => {
    let img = document.querySelector("img")
    if(img === null){
        let dogImg = document.createElement(img)
        dogImg.src = url
        document.body.appendChild(dogImg)
    }else {
        img.src = url
    }
    
    
    
    //let img = document.querySelector("img")
    //img.src = url
    
}

document.addEventListener ("DOMContentLoaded", () => {
    let button = document.querySelector("#import")
    button.addEventListener('click', getRandomImage)
    // console.log("Clicked")
})
function getRandomImage () {
    let xhr = new XMLHttpRequest()
    xhr.onreadystatechange = function() {
        if (this.readyState === this.DONE) {
            let parsedResponse = JSON.parse(this.response)
            // console.log(parsedResponse.message)
            displayRandomDog(parsedResponse.message)
        }
        // console.log(this.readyState)
        // console.log(typeof this.response, this.response)
    }
    xhr.open("GET", "https://dog.ceo/api/breeds/image/random") 
    xhr.send()
    // console.log(xhr)
}

const displayRandomDog = (url) => {
    // let ul = document.querySelector("#dog-list") 
    // for (let breed of dogs) {
        console.log(url)
        
        let image = document.createElement("img")
        image.src = url
       document.body.appendChild(image)
 // }
}

// const replaceImage = (url) => {
//     let current = image 
    
// }
 
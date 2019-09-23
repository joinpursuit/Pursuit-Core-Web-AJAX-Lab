document.addEventListener("DOMContentLoaded", () => {
    let button = document.querySelector("#get-random-images")
    button.addEventListener("click", getRandomImage)
})



const getRandomImage = () => {
    console.log("Clicked!")
    let getRequest = new XMLHttpRequest() 
    getRequest.onreadystatechange = function () {
        if (this.readyState === this.DONE) {
            let parsedResponse = JSON.parse(this.response)
            // console.log("parsedResponse", parsedResponse)
            renderImageList(parsedResponse.message)
            console.log("State", this.readyState, this.response)
        }
    }
    getRequest.open("GET", "https://dog.ceo/api/breeds/image/random")
    getRequest.send()
    console.log(getRequest)
}

const renderImageList = (url) => {
    let img = document.body.querySelector("img")
    // console.log("child node?/??", imageDiv.hasChildNodes())
    if(img === null){
        let dogImg = document.createElement("img")
        dogImg.src = url
        document.body.appendChild(dogImg)
    }else{
        let newImg = document.createElement('img')
        newImg.src = url;
        img.parentNode.replaceChild(newImg,imgA);
    }
}




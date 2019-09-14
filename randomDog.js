document.addEventListener("DOMContentLoaded", () => {
    let button = document.querySelector("button")
    button.addEventListener("click", doggy)
})

function doggy() {
    let xhr = new XMLHttpRequest()
    xhr.onreadystatechange = function (){
        if(this.readyState === this.DONE){
            let parsedResponse = JSON.parse(this.response)
            getRandomImage(parsedResponse);
            
        }
    }

    xhr.open("GET", "https://dog.ceo/api/breeds/image/random")
    xhr.send()
    
}


function getRandomImage(input) {  
    let theDiv = document.getElementById("dogDiv")
    if(theDiv.hasChildNodes()){
        let originalImage = document.querySelector("img");
        let image2 = document.createElement("img");
        image2.src = input.message;
        theDiv.replaceChild(image2, originalImage)
    } else {
    let image = document.createElement("img");
    image.src = input.message;
    theDiv.appendChild(image);
    }
}
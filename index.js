document.addEventListener("click", () => {
    //console.log("Clicked!");
    getRandomImage();
})

function getRandomImage() {
    let xhr = new XMLHttpRequest;
    xhr.onreadystatechange = function() {
        if(this.readyState === this.DONE) {
            let parsedResponse = JSON.parse(this.response);
            console.log(parsedResponse);
            let div = document.querySelector("#theDiv");
            let image = div.querySelector("img");
            if(image) {
                let newImg = document.createElement("img");
                newImg.src = parsedResponse.message;
                newImg.id = "newDogImg";
                div.replaceChild(newImg, image); //to replace the img I need to grab it via the query selector
            } else {
                let img = document.createElement("img");
                img.src = parsedResponse.message;
                img.id = "dogImage";
                div.appendChild(img);
            }
        }
    }
    
    xhr.open("GET", "https://dog.ceo/api/breeds/image/random");
    xhr.send();
}

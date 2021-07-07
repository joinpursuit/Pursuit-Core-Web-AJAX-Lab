document.addEventListener("DOMContentLoaded", () => {
   let button = document.querySelector ("#loadDogButton");
   button.addEventListener("click", getRandomImage);
   console.log("Clicked!")
})

function getRandomImage() {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if(this.readyState === this.DONE){
            let response = JSON.parse(this.response);
            console.log(response)
            console.log(response.message)
            let imgSrc = response.message;
            fetchDogImage(imgSrc);

        //    let image = document.querySelector("img");
        //    image.src = response.message;
        }
    }
    xhr.open("GET", "https://dog.ceo/api/breeds/image/random");
    xhr.send();
    console.log(xhr);
}

const fetchDogImage = (url) => {
let img = document.querySelector('img');
// img.src = url
if(!img) {
    let dogImg = document.createElement('img');
     dogImg.src = url
    document.body.appendChild(dogImg);
}
else{
    // img.src = url
    let newDogImg = document.createElement('img')
    newDogImg.src = url;
    img.parentNode.replaceChild(newDogImg, img)
}
} 

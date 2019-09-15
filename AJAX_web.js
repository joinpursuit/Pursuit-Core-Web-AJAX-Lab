document.addEventListener("DOMContentLoaded", () => {
    let button = document.querySelector('#dog-button');
    button.addEventListener('click', getRandomImage);
})

function getData() {
    console.log('clicked');
}
function getRandomImage() {
    let xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
    if(this.readyState === this.DONE){
        let parsedImage = JSON.parse(this.response);
        displayDog(parsedImage.message)
    }
}
xhr.open("GET", "https://dog.ceo/api/breeds/image/random");
xhr.send();
}
const displayDog = (url) => {
        let img = document.querySelector('img');
        if(img === null){ // no picture, first time clicking button
            let dogImg = document.createElement('img');
        dogImg.src = url;
         document.body.appendChild(dogImg);
        } else{
            img.src = url
        }
        }
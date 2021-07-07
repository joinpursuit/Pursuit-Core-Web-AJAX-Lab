document.addEventListener("DOMContentLoaded", () => {
    getBreed();
    let dogButton = document.querySelector('#spawnDoggie')
    dogButton.addEventListener('click', getRandomImage)
    // dogButton.addEventListener('load', getBreed)
})

function getRandomImage () {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (this.readyState === this.DONE) {
            let parseResponse = JSON.parse(this.response)
            // console.log(document.querySelector('#select-list').value)
            getDogImage(parseResponse.message)
        }
    }

    xhr.open("GET", "https://dog.ceo/api/breed/" + currentBreed() + "/images/random"); //+ "" + "/image/random");
    xhr.send();
}

function currentBreed() {
    return document.querySelector('#select-list').value;
}

function getBreed() {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (this.readyState === this.DONE) {
            let parseResponse = JSON.parse(this.response)
            let breedArray = parseResponse.message;
            let selectTag = document.querySelector('#select-list');

            for(let breed in breedArray) {
                // console.log(breed)
                let newOption = document.createElement('option')
                newOption.innerText = breed;
                selectTag.appendChild(newOption)
            }
            
        }
    }

    xhr.open("GET", "https://dog.ceo/api/breeds/list/all")
    xhr.send();
}

const getDogImage = (imgSrc) => {
    let imageHolder = document.querySelector('#dogImage');
    let newImage = document.createElement('img')

    newImage.src = imgSrc;
    newImage.width = 400;
    newImage.id = 'dogImage'

    imageHolder.parentNode.replaceChild(newImage, imageHolder)
    // let parentReference = imageHolder.parentNode;
    // parentReference.replaceChild(newImage, imageHolder);

}

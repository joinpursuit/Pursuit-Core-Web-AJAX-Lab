// Joseph P. Pasaoa
//

document.addEventListener("DOMContentLoaded", () => {
    breedsSelectSetup();
    let button = document.querySelector("#the-button");
    button.addEventListener("click", () => {
        getRandomImageSrc(document.querySelector('#breed-select').value);
    } );
} );

function getRandomImageSrc(breed) {
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (this.readyState === this.DONE) {
      let parsedResponse = JSON.parse(this.response);
      let newImage = document.createElement('img');
      newImage.src = parsedResponse.message;
      newImage.height = "100";
      let flexContainer = document.querySelector("#dogsFlex");
      flexContainer.appendChild(newImage);
    }
  }
  xhr.open("GET", `https://dog.ceo/api/breed/${breed}/images/random`);
  xhr.send(null);
}

function breedsSelectSetup() {
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (this.readyState === this.DONE) {
      let parsedResponse = JSON.parse(this.response);
      let breeds = Object.keys(parsedResponse.message);

      let selectList = document.querySelector('#breed-select');
      for (let breed of breeds) {
        let newBreedChoice = document.createElement('option');
        newBreedChoice.value = breed;
        newBreedChoice.innerText = breed;
        selectList.appendChild(newBreedChoice);
      }
    }
  }
  xhr.open("GET", "https://dog.ceo/api/breeds/list/all");
  xhr.send(null);
}


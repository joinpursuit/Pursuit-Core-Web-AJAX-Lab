document.addEventListener("DOMContentLoaded", () => {
  let button = document.querySelector("#loadDog");
  button.addEventListener("click", getRandomImage);
});

function getRandomImage() {
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (this.readyState === this.DONE) {
      let response = JSON.parse(this.response);
      console.log(response.message);
      showDogs(response.message);
    }
  };
  xhr.open("GET", "https://dog.ceo/api/breeds/image/random");
  xhr.send();
}

function showDogs(dogs) {
  let newImage = document.createElement("img");
  if (document.querySelector("img")) {
    let oldImage = document.querySelector("img");
    console.log(oldImage);
    document.body.replaceChild(newImage, oldImage);
    newImage.src = dogs;
  }
  document.body.appendChild(newImage)
  newImage.src = dogs;
}

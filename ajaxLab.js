document.addEventListener("DOMContentLoaded", () => {
  let button = document.querySelector("button");
  button.addEventListener("click", getRandomImage);
})

const getRandomImage = () => {
  const xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {

    if (this.readyState === this.DONE) {

      let parsedResponse = JSON.parse(this.response);
      let imageSrc = parsedResponse.message;

      displayImage(imageSrc);
      console.log(parsedResponse);
    }
  }
  xhr.open("GET", "https://dog.ceo/api/breeds/image/random");
  xhr.send();
}

const displayImage = (url) => {
  console.log(url);

  let dogImg = document.createElement("img");
  dogImg.src = url;
  document.body.appendChild(dogImg);
}

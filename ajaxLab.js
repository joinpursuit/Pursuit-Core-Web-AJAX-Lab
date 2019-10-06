document.addEventListener("DOMContentLoaded", () => {
  let button = document.querySelector("button");
  button.addEventListener("click", getRandomImage);
})

const getRandomImage = () => {
  console.log("Clicked!");
  const getDogImages = new XMLHttpRequest();

  getDogImages.onreadystatechange = function () {

    if (this.readyState === this.DONE) {

      let parsedResponse = JSON.parse(this.response);
      let imageSrc = parsedResponse.message;

      displayImage(imageSrc);
      console.log(parsedResponse);
    }
  }
  getDogImages.open("GET", "https://dog.ceo/api/breeds/image/random");
  getDogImages.send();
}

const displayImage = (url) => {
  console.log(url);

  let dogImg = document.createElement("img");
  dogImg.src = url;
  document.body.appendChild(dogImg);
}

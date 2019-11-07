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
  let img = document.querySelector("img");

let dogImg = document.createElement("img");
dogImg.src = url;
document.body.appendChild(dogImg);
}

// this code for replacing the image with the next doesn't quite work yet:
//
//   if (img === null) {
//     let dogImg = document.createElement("img");
//     dogImg.src = url;
//     document.body.appendChild(dogImg);
//   } else {
//     let followingDog = document.createElement("img");
//     followingDog.src = url;
//     dogImg.parentNode.replaceChild(followingDog, dogImg);
//   }
// }

document.addEventListener("DOMContentLoaded", () => {
  let clicked = document.querySelector("#button");
  clicked.addEventListener("click", getRandomImage);
  function getRandomImage() {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (this.readyState === this.DONE) {
        console.log("state", this.readyState, this.response);
        let result = JSON.parse(this.response);
        console.log(result.message)
        let img = document.createElement("img");

        img.src = result.message;

        document.body.appendChild(img);
      }
    };

    xhr.open("GET", "https://dog.ceo/api/breeds/image/random");
    xhr.send();
  }
});

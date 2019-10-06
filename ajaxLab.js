document.addEventListener("DOMContentLoaded", () => {
  let button = document.querySelector("button");
  button.addEventListener("click", fetchDogImage);
})

const fetchDogImage = () => {
  const xhr = new XMLHttpRequest();
  //don't forget this below just happens to have to be in ES5 format
  xhr.onreadystatechange = function () {
    //if it's done we want to parse the response
    if (this.readyState === this.DONE) {
      //below we want to easily read our raw JSON data
      let parsedResponse = JSON.parse(this.response);
      let imageSrc = parsedResponse.message;
      //you can do line 14 OR just the below line
      displayImage(imageSrc); //or displayImage(parsedResponse.message) would work
      // console.log('typeof parsedResponse', typeof parsedResponse);
      console.log(parsedResponse);
    }
  }
  xhr.open("GET", "https://dog.ceo/api/breeds/image/random");
  xhr.send();
}

const displayImage = (url) => {
  console.log(url);
  //commenting out original activity, which was just to grab the dog image
  // let img = document.querySelector("img");
  // img.src = url;

  //now we see that when we fetch another dog image we add it to the body of the page
  let dogImg = document.createElement("img");
  dogImg.src = url;
  document.body.appendChild(dogImg);
}

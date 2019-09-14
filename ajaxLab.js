document.addEventListener("DOMContentLoaded", () => {
  let button = document.querySelector("#loadDog");
  button.addEventListener("click", getRandomImage);
});

function getRandomImage() {
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if(this.readyState === this.DONE) {
      // console.log("done", this.DONE)
      // console.log("ready State", this.readyState)
      // console.log(this.readyState);
      let parseResponse = JSON.parse(this.response).message
      console.log(parseResponse)
   //     let randomDogs = dogsJSON.results
      createDOM(parseResponse)
   //   }
    }

  };
  xhr.open("GET", "https://dog.ceo/api/breeds/image/random");
  xhr.send();
}

function createDOM (){
let dogList = document.querySelector()
}

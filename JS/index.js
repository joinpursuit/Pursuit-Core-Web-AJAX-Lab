document.addEventListener("DOMContentLoaded", () => {
  buttonClick();
  getListOfBreeds();
});

const buttonClick = () => {
  let button = document.querySelector("#button");
  button.addEventListener("click", () => {
    getRandomImage();
  });
};

const getRandomImage = () => {
  let xml = new XMLHttpRequest();
  let img = document.querySelector("img");
  let select = document.querySelector("select");
  let pic = document.querySelector("#pic");
  let selectVal = select.value;

  xml.onreadystatechange = function () {
    if (this.readyState === this.DONE) {
      let randomPic = JSON.parse(this.response);
      if (!img) {
        let img = document.createElement("img");
        img.src = randomPic.message;
        pic.appendChild(img);
      } else {
        img.src = randomPic.message;
      }
    }
  };
  if (!selectVal) {
    xml.open("GET", "https://dog.ceo/api/breeds/image/random");
    xml.send(null);
  } else {
    xml.open("GET", `https://dog.ceo/api/breed/${selectVal}/images/random`);
    xml.send(null);
  }
};

const getListOfBreeds = () => {
  let xml = new XMLHttpRequest();
  xml.onreadystatechange = function () {
    if (this.readyState === this.DONE) {
      let data = JSON.parse(this.response);
      let select = document.querySelector("select");
      for (let breed in data.message) {
        let option = document.createElement("option");
        option.innerText = breed;
        option.value = breed;
        select.appendChild(option);
      }
    }
  };
  xml.open("GET", "https://dog.ceo/api/breeds/list/all");
  xml.send(null);
};

// const getImgOfBreed = (breed) => {
//   let xml = new XMLHttpRequest();
//   let img = document.querySelector("img");
//   xml.onreadystatechange = function () {
//     if (this.readyState === this.DONE) {
//       let data = JSON.parse(this.response);
//       console.log(data.message);
//       if (!img) {
//         let img = document.createElement("img");
//         img.src = data.message;
//         document.body.appendChild(img);
//       } else {
//         img.src = data.message;
//       }
//     }
//   };
//   xml.open("GET", `https://dog.ceo/api/breed/${breed}/images/random`);
//   xml.send(null);
// };

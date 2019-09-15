document.addEventListener('DOMContentLoaded', () => {
  fetchDogImage()
  let button = document.querySelector('button')
  button.addEventListener('click', fetchDogImage)
})

const fetchDogImage = () => {
  const xhr = new XMLHttpRequest()
  xhr.onreadystatechange = function() {
    if (this.readyState === this.DONE) {
      let parsedResponse = JSON.parse(this.response)
      let url = parsedResponse.message;
      displayImage(url);
    }
  }

  xhr.open("GET", "https://dog.ceo/api/breeds/image/random")
  xhr.send()
}

const displayImage = (url) => {

  console.log(url)
  let img = document.querySelector('img')
  img.src = url
}

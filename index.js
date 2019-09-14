 document.addEventListener("DOMContentLoaded", () => {
   let button = document.querySelector('#display');
   button.addEventListener('click', getRandomImage)
 })

const getRandomImage = () => {
console.log('clicked')
let xhr = new XMLHttpRequest();
xhr.onreadystatechange = function(){
  if(this.readyState === this.DONE){
    let parsedResponse = JSON.parse(this.response)
    console.log(parsedResponse)
    let image = document.querySelector('img')
    image.src = parsedResponse.message;
  }
}
  xhr.open("GET", "https://dog.ceo/api/breeds/image/random");
  xhr.send()
}

document.addEventListener("DOMContentLoaded", () => {
   let button = document.querySelector ("#loadDogButton");
   button.addEventListener("click", getRandomImage);
   console.log("Clicked!")
})

function getRandomImage() {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if(this.readyState === this.DONE){
            let response = JSON.parse(this.response);
            console.log(response)
            console.log(response.message)

           let image = document.querySelector("img");
           image.src = response.message;
        }
    }
    xhr.open("GET", "https://dog.ceo/api/breeds/image/random");
    xhr.send();
    console.log(xhr);
}


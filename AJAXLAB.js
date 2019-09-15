document.addEventListener('DOMContentLoaded', ()=>{
    let button = document.querySelector('#randomDogButton')
    button.addEventListener('click', getRandomImage)

})

function getRandomImage() {
    console.log("click");
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {

        if(this.readyState === this.DONE) {
            let image =document.createElement('img')
            let parsedResponse = JSON.parse(this.response).message
            console.log('src', parsedResponse)
            image.src = parsedResponse;
            console.log("image", image)
          replaceDog(parsedResponse.message)
            document.body.appendChild(image)
            
        }
    }
    xhr.open('GET', "https://dog.ceo/api/breeds/image/random");
    xhr.send()
}

    


const replaceDog = (dogs) => {
    let newDog = document.createElement('img')
    if(document.querySelector('img')) {
        let firstDog = document.querySelector('img');
        console.log(firstDog);
       document.body.replaceChild(newDog, firstDog)
       newDog.src = dogs

    } 
    document.body.appendChild(newDog)
    newDog.src = dogs
    }
  
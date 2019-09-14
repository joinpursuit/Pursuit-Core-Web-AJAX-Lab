document.addEventListener("DOMContentLoaded", () => {
    let button = document.querySelector('#doggo')
    button.addEventListener('click',getRandomImage)
})

function getRandomImage() {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
       if (this.readyState === this.DONE){
           console.log(this.response)
           let dogObj = JSON.parse(this.response)
           let dogLink = dogObj.message
           getDogImage(dogLink)
       }
    }
    xhr.open('GET',"https://dog.ceo/api/breeds/image/random")
    xhr.send()
}

    function getDogImage(link) {
        let imageHodl = document.querySelector('#image-holder')
        let dogImg = imageHodl.querySelector("img");
        let oldImage = document.createElement('img')
        console.log(imageHodl.hasChildNodes())

        if (dogImg){
            oldImage.setAttribute('src',link)
            imageHodl.replaceChild(oldImage, dogImg)
        }
        else {           
            oldImage.setAttribute('src',link)
            imageHodl.appendChild(oldImage)
            console.log(oldImage)
        }
    }

   
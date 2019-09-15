document.addEventListener("DOMContentLoaded", () => {
    let button = document.querySelector('#button');
    button.addEventListener('click', getRandomImage);
})

const getRandomImage = () => {
    let xhr = new XMLHttpRequest()
    xhr.onreadystatechange = function() {
        if(this.readyState === this.DONE) {
            let parsedResponse = JSON.parse(this.response);
            renderDog(parsedResponse.message) 
            // console.log(parsedResponse.message) 
        }      
    }
    xhr.open("GET", "https://dog.ceo/api/breeds/image/random")
    xhr.send()

}

const renderDog = (dog) => {
    let dogImage = document.querySelector("#dog");
    document.getElementById("dog").src = dog;
}
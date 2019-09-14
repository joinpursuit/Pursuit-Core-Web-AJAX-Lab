document.addEventListener("DOMContentLoaded", () => {
    let button = document.querySelector('#dog-button');
    button.addEventListener('click', getRRandomImage);
})

function getData() {
    console.log('clicked');
}
function getRRandomImage() {
    let xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
    if(this.readyState === this.DONE){
        let parsedImage = JSON.parse(this.response);
        renderPictures(parsedImage.results)
    }
}
xhr.open("GET", "https://dog.ceo/api/breeds/image/random");
xhr.send();
}
const renderPictures = (images) => {
    let usersUl = document.querySelector('#user-list');
    for (let user of users) {
        let userLi = document.createElement('li');
        userLi.innerText = user.name.first + ' ' + user.name.last;
        usersUl.appendChild(userLi);
    }
}
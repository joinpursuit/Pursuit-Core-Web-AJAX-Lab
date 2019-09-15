document.addEventListener('DOMContentLoaded', () => {
	let button = document.getElementById('pupper-button');
	button.addEventListener('click', () => {
		console.log('i was clicked');
		getRandomImage();
	})
})

function getRandomImage(){
	console.log('we got to random image');
	let xml = new XMLHttpRequest();
	xml.onreadystatechange = function(){
		if(this.readyState === this.DONE) {
			appendRandomDog(JSON.parse(this.response));
		}
	}
	xml.open('GET', 'https://dog.ceo/api/breeds/image/random');
	xml.send();
}

function appendRandomDog(pupper){
	let doggie = document.createElement('img');
	doggie.src = pupper.message;
	let imgInDOM = document.querySelector('img');
	let mainBody = document.getElementById('main-content');
	mainBody.replaceChild(doggie, imgInDOM);
}
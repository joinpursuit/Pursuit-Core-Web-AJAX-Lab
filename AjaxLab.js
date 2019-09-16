document.addEventListener("DOMContentLoaded",() =>{
    let button = document.querySelector('#load')
    button.addEventListener('click', getRandomImage)
})


function getRandomImage(){
    console.log("clicked");
     
    let xhr = new XMLHttpRequest();
     xhr.onreadystatechange = function(){
        
        if(this.readyState === this.DONE){
            console.log('state',this.status, this.response)
            // let image = document.createElement("img")
            let imageUrl = JSON.parse(this.response).message
            display(imageUrl);            
           
            // if (image.src === ""){
            //     image.src = imageUrl;
            //     console.log("image", image)
            //     document.body.appendChild(image);
            // }else
            // {
            //     image.src = imageUrl;
            // }
        } 

    }
    xhr.open("Get", "https://dog.ceo/api/breeds/image/random")
    xhr.send()
}

function display(url){
    let img = document.querySelector('img');
    
    if (img === null){//image is null, first time clicking
        let dogimg = document.createElement("img");
        dogimg.src = url
        document.body.appendChild(dogimg)
        console.log(dogimg)

    }else{
        img.src = url
        
        //replace child method.
        // let newImg = document.createElement('img')
        // newImg.src = url;
        //replace child method always needs two arguments
        // img.parentNode.replaceChild(newImg,img);
    }
    console.log(img);
}
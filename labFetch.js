document.addEventListener("DOMContentLoaded",() =>{
    let button = document.querySelector('#load')
    button.addEventListener('click', getRandomImage)
})




function getRandomImage(){
    console.log("clicked");
    // let fetchRequestPromise = fetch("https://dog.ceo/api/breeds/image/random") 
    
    // function handlePromissesSuccess(response){
    //     console.log("promise fulfilled. Response arrived", response)
    //     return response.json();
    // }

    // function handleParsedResponseData(data){
    //     console.log("Data converted/parsed",data)
    //     display(data.message);
        
    // }
    
    // fetchRequestPromise
    // .then(handlePromissesSuccess)//convert response data to json
    // .then(handleParsedResponseData)//parse response data
    
    
    fetch("https://dog.ceo/api/breeds/image/random")
    .then( response => {
      //recieves http response and initiates parsing of response dataa
      return response.json()  
    })
    .then(data =>{
        //recieves the parsed data after successful extractions/conversions
        display(data.message)
    }).catch(err =>{
        console.log("err: " + err);
    })
    
    
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
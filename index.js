document.addEventListener("DOMContentLoaded",()=>{
  
let btn = document.querySelector("button");
btn.addEventListener("click",()=>{
 getRandomImage()
})
})



function getRandomImage() {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "https://dog.ceo/api/breeds/image/random")
    xhr.send()
    xhr.onreadystatechange = function() {
        if(this.readyState === this.DONE){
        let parsed = JSON.parse(this.response)
        print(parsed.message);
       
    }
    }

}
let cond = false
function print(result){
    
    let i2 = document.createElement('img');
    i2.src = result 
  
    if(cond){
        let img = document.querySelector("img");
        document.body.replaceChild(i2,img)
    }
    else{
        let img = document.createElement('img');
        img.src = result 
        document.body.appendChild(img)
        cond = true
    }
}
document.addEventListener("DOMContentLoaded",()=>{
  
let btn = document.querySelector("button");
btn.addEventListener("click",()=>{
 getRandomImage()
})
})



function getRandomImage() {
    let option = document.querySelector("select").value
    console.log(option)
    let xhr = new XMLHttpRequest();
    xhr.open("GET", `https://dog.ceo/api/breed/${option}/images/random`)
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
    let first = document.querySelector("#first")
    let con = document.querySelector("#contain")
    let i2 = document.createElement('img');
    i2.src = result 
    let i3 = document.createElement('img');
    i3.src = result 
    con.appendChild(i3)
    
    if(cond){
        let img = document.querySelector("img");
        first.replaceChild(i2,img)
    }
    else{
        let img = document.createElement('img');
        img.src = result 
        first.appendChild(img)
        cond = true
    }
}
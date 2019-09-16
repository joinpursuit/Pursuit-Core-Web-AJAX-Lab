const randomBtn = document.querySelector('#btn-random');
const randomImg = document.querySelector('#img-random');
const breedSelect = document.querySelector('#breed');
const subBreedSelect = document.querySelector('#sub-breed');
const searchBtn = document.querySelector('#btn-search');
const dogPics = document.querySelector('#dog-pics');

// Stored data from XMLRequest
let dataObj = {};
let dataObjBool = {};
let breedArr = [];

function getRandomImage() {
    const request = new XMLHttpRequest();
    request.onload = function () {
        const response = JSON.parse(this.response);
        randomImg.src = response.message;
        randomImg.width = '250';
    }
    request.open('GET', 'https://dog.ceo/api/breeds/image/random', true);
    request.send();
}


let dataRequestPromise = () => {
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();
        request.onload = function () {
            const response = JSON.parse(this.response);
            const data = response.message;
            // console.log('Data', data);
            if (request.status >= 200 && request.status < 300) {
                return resolve(request.response);
            } else {
                return reject(request.statusText);
            }
        }
        request.open('GET', 'https://dog.ceo/api/breeds/list/all', true)
        request.send();
    });
};

dataRequestPromise()
    .then(data => {
        return JSON.parse(data);
    })
    .then(res => {
        const obj = res.message;
        dataObj = copyObj(obj);
        breedArr = makeBreedsArray(obj);
        dataObjBool = breedsBoolObj(obj);
        console.log('Arr: ', breedArr)
        console.log('Original obj: ', dataObj)
        console.log('Bool obj: ', dataObjBool)
    })
    .catch(error => {
        console.log(error);
    })

const breedsBoolObj = (obj) => {
    const newObj = {};
    for (let key in obj) {
        // console.log(typeof key);
        if (obj[key].length > 0) {
            newObj[key] = true;
            // console.log(newObj[key]);
        } else {
            newObj[key] = false;
            // console.log(newObj[key]);
        }
    }
    return newObj
}

function makeBreedsArray(obj) {
    const arr = [];
    for (let ele in obj) {
        arr.push(ele);
        const breedOption = document.createElement('option');
        breedOption.value = ele;
        breedOption.innerText = ele;
        breedSelect.appendChild(breedOption);
    }
    return arr;
    // console.log('Breed Array: ', breedArr);
}

function copyObj(obj) {
    let newObj = {};
    for (let key in obj) {
        newObj[key] = obj[key];
    }
    return newObj;
}

function getAllSubBreeds(obj) {
    breedArr.forEach(ele => {
        const breedData = data[ele];
        console.log(breedData);
    })
}

randomBtn.addEventListener('click', getRandomImage);

window.addEventListener('DOMContentLoaded', dataRequestPromise);

breedSelect.addEventListener('change', () => {
    const select = document.querySelector('#breed');
    const selected = select.value;
    const currentBreed = dataObj[selected];
    console.log(selected)
    console.log(dataObj[selected])
    if (currentBreed.length > 0) {
        subBreedSelect.innerHTML = '';
        currentBreed.forEach(ele => {
            const none = document.createElement('option');
            none.value = `${ele}`;
            none.innerText = `${ele}`;
            subBreedSelect.appendChild(none);
        })

        console.log('first');
    } else {
        subBreedSelect.innerHTML = '';
        const none = document.createElement('option');
        none.value = 'None'
        none.innerText = 'None';
        subBreedSelect.appendChild(none);

        console.log('second');
    }
})

searchBtn.addEventListener('click', () => {
    breed = breedSelect.value;
    subBreed = subBreedSelect.value;
    fetch(`https://dog.ceo/api/breed/${breed}/images`)
        .then(response => {
            return response.json();
        })
        .then(data => {
            let urlArr = data.message;
            console.log(urlArr[0])
            const img = document.createElement('img');
            let chosenLink = '';
            let filteredArr = [];
            // console.log(urlArr);
            if (subBreed !== 'None') {
                filteredArr = urlArr.filter(ele => {
                    return ele.includes(`${breed}-${subBreed}`);
                })
                console.log(filteredArr)
                const randomLink = Math.floor(Math.random() * filteredArr.length);
                chosenLink = filteredArr[randomLink];
            } else {
                const randomLink = Math.floor(Math.random() * urlArr.length);
                chosenLink = urlArr[randomLink];
            }
            
            img.src = chosenLink;
            img.width = '250';
            dogPics.appendChild(img);
            // console.log(urlArr)
        })
        .catch(error => {
            console.log(error);
        })
})

// DATI

const imgGroup = ["./img/01.jpg", "./img/02.jpg", "./img/03.jpg", "./img/04.jpg", "./img/05.jpg"];
const imgElem = document.querySelector(".items");

// INSERIMENTO DINAMICO

let innerString = "";

for (let i = 0; i < imgGroup.length; i++) {
    let curImg = imgGroup[i]
    console.log(curImg)
    innerString += `<div class="item"><img src="${curImg}" alt=""></div>`
}

imgElem.innerHTML += innerString

// MANIPOLAZIONE ELEMENTI : MOSTRARE IMMAGINI

const itemElem = document.querySelectorAll(".item")
console.log(itemElem)


// Mostrare la prima immagine

let curItemIndex = 0
itemElem[curItemIndex].classList.add("active")

document.querySelector(".next").addEventListener("click", function () {

    if (curItemIndex < itemElem.length - 1) {
        itemElem[curItemIndex].classList.remove("active")
        curItemIndex++
        itemElem[curItemIndex].classList.add("active")
    }else if (curItemIndex === itemElem.length - 1){
        itemElem[curItemIndex].classList.remove("active")
        curItemIndex = 0
        itemElem[curItemIndex].classList.add("active")
    }
    

})

document.querySelector(".prev").addEventListener("click", function(){
    if (curItemIndex > 0) {
        itemElem[curItemIndex].classList.remove("active")
        curItemIndex--
        itemElem[curItemIndex].classList.add("active")
    } else if (curItemIndex === 0 ) {
        itemElem[curItemIndex].classList.remove("active")
        curItemIndex = itemElem.length - 1
        itemElem[curItemIndex].classList.add("active")
    }
})

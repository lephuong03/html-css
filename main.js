const toggleHeaderEle = document.querySelector("header .toggle_menu")
const navEle = document.querySelector("header nav")
const closeHeaderEle = document.querySelector("header .close")
const filterBtnEle = document.querySelector(".filter_sp")
const categoryEle = document.querySelector(".wrapper_list .category")
const totopBtnEle = document.querySelector(".to_top")
const mineBtnEle = document.querySelector(".mine")
const plusBtnEle = document.querySelector(".plus")
const quantityInput = document.querySelector(".count input")
let show = true

if(mineBtnEle) {
    mineBtnEle.addEventListener("click", function(e){
        e.preventDefault()
        let value = quantityInput.value
        if(quantityInput.value >=2) {
            quantityInput.value = parseInt(value) - 1
        }
    })
}

if(plusBtnEle) {
    plusBtnEle.addEventListener("click", function(e){
        e.preventDefault()
        let value = quantityInput.value
        quantityInput.value = parseInt(value) + 1
    })
}
toggleHeaderEle.addEventListener("click", function(){
    toggleClassActive(navEle);
})
closeHeaderEle.addEventListener("click", function(){
    removeClassActive(navEle)
})
if(filterBtnEle) {
    filterBtnEle.addEventListener("click", function(){
        toggleClassActive(categoryEle)
    })
}
totopBtnEle.addEventListener("click",function(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})

document.onclick = function () {
    if(show) {
        removeClassActive(navEle)
        removeClassActive(categoryEle)
    }
    show = true
}

window.onscroll = function() {
  if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
    totopBtnEle.style.display = "block";
  } else {
    totopBtnEle.style.display = "none";
  }
}

function toggleClassActive ( ele ) {
    ele.classList.add('active')
    show = false
}
function removeClassActive ( ele ) {
    ele.classList.remove("active")
    show = false
}
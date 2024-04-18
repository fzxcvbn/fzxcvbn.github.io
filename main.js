let mainscreen = document.querySelector(".mainscreen")
let chatscreen = document.querySelector(".editscreen")
let chatButton = document.querySelector(".editbutton")
let back = document.querySelector(".editscreen button")
let weightInput = document.querySelector("input[name=weight]")
let weightSpan = document.querySelector(".weight")


chatButton.addEventListener("click", function() {
    mainscreen.style.display = 'none'
    chatscreen.style.display = 'block'
})

back.addEventListener("click", function() {
    weightSpan.innerHTML = weightInput.value
    mainscreen.style.display = 'block'
    chatscreen.style.display = 'none'
})


let mainscreen = document.querySelector(".mainscreen")
let chatscreen = document.querySelector(".chatscreen")
let chatButton = document.querySelector(".chat_button")
let back = document.querySelector(".back")
let msgUser = document.querySelector(".msg-user")
let msgSupport = document.querySelector(".msg-support")
let input = document.querySelector(".msg")
let send = document.querySelector(".send")
let msgUserText = document.querySelector(".msg-user p")

chatButton.addEventListener("click", function() {
    mainscreen.style.display = 'none'
    chatscreen.style.display = 'block'
})

back.addEventListener("click", function() {
    mainscreen.style.display = 'block'
    chatscreen.style.display = 'none'
})

send.addEventListener("click", function(evt) {
    evt.preventDefault()
    msgUserText.innerHTML = input.value
    input.value = ""

    setTimeout(function() {
        msgUser.style.display = 'flex'
    },500)
    setTimeout(function() {
        msgSupport.style.display = 'flex'
    },2000)
})
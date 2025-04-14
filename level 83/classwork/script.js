let simbols = "1234567890abcdef"
let hex = "#"
let button = document.getElementById('button')
let h1 = document.getElementById("h1")
let body = document.getElementById("body")
let sound = document.getElementById("sound")
button.addEventListener('click', function(){
    for(let i = 0; i < 6; i++){
        let random = Math.floor(Math.random()*16)
        hex += simbols[random]
    }
    h1.innerHTML = hex
    body.style.backgroundColor = hex
    hex = "#"
    sound.play()


})

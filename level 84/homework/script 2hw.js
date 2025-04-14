// 2)ჩართეთ თქვენი ფანტაზია და ნასწავლი მასალის გამოყენებით შექმენით რაიმე საინტერესო და ლამაზი,ვისიც ყველაზე მეტად მომეწონება დაეწერება შესაბამისი Aura. წარმატებები ❤️ 
let alpha = "abcdefghijklmnopqrstuvwxyz"
let p = document.querySelector("p")
document.addEventListener("keydown", function(event){
    if(event.key == "Backspace"){
        p.innerText = ""
    }else if(event.key == "a" || event.key == "b" || event.key == "c" || event.key == "d" || event.key == "e" || event.key == "f" || event.key == "g" || event.key == "h" || event.key == "i" || event.key == "j" || event.key == "k" || event.key == "l" || event.key == "m" || event.key == "n" || event.key == "o" || event.key == "p" || event.key == "q" || event.key == "r" || event.key == "s" || event.key == "t" || event.key == "u" || event.key == "v" || event.key == "w" || event.key == "x" || event.key == "y" || event.key == "z" || event.key == "." || event.key == ","){
        p.innerHTML += event.key
    }else if(event.key == " ")[
        p.innerText += " "
    ]
})

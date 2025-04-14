// 1)შექმენით დოკუმენტში რამდენიმე ერთნაირი ელემენტი და querySelector()ის და  querySelectorAll() ის გამოყენებით javascript-იდან შეუცვალეთ სტილები
let h1 = document.querySelector("h1")
h1.style.color = "red"
let p = document.querySelectorAll("p")
for(let i of p){
    i.style.backgroundColor = "blue"
    i.style.color = "white"
}







// 2)createElement-ის გამოყენებით შექმენით ერთი მშობელი div-ელემენტი, ეს div-ი ჩაამატეთ body-ში , შემდეგ ამ მშობელ div-ში ჩაამატეთ კიდევ ორი შვილი div-ი და განალაგეთ ვერტიკალურად ერთმანეთისგან თანაბარი დაშორებით ,  პირველი დივი იყოს წითელი მეორე იყოს მწვანე , ასევე დაუმატეთ სასურველი სტილები 
let div = document.createElement("div")
div.style.height = "40px"
div.style.width = "40px"
div.style.backgroundColor = "black"
document.body.appendChild(div)
div.style.display = "flex"
div.style.flexDirection = "column"
div.style.justifyContent = "center"
div.style.alignItems = "center"


let div2 = document.createElement("div")
div2.style.height = "15px"
div2.style.width = "15px"
div2.style.backgroundColor = "red"
div.appendChild(div2)

let div3 = document.createElement("div")
div3.style.height = "15px"
div3.style.width = "15px"
div3.style.backgroundColor = "green"
div.appendChild(div3)














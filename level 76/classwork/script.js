// 1)შექმენით რამდენიმე თეგი HTML-ში და javascript-ის გამოყენებით მიეცით სასურველი სტილები და შეუცვალეთ კონტენტი
let pu = document.getElementsByTagName("p")
pu[0].innerHTML = "tornike"




// 2)შექმენით ფუნქცია რომელიც შეცვლის ელემენტის შიგთავსს , გამოიყენეთ onClick - მეთოდი 
let h1 = document.getElementsByTagName("h1")
function change(){
    h1[0].innerHTML = "tornike"
}

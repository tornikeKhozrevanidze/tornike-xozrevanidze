// 1) საიტზე დაამატეთ ტექსტი. გაუწერეთ მას Javascript-ის კოდი ისე, რომ ტექსტზე დაჭერისას შეიცვალოს იგი და ეკრანზე მის ნაცვლად გამოვიდეს ახალი წინადადება;
let p = document.createElement("p")
document.body.appendChild(p)
p.innerHTML = "tornike"
p.addEventListener("click", function(){
    p.innerHTML = "khozrevanidze"
})
p.addEventListener("click", function(){
    p.innerHTML = "ტორნიკე"
})



// 2) დაამატეთ საიტზე ფოტო, რომელზე მაუსის გადატარებისას, უნდა შეიცვალოს ეს ფოტო. მაუსის გაწევისას კი დაუბრუნდეს ისევ საწყის ფოტოს.
let img = document.createElement('img')
document.body.appendChild(img)
img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREHjj0QVmfJLo5BrdEKQZ5td36QsOqjgTQFg&s"
img.style.width = "500px"
img.style.height = "500px"
img.addEventListener("mouseover", function(){
    img.src = "https://cdn-imgix.headout.com/media/images/c9db3cea62133b6a6bb70597326b4a34-388-dubai-img-worlds-of-adventure-tickets-01.jpg?auto=format&w=1222.3999999999999&h=687.6&q=90&fit=crop&ar=16%3A9&crop=faces"
    img.style.width = "500px"
    img.style.height = "500px"
})
img.addEventListener("mouseout", function(){
    img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREHjj0QVmfJLo5BrdEKQZ5td36QsOqjgTQFg&s"

})



// 3) გააკეთეთ ისეთივე ფუნქციონალი Javascript-ის მეშვეობით რაც გაკვეთილზე გავაკეთეთ, თუმცა ამჯერად მომხმარებელს პირველი Input-ის ველში შემოატანინეთ სიტყვა. მეორე ინფუთის ველში კი თავიდან გაამეორებინეთ თავდაპირველად შემოტანილი სიტყვა. იმ შემთხვევაში თუ შემოტანილი ორი მნიშვნელობა არ ემთხვევა ერთმანეთს, console-ში გამოიტანეთ "The values should be equal and not blank". ხოლო თუ ემთხვევა - "The operation was successful".
let form = document.createElement("form")
document.body.appendChild(form)
form.innerHTML = "<label for='number'>text: </label><input type='text' id='number'> <br><br><label for='repeat'>repeat: </label><input type='text' id='repeat'> <br><br><input id='submit' type='submit'>"

function tt(){
    event.preventDefault()
    let num = document.getElementById("number")
    let rep = document.getElementById("repeat")
    let nu = num.value
    let re = rep.value  
    if(nu != "" && re != "" && nu == re){
        console.log("The operation was successful")
    }else{
        console.log("The values should be equal and not blank")
    }
}

form.addEventListener("submit", tt)
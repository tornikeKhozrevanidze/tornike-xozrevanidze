// 1) კომენტარის სახით ახსენით, თუ როგორ მუშაობს EventListener-ები და მოიყვანეთ მისი გამოყენების ერთ-ერთი მაგალითი;

let p = "მისი დახმარებით შეგვიძლია ჩვენს მიერ გაწწერილ ფუნქციას განვუსაზღროთ მოვლენა, რომლის შემდეგაც შესრულდება ეს ჩვენი ფუნქცია"







// 2) საიტზე დაამატეთ 3 ფოტო, რომლებსაც გაცენტრავთ და დიზაინის მხრივ დახვეწავთ. საიტზე მოცემული სამი ფოტოდან პირველი ორის შემთხვევაში მათზე მაუსის გადატარებისას შეიცვალოს ეს ფოტოები და კურსორის გაწევის შედეგად ისევ დაუბრუნდეს თავდაპირველ ფოტოს, ხოლო მესამე ფოტო დაჭერის შედეგად ჩაანაცვლეთ სხვა ფოტოთი, ამ შემთხვევაშიც უნდა უბრუნდებოდეს საწყის ფოტოს კურსორის გაწევის შემდეგ;
let body = document.body
let sec = document.createElement("section")
body.appendChild(sec)
sec.style.width = "100%"
sec.style.display = "flex"
sec.style.justifyContent = "space-between"
sec.style.alignItems = "center"
sec.style.marginBottom = "30px"
let img1 = document.createElement("img")
img1.src = "https://images.unsplash.com/photo-1520209759809-a9bcb6cb3241?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1nfGVufDB8fDB8fHww"
let img2 = document.createElement("img")
img2.src = "https://st4.depositphotos.com/40171568/40841/i/450/depositphotos_408412352-stock-photo-papar-sabah-malaysia-circa-november.jpg"
let img3 = document.createElement("img")
img3.src = "https://st4.depositphotos.com/2003159/29715/i/450/depositphotos_297154174-stock-photo-mother-and-son-having-fun.jpg"
sec.appendChild(img1)
sec.appendChild(img2)
sec.appendChild(img3)
img1.style.width = "20%"
img2.style.width = "20%"
img3.style.width = "20%"

function first(){
    img1.src = "https://st4.depositphotos.com/40171568/40841/i/450/depositphotos_408412352-stock-photo-papar-sabah-malaysia-circa-november.jpg"
    img2.src = "https://images.unsplash.com/photo-1520209759809-a9bcb6cb3241?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1nfGVufDB8fDB8fHww"
}
function first2(){
    img2.src = "https://st4.depositphotos.com/40171568/40841/i/450/depositphotos_408412352-stock-photo-papar-sabah-malaysia-circa-november.jpg"
    img1.src = "https://images.unsplash.com/photo-1520209759809-a9bcb6cb3241?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1nfGVufDB8fDB8fHww"
}
img1.addEventListener("mouseover", first)
img2.addEventListener("mouseover", first)
img1.addEventListener("mouseout", first2)
img2.addEventListener("mouseout", first2)

function third(){
    img3.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQATVw9KUU2-gePmreEfOPr1S4g4fOKKPlwBA&s"
}
function third2(){
    img3.src = "https://st4.depositphotos.com/2003159/29715/i/450/depositphotos_297154174-stock-photo-mother-and-son-having-fun.jpg"
}
img3.addEventListener("click", third)
img3.addEventListener("mouseout", third2)


// 3) საიტზე დაამატეთ ერთი ფოტო. მასზე დაჭერის შედეგად უნდა იცვლებოდეს იგი მეორე ფოტოთი, ხოლო მეორე ფოტოზე მაუსის გადატარების შემთხვევაში ისიც უნდა ჩანაცვლდეს ამჯერად კიდევ განსხვავებული მესამე ფოტოთი. მესამე ფოტოზე კიდევ ერთხელ დაჭერა უნდა იწევევდეს თავდაპირველი ფოტოს დაბრუნებას;
let img = document.createElement("img")



let ob = {
    first : "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/d9/fa/1b/lost-valley.jpg?w=900&h=500&s=1",
    sec : "https://www.citytour.ae/bigImage/020240507-1305079355838.jpg",
    third : "https://cdn-imgix.headout.com/tour/7064/TOUR-IMAGE/b2c74200-8da7-439a-95b6-9cad1aa18742-4445-dubai-img-worlds-of-adventure-tickets-02.jpeg?auto=format&w=900&h=562.5&q=90&fit=crop&ar=16%3A10"
}
img.src = "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/d9/fa/1b/lost-valley.jpg?w=900&h=500&s=1"
document.body.appendChild(img)
function f(){
    if(img.src == ob.first){
        img.src = "https://www.citytour.ae/bigImage/020240507-1305079355838.jpg"

    }else if(img.src == ob.sec){
        img.src = "https://cdn-imgix.headout.com/tour/7064/TOUR-IMAGE/b2c74200-8da7-439a-95b6-9cad1aa18742-4445-dubai-img-worlds-of-adventure-tickets-02.jpeg?auto=format&w=900&h=562.5&q=90&fit=crop&ar=16%3A10"
    }else{
        img.src = "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/d9/fa/1b/lost-valley.jpg?w=900&h=500&s=1"
    }
}
img.addEventListener("click", f)










// 4) შექმენით სარეგისტრაციო ვებ-საიტი, რომელიც დიზაინის მხრივ მაქსიმალურად დახვეწავთ. მომხმარებელს Input ველებში შემოატანინეთ Email, Password და კიდევ ერთხელ გაამეორებინეთ Password, აუცილებლად დაამატეთ Submit ღილაკიც. გაიხსენეთ ფუნქცია, რომელიც გაკვეთილზე გავაკეთეთ და თქვენით დაამატეთ მსგავსი ფუნქციონალი თქვენს სარეგისტრაციო საიტზე. იმ შემთხვევაში თუ შეყვანილი პაროლი და გამეორებული პაროლი არ ემთხვევა ერთმანეთს alert box-ში გამოიტანეთ "Passwords do not match eachother. Try again.", თუ ორივე პაროლის შესაყვანი ველი ცარიელი იქნება გამოიტანეთ "Input fields cannot be empty.", ხოლო იმ შემთხვევაში თუ  შეყვანილი პაროლი და გამეორებული პაროლი ემთხვევა ერთმანეთს alert box-ში "Your login was successful" გამოიტანეთ;
let form = document.createElement("form")
document.body.appendChild(form)
form.innerHTML = "<label for='email'>email   </label><input type='email' id='email'> <br><br> <label for='number'>password  </label><input type='text' id='number'> <br><br><label for='repeat'>repeat password  </label><input type='text' id='repeat'> <br><br><input id='submit' type='submit'>"

function tt(){
    event.preventDefault()
    let num = document.getElementById("number")
    let rep = document.getElementById("repeat")
    let nu = num.value
    let re = rep.value  
    if(nu != "" && re != "" && nu == re){
        alert("Your login was successful")
    }else if(nu == "" && re == ""){
        alert("Input fields cannot be empty.")
    }
    else{
        alert("Passwords do not match eachother. Try again.")
    }
}

form.addEventListener("submit", tt)








// 5) Sololearn-ში გაიარეთ Form validation და Module 4 Quiz. (+ გადაიმეორეთ EventListener-ები).
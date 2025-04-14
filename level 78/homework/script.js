
// level 78:
//  1)ნასწავლი მასალის დახმარებით გააკეთეთ სურათების სლაიდერი , დაუმატეთ რაიმე კარგი დიზაინი თქვენი წარმოსახვით
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



// 1)შექმენით ობიექტი car , რომელსაც ექნება 5 key -  company(მწარმოებელი) , model , milage ,year , condition , ამ ობიექტში ასევე უნდა იყოს შენახული ფუნქცია , ამ ფუნქციას პარამეტრად ჰქონდეს condition ,და ამ ფუნქციაში შეამოწმეთ , რომ თუ condition-არის კარგი ან ცუდი დაბეჭდეთ შემდეგი ტექსტი car is in {condition} condition გამოიყენეთ format-ი

const car = {
    company : "ifbj",
    model : "oifvvd",
    milage : "oidfbvo",
    year : 2132,
    condition : "good",
    func(){
        if(this.condition == "good"){
            return "car is in good condition"
        }
    }
}
console.log(car.func());





// 2)არსებულ car ობიექტს , ობიექტის გარედან დაამატეთ color  და price  , ასევე ამოშალეთ milage , შემდეგ ყველაფერი გამოსახეთ console-ში 

car.color = "blue"
car.price = 1000
delete car.milage
console.log(car)









// 3) შექმენით ობიექტი user , ამ ობიექტში შეინახე შესაბამისი key-ები , for in - ციკლის  გამოყენებით გადაუარე თითოეულ key-ს და გამოსახე console-ში
const user = {
    name : "tornike",
    surname : "khozrevanidze",
    age : 18
}
for(let i in user){
    console.log(i + " = " + user[i])
}











// 4)შექმენი ობიექტი სახელად student რომელსაც ექნება fullName , scores(scores-უნდა იყოს სია რადგან შეინახოთ რამდენიმე მნიშვნელობა) , ასევე ექნება ორი ფუნქცია 1)averageScore()- რომელიც გამოითცლის საშუალო ქულას , 2)checkStudent() - რომელიც გამოითლის მოსწავლის დონეს ქულების მიხედვით , თუ საშუალო ქულა იქნება 90-ზე მეტი გამოსახეთ კონსოლში შემდეგი ტექსტი ("საუკეთესო სტუდენტი")  , თუ საშუალო ქულა იქნება 90 ზე დაბალი და 60 ზე მაღალი გამოსახეთ "კარგი მოსწავლე" , ხოლო თუ საშუალო ქულა იქნება 60 ზე დაბალი გამოსახეთ "ნორმალური მოსწალე"
const student = {
    fullname : "tornike khozrevanidze",
    scores : [2, 6, 7, 56, 35, 12, 12, 12, 122, 222, 333, 8, 2 ],
    averageScore(){
        let k = 0
        for(let i of this.scores){
            k += i
        }
        return k / this.scores.length
    },
    checkStudent(){
        if(this.averageScore() > 90){
            return "best student"
        }
        else if(this.averageScore() > 60){
            return "good student"
        }
        else{
            return "normal student"
        }
        
    }
}
console.log(student.checkStudent())
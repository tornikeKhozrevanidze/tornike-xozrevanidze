//1) შექმენით ობიექტი სახელად myInfo სადაც შეინახავთ თქვენს სახელს, გვარს, ასაკს და ჰობის
console.log("1) pirveli")
const info = {
    name : "tornike",
    surname : "khozrevanidze",
    age : 18,
    hobby : "guitar"
}
console.log(info)

//2) შექმნილი ობიექტიდან გამოიტანეთ ყველა მნიშვნელობა ცალ-ცალკე და შემდეგ ობიექტს დაამატეთ თქვენი ჯგუფი
console.log("------------------------------------------------")
console.log("")
console.log("2) meore")
console.log(info.name)
console.log(info.surname)
console.log(info.age)
console.log(info.hobby)
info.height = 171
console.log(info)

//3) Prompით მომხმარებელს შემოატანინეთ მისი სახელი, გვარი, ასაკი და ჰობი, შემდეგ ეს ინფორმაცია შეინახეთ ობიექტში, ასევე ამ ობიექტს დაუმატეთ ფუნქცია, რომლის გამოძახებაზეც კონსოლში გამოიტანს "Welcome {name}"
console.log("------------------------------------------------")
console.log("")
console.log("3) mesame")
let name1 = prompt("enter name: ");
let surname1 = prompt("enter surname: ");
let age1 = prompt("enter age: ");
let hobby1 = prompt("enter hobby: ");
const inffo = {
    welcome(){
        console.log("welcome " + this.name2)
    }
}
inffo.name2 = name1
inffo.surname2 = surname1
inffo.age2 = age1
inffo.hobby2 = hobby1
console.log(inffo)
inffo.welcome()




//4) შექმნილი ობიექტებიდან გამოიტანეთ მხოლოდ Keyები შემდეგ კი მხოლოდ Valueები
console.log("------------------------------------------------")
console.log("")
console.log("4) meotxe")
console.log(Object.keys(info))
console.log(Object.values(info))



//5) შექმნილ ობიექტს გადაუარეთ for ციკლით და გამოიტანეთ key და value შემდეგი ფორმატით: "{key} is {value}"
console.log("5) mexute")
for(let i in info){
    console.log(i + " is " + info[i])
}



// შექმენით ქვემოთ მოცემული ობიექტის მსგავსი ობიექტი თქვენს სასურველ მანქანაზე და დაამატეთ ფუნქცია CarFullInfo, რომლის გამოძაღებაზეც გამოიტანს მთლიან ინფორმაციას მანქანაზე(აუცილებლად გამოიყენეთ string formatting
console.log("------------------------------------------------")
console.log("")
console.log("6) meeqvse")
const carInfo = {
    brand : "toyota",
    model :"camry",
    year : 2021,
    color : "blue",
    isElectric : "false",
    info(){
        return "brand is " + this.brand + ", model is " + this.model + ", year is " + this.year + ", color is " + this.color + ", is electric? " + this.isElectric
    }



}
console.log(carInfo.info())
// 4) შექმენი ორი input შეადარე ორი რიცხვი და დაბეჭდე შედეგი.
//     5) შექმენი 2 ცვლადი შეამოწმე, ტოლია თუ არა ორი რიცხვი. 
//     6) მომხმარებელს შემოახანინე input შეამოწმე, არის თუ არა რიცხვი 50-ზე ნაკლები.
//     7)შემოიტანე 2 input შეამოწმე, არის თუ არა ორი რიცხვის ჯამი 100-ზე მეტი.
//     8) მომხარებელს შემოატანინე input შეამოწმე, არის თუ არა რიცხვი 10-ზე მეტი ან ტოლი.
//     9)შემოიტანე 1 input და 1 ცლადი შეადარე, არის თუ არა ერთი რიცხვი მეორეზე ნაკლები ან ტოლი.
let num1 = Number(prompt("4) first num"))
let num2 = Number(prompt("4) second num"))
console.log("4) "+ (num1 > num2));

let num3 = 10
let num4 = 10
console.log("5) "+ (num3 == num4))

let num5 = Number(prompt("6) num"))
console.log("6) "+ (num5 < 50))

let num6 = Number(prompt("7) first num"))
let num7 = Number(prompt("7) second num"))
console.log("7) " + ((num6 + num7) > 100))


let num8 = Number(prompt("8) num"))
console.log("8) " + (num8 >= 10))

let variable = 10
let num9 = Number(prompt("9) num"))
console.log("9) " + (variable >= num9))
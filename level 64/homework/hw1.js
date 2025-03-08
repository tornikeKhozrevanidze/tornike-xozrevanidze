// 1) შექმენით 4 ცვლადი თითოეულ მათგანს მნიშვნელობად მიანიჭეთ განსხავებული რიცხვები შემდეგ კი ამ რიცხვებით რომლებსაც ინახავთ ცვლადებში ყველა შესაძლო კომბინაციით შეასრულეთ ოთხი მათემატიკური მოქმედება: მიმატება, გამოკლება, გამრავლება, გაყოფა ისე რომ დაიბეჭდოს თვითონ მოქმედება და პასუხი მაგ. ავიღოთ ორი რიცხვი 3 და 4 ამ ორი რიცხვის შემთხვევაში შედექი იქნება 3 + 4 = 7
// 3 - 4 = -1 და ასე შემდეგ ყველა შესაძლო რიცხვების კომბინაციით და მოქმედებით
let num1 = prompt("enter number")
let num2 = prompt("enter number")
let num3 = prompt("enter number")
let num4 = prompt("enter number")

let num5 = Number(num1)
let num6 = Number(num2)
let num7 = Number(num3)
let num8 = Number(num4)
console.log(num1 + " + " + num2 + " + " + num3 + " + " + num4 + " = " + (num5 + num6 + num7 + num8));

console.log(num1 + " - " + num2 + " - " + num3 + " - " + num4 + " = " + (num5 - num6 - num7 - num8));

console.log(num1 + " * " + num2 + " * " + num3 + " * " + num4 + " = " + (num5 * num6 * num7 * num8));

console.log(num1 + " / " + num2 + " / " + num3 + " / " + num4 + " = " + (num5 / num6 / num7 / num8));

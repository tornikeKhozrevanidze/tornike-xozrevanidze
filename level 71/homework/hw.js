// 1)დაწერეთ JavaScript-ის პროგრამა რომელიც დაითვლის სიაში ელემენტების რაოდენობას, შედეგი გამოიტანეთ კონსოლში
let arr = [2, 5, 2, 7]
console.log(arr.length)




// 2)for-ციკლის გამოყენებით იპოვეთ სიაში ყველაზე დიდი და ყველაზე პატარა რიცხვები
let arr2 = [2, 5, 1, 7, 9]
let num = arr2[0]
for(let i of arr2){
    if(i < num){
        num = i
    }
}
console.log(num)






// 3)შექმენით სია, ამ სიაში შეინახეთ String-ტიპის მონაცემები და for-ციკლის გამოყენებით ახალ სიაში დაამატეთ ძველი სიიდან ყოველი სიტყვის პირველი ასო
let arr3 = ["dsgs", "pijs", 'ferihkns']
let newStr = []
for(let i = 0; i < arr3.length; i++){
    newStr.push(arr3[i][0])
}
console.log(newStr)




// 4)შექმენით სია სადაც იქნება user-ების სახელი და გვარი და ახალ სიაში დაამატეთ ამ იუსერების  ინიციალები სახელის და გვარის პირველი ასოები, მაგალითად: გიორგი ბიბილაშვილი -> გ.ბ
let arr4 = ['tornike', 'khozrevanidze']
let newArr = []
let j = arr4[0][0].toUpperCase() + "." + arr4[1][0].toUpperCase()
newArr.push(j)
console.log(newArr)







// 5)Splice მეთოდის გამოყენებით ჩაანაცვლეთ სიაში ყველა უარყოფითი რიცხვი 0 - ით
let arr5 = [-2, 6, -86, 4, 7]

for(let i = 0; i < arr5.length; i ++){
    if(arr5[i] < 0){
        arr5.splice(i, 1, 0)
        
    }
}
console.log(arr5)





// 6)შექმენით სია შეიყვანეთ user-ების სახელი და გვარი თუ user-ების სახელი და გვრი იწყება პატარა ასოთი slice-მეთოდის გამოყენებით ამოშალეთ ასეთი სახელები და გვარები სიიდან
let arr6 = ['tornike khozrevanidze', 'Tornike Khozrevanidze']
for(let i of arr6){
    if(i[0].toUpperCase() != i[0]){

        arr6.splice(arr6.indexOf(i), 1)
    }
}
console.log(arr6)
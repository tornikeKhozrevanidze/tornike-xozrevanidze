// 1) მომხმარებელს შემოატანინეთ რიცხვი შემდეგ დაატრიალეთ ერთიდან ამ რიცხვამდე ციკლი, while ის დახმარებით და დაბეჭდეთ მხოლოდ 1 დან მომხმარებლის შემოტანილ რიცხვამდე 3ისჯერადი და 5ის ჯერადი რიცხვი, ისეთი რიცხვები რომლებიც სამის ჯერადიც არის და ხუთის ჯერადიც

let num = Number(prompt("enter number"))

let from = 0
while(num != from){
    from += 1
    if(from % 3 == 0 && from % 5 == 0){
        console.log(from)
    }
        
}
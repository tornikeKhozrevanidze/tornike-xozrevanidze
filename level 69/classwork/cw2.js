// 2) მომხმარებელს შემოატანინეთ რიცხვი, შემდეგ შემოატანინეთ არჩევანი(ერთიდან მომხმარებლის რიცხვამდე დაბეჭდოს ლუწი, კენტი, კვადრატი ან 3 ის ჯერადი რიცხვი
let num = Number(prompt("enter number"))
let choise = prompt("enter kind of number")
i = 0
while(i != num){
    i++
    if(choise == "odd"){
        if(i % 2 != 0){
            console.log(i);
        }
    }
        
    
    else if(choise == "even"){
        if(i % 2 == 0){
            console.log(i)
        }

    }
    else if(choise == "double"){
        console.log(i * i)
    }
    else{
        if(i % 3 == 0){
            console.log(i)
        }
    }

        
    
}
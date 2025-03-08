# 1) მომხმარებელს შეეკითხეთ სახელი სანამ ეს სახელი არიქნება გაბრიელი მაქამდე არ გაჩერდეს და შეეკითხოს ისევ ხელახლა თუ იქნება გაბრიელი გაჩერდეს
i = "gabrieli"
i2 = input("enter name: ")
while i == "gabrieli":
    if i != i2:
        print("incorrect name")
        i2 = input("try again: ")
        if i2 == i:
            print("correct")
       
   
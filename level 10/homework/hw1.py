# 1) შექმენით კალკულატორი, მომხმარებელს შეეკითხეთ ორი რიცხვი, შემდეგ შეეკითხეთ რა მოქმედების შესრულება სურს ამ ორ რიცხვზე და მისი პასუხიდან გამომდინარე შეასრულეთ მოქმედება და დაბეჭდეთ მაგალითად თუ მომხმარებელი შემოიტანს რიცხვებს 5 და 7 , და შემოიტანს მოქმედებას მაგალითად დამატებას თქვენ უნდა დაუბეჭდოთ 5 + 7 = 12

num1 = int(input("enter number: "))
num2 = int(input("enter second number: "))
answer = input(" select one of these: 1)+  2)-  3)*  4)/  5)%  6)** : ")
total = num1 + num2
deception = num1 - num2
multiplication = num1 * num2
division = num1 / num2
division_with_remainder = num1 % num2
exponentiation = num1 ** num2

if answer == "1":
    print(total)
elif answer == "2":
    print(deception)
elif answer == "3":
    print(multiplication)
elif answer == "4":
    print(division)
elif answer == "5":
    print(division_with_remainder)
elif answer == "6":
    print(exponentiation)
else:
    print("this equation is not defined")
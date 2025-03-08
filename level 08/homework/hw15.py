#შეამოწმე, არის თუ არა მომხმარებლის შემოტანილი ორი რიცხვი ერთმანეთზე მეტი და 10-ის ჯერადი.
num1 = int(input("number: "))
num2 = int(input("number: "))
if num1 > num2 and num1 % 10 == 0 and num2 % 10 == 0:
    print("num 1 is greater than num2 and they are multiples of 10")
elif num1 > num2 and num1 % 10 != 0 and num2 % 10 != 0:
    print("num 1 is greater than num2 but they are not multiples of 10")

elif num1 < num2 and num1 % 10 == 0 and num2 % 10 == 0:
    print("num 2 is greater than num1 and they are multiples of 10")
elif num1 < num2 and num1 % 10 != 0 and num2 % 10 != 0:
    print("num 2 is greater than num1 but they are not multiples of 10")
else:
    print("they are not more more than one another, nor multiples of 10")
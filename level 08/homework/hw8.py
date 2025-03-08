# 8) დაწერე პროგრამა, რომელიც ამოწმებს, არის თუ არა მომხმარებლის შემოტანილი რიცხვი 100-ზე მეტი და ლუწი.
num = int(input("selct number: "))
if num > 100 and num % 2 == 0:
    print("your number is more than 100 and its an even number")
elif num > 100 and num % 2 == 1:
    print("your is more than 100, but it isn't an even")
elif num < 100 and  num % 2 == 0:
    print("your number is an even, but it is not more than 100")
else:
    print("your number is not more than 100 and its not an even number")

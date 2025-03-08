# 13) დაწერე პროგრამა, რომელიც ამოწმებს, არის თუ არა რიცხვი ლუწი ან 3-ის ჯერადი.
num = int(input("number: "))
if num % 2 == 0 or num % 3 == 0:
    print("your number is even or multiple of 3")
else:
    print("it's neither even nor a multiple of three")
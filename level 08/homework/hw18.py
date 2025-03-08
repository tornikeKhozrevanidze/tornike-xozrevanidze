#დაწერე პროგრამა, რომელიც ამოწმებს, არის თუ არა რიცხვი ერთდროულად 50-ზე ნაკლები და 10-ის ჯერადი.
num = int(input("number: "))
if num < 50 and num % 10 == 0:
    print("it is less than 50 and multiple of 10")
else:
    print("it is not less than 50 and it is not multiple of 10")
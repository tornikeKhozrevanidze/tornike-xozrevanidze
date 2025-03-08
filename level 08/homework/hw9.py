# 9) შეამოწმე მომხმარებლის შემოტანილი რიცხვი თუ არის 5-ის ან 10-ის ჯერადი.
num = int(input("select your number: "))
if num % 5 == 0 or num % 10 == 0:
    print("your number is a multiple of 5")
else:
    print("it isn't a multiple of 5")
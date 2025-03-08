#დაწერე პროგრამა, რომელიც ამოწმებს, არის თუ არა რიცხვი უარყოფითი ან  ლუწი.
num = int(input("number: "))
if num < 0 or num % 2 == 0:
    print("it is a negative or even number")
else:
    print("it is not a negative and not even nuber")


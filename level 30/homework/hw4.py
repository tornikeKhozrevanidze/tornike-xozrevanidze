#4) შექმენით ფუნქცია რომელსაც არგუმენტად გადაეცემა რიცხვი შემდეგ კი მან უნდა დაგვიბრუნოს ეს რიცხვი დადებითია თუ უარყოფითი
num = int(input("enter number: "))

def even_or_odd(number):
    if number > 0:
        return str(number) + " = possitive"
    else:
        return str(number) + " = negative"
print(even_or_odd(num))

# 3) შექმენით ფუნქცია რომელსაც გადაეცემა არგუმენტად რიცხვი შემდეგ კი მან უნდა დაგვიბრუნოს ლუწია ეს რიცხვი თუ კენტი

num = int(input("enter number: "))

def even_or_odd(number):
    if number % 2 == 0:
        return str(number) + " = even"
    else:
        return str(number) + " = odd"
print(even_or_odd(num))
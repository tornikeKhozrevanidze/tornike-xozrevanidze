#2)  შექმენით ფუნქცია რომელსაც არგუმენტად გადაეცემა რიცხვებით სავსე სია ამ ფუნქციამ კი უნდა დააბრუნოს ამ სიის რიცხვების ჯამი

listt = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

def total(something):
    a = 0
    for i in something:
        a += i
    return a
print(total(listt))

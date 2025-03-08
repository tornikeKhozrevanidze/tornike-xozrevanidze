#1) მომხმარებელს შეეკითხეთ ორი რიცხვი შემდეგ კი შექმენით ფუნქცია რომელსაც არგუმენტად გადასცემთ ამ ორ რიცხვს ხოლო ფუნქცია დააბრუნებს ამ ორი რიცხვის ჯამს, ასევე გააკეთე ასეთი 4 ფუნქცია სხვადასხვა მათემატიკური მოქმედებებისთვის, გამოიყენეთ პარამეტრები და არგუმენტად გადაეცით მომხარებლის შემოტანილი რიცხვები
user_num1 = int(input("enter number: "))
user_num2 = int(input("enter number: "))
def total(a, b):
    return a + b
def difference(c, d):
    return c - d
def product(e, f):
    return e * f
def quotient(g, h):
    return g / h

print(total(user_num1, user_num2))
print(difference(user_num1, user_num2))
print(product(user_num1, user_num2))
print(quotient(user_num1, user_num2))






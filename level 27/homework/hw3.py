# მომხმარებელს შემოატანინეთ ორი რიცხვი ხოლო ამის შემდეგ for loop - ის გამოყენებით გამოიტანეთ ამ რიცხვებს შორის ჯამი და ნამრავლი.
k = int(input("enter number: "))
j = int(input("enter second number (it has to be more than first number): "))
l = 0
p = 1
for i in range(k, (j + 1)):
    l += i
    p *= i
print("total: " + str(l))
print("product: " + str(p))
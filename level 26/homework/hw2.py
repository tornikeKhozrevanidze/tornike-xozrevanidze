# 2)  შექმენით პროგრამა რომელიც დაითვლის სიაში რამდენჯერ მეორდება თქვენი სახელი არ გამოიყენოთ count ფუნქცია 
list1 = ["tornike", "nana", "nino", "tornike", "nunu", "nona", "tornike"]
k = 0
for i in list1:
    if i == "tornike":
        k += 1
print(k)

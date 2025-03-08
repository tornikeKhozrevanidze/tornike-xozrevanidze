#დაწერეთ პროგრამა, რომელიც დაითვლის სიაში რამდენჯერ მეორდება თქვენი სახელი count - ის გარეშე
list1 = ["gaga", "guga", "gega", "gigi", "tornike", "goga", "tornike", "tornike" ]
empty = 0
for i in range(len(list1)):
    if list1[i] == "tornike":
        empty += 1
print(empty)
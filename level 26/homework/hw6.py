# 6) შექმენით სია რომელშიც იქნება სახელები შემდეგ კი შექმენით პროგრამა რომელიც ამოშლის ყველა სახელს რომელიც "t" ასოზე იწყება და ჩაამატებს ახალ სიაში
list1 = ["tornike", "nana", "nino", "tornike", "nunu", "nona", "tornike"]
k = []
for i in list1:
    if i[0] == "t":
        list1.remove(i)
        k.append(i)
print(list1)
print(k)
#1) შექმინთ 2 სია  , პირველი სია ინქება ცარიელი  ხოლო მეროე სია ინქება სახელებით სავსე მინიმუმ 5 , თქვენი დავალებაა ამ სიიდან  ჩაამოტომ მეორე სიაში სახელელბი რომელიც  4 სიმბოლოზე ნაკლებია
list1 = []
list2 = ["luka", "nino", "giori", "saba", "elene", "tornike", "nika", "maka"]
for i in range(len(list2)):
    if len(list2[i]) == 4:
            list1.append(list2[i])
print(list1)

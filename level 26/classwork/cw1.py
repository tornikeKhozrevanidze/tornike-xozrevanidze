#1) შექმენით ერთი სია რომელშიც შეიტანთ სახელებს შემდეგ შექმენით მეორე სია რომელშიც იქნება ისევ სხვადასხვა სახელები გააერთიანეთ ეს ორი სია ჩაამატეთ 5 ინდექსზე ახალი სახელი დაითვალეთ გაერთიანებული სიის სიგრძე და დაითვალეთ თქვენი სახელი რამდენჯერ გვხვდება ამ სიაში, ასევე დაბეჭდეთ რომელ ინდექსზე დგას თქვენი სახელი
list1 = ["tornike", "darina", "tamari", "nika", "luka"]
list2 = ["nino", "nana", "nona", "nunu","nini"]
list1.extend(list2)
list1.extend(["tornike", "jaba", "saba", "elene", "ana"])
print(list1)
print(len(list1))
print(list1.count("tornike"))
for i in range(len(list1)):
    if list1[i] == "tornike":
        print(i)

 #4) შექმენით 3 ცრილი სამივე იქნება განსხვავებული მონაცემთა ტიპიები  | ბოლეანი არა საჭირო | და შექმენით ცარიელი ცხრილი სადაც იქნება დასაწყისში ინტეჯერების ცხრილი  სტრინგების ცხრილი და მერე ფლოათების 
list1 = ["int", "float", "tornike", "khozrevanidze"]
list2 = [1, 2, 3, 4, 5, 6, 7, 8 ]
list3 = [1.2, 1.3, 1.4, 1.5, 1.6, 1.7]
list4 = []
for i in range(len(list1)):
    list4.append(list1[i])
for i in list2:
    list4.append(i)
for i in list3:
    list4.append(i)
print(list4)
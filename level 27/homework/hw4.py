# დაწერეთ ალგორითმი, რომელიც მომხმარებელს შეეკითხება რიცხვს. თუ რიცხვი ლუწია გაყავით ორზე, სხვა შემთხვევაში გაამრავლეთ სამზე და მიუმატეთ ერთი.
k = int(input("enter number: "))
if k % 2 == 0:
    print(k / 2)
else:
    print(k * 3 + 1)
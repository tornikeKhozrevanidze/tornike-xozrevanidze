#შემოატანინეთ მომხმარებელს მისი ასაკი თუ მისი ასაკი 18 წელზე მეტია დაუპრინტეთ “you are adult” თუ 18 წელზე ნაკლები “you are virgin”
age = int(input("your age: "))
if age < 18:
    print("you are minor")
else:
    print("you are adult")
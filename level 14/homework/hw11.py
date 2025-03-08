#დაწერეთ ისეთი პროგრამა რომელიც მომხმარებელს უპრინტავს კვირის დღეს მომხმარებლის შემოტანილი რიცხვის მიხედვით (1 არის ორშაბათი, 2 სამშაბათი და ა.შ) გამოიყენეთ if elif else 
week = int(input("enter number: "))
if week == 1:
    print("sunday")
elif week == 2:
    print("monday")
elif week == 3:
    print("tuesday")
elif week == 4:
    print("wednesday")
elif week == 5:
    print("thursday")
elif week == 6:
    print("friday")
elif week == 7:
    print("saturday")
else:
    print("error")

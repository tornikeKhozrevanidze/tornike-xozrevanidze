# ) შექმენით სია და for loop დახმარებით გამოიტანეთ მხოლოდ ლუწი ინდექსებზე მდგომი ელემენტები
list = ["zero", "one", "two", "three", "four", "five", "six", "sven", "eight", "nine", "ten"]
for i in range(11):
    if i % 2 == 0:
        print(list[i])
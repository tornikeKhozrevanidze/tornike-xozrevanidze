#  2) გააკეთეთ random student generator რომელსაც გადაეცემა ჯგუფის მოსწავლეებით სავსე სია და დაგვიბრუნებს რენდომულად განაწილებულ გუნდებს მზგავსად როგორც გავაკეთეთ წინა გაკვეთილზე
import random
def random_generator(student_list):
    a = []
    b = []
    while student_list != []:
        random_student = random.choice(student_list)
        b.append(random_student)
        student_list.remove(random_student)
        if len(b) == 3:
            a.append(b)
            b = []
    a.append(b)
    return a

    
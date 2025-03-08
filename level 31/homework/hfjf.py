list2 = [4, 5, 7, 68, 666, 8, 1, 0]
def toka(list2):
    a = list2[0]
    for i in list2:
        if i < a:
            a = i
    return a
print(toka(list2))
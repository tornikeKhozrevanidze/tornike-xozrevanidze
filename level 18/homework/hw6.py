#1-დან 100-მდე ლუწი რიცხვების ჯამი:
r = 0
for i in range(1, 100):
    if i % 2 == 0:
        r = r + i
print(r)

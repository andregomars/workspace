def vampire_test(x, y):
	return sorted(str(x*y)) == sorted(str(x)+str(y))

print vampire_test(6,21)
print vampire_test(10,11)

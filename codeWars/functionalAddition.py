def add(n):
    def plusN(m):
    	return n+m
    return plusN

addOne = add(1)
print addOne(3) # 4

addThree = add(3)
print addThree(3) # 6
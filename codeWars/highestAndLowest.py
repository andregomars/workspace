def high_and_low(numbers):
	#example:
	#high_and_low("1 2 3 4 5")  # return "5 1"
	#high_and_low("1 2 -3 4 5") # return "5 -3"
	#high_and_low("1 9 3 4 -5") # return "9 -5"
	list = [int(x) for x in numbers.split(" ")]
	return str(max(list)) + ' ' + str(min(list))

print high_and_low("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6")


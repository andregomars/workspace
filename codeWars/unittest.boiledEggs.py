import unittest
from boiledEggs import BoiledEggs

class TestBoiledEggs(unittest.TestCase):
	def test(self):
		eggs = BoiledEggs()
		self.assertEqual(eggs.cooking_time(0),0)
		self.assertEqual(eggs.cooking_time(5),5)
		self.assertEqual(eggs.cooking_time(10),10)
		self.assertEqual(eggs.cooking_time(8),5)
		self.assertEqual(eggs.cooking_time(7),5)

if __name__ == "__main__":
	unittest.main()

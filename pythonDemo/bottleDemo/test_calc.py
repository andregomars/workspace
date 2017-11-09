import unittest
import calc

class TestCalc(unittest.TestCase):
  def test_add(self):
    self.assertEqual(calc.add(3, 2), 5)
    self.assertEqual(calc.add(17, 21), 38)

  def test_multiply(self):
    self.assertEqual(calc.multiply(3, 2), 16)
    self.assertEqual(calc.multiply(11, 5), 55)


if __name__ == '__main__':
  unittest.main()
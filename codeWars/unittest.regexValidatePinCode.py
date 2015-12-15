import unittest
from regexValidatePinCode import RegexValidatePinCode

class TestRegexValidatePincode(unittest.TestCase):
	def test_regex(self):
		regex = RegexValidatePinCode()
		self.assertTrue(regex.validate_pin('1234'))
		self.assertTrue(regex.validate_pin('123456'))
		self.assertFalse(regex.validate_pin('1234aa'))
		self.assertFalse(regex.validate_pin('00'))
		self.assertFalse(regex.validate_pin('123442536'))

if __name__ == "__main__":
	unittest.main()


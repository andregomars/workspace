import re

class RegexValidatePinCode(object):

	def validate_pin(self, pin):
		return bool(re.match(r"^\d{4}$|^\d{6}$", pin))
'''
val = RegexValidatePinCode()
print val.validate_pin('1234')

print validate_pin('123456')
print validate_pin('12340')
print validate_pin('1234a')
print validate_pin('00')
print validate_pin('1234896')
'''

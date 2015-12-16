import unittest
from htmlGenerator import HTMLGen

class TestHTMLGen(unittest.TestCase):
	def test(self):
		gen = HTMLGen()
		self.assertEqual(gen.a('hello'),"<a>hello</a>")
		self.assertEqual(gen.p('hello'),"<p>hello</p>")
		self.assertEqual(gen.div('hello'),"<div>hello</div>")
		self.assertEqual(gen.comment('hello'),"<!--hello-->")

if __name__ == "__main__":
	unittest.main()

